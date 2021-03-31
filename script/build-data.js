import fs from 'fs'
import path from 'path'
import unified from 'unified'
import rehypeParse from 'rehype-parse'
import $ from 'hast-util-select'
import toString from 'hast-util-to-string'
import {udhr} from 'udhr'
import {asTuples, tuplesAsDictionary} from 'trigram-utils'

// Variables to keep track of some information.
var highestTrigram = ['', 0]
var highestTrigramLanguage

// Automated index files.
var min = createIndexFile()
var top = createIndexFile()

var ignore = new Set(['ccp', 'fuf_adlm', 'san_gran'])
var index = -1
var pipeline = unified().use(rehypeParse)
var allCount = 0
var plain
var trigrams
var topTrigrams
var totalTopTrigramOccurrences
var trigramIndex
var code
var tree

while (++index < udhr.length) {
  code = udhr[index].code

  if (ignore.has(code)) {
    continue
  }

  tree = pipeline.parse(
    fs.readFileSync(
      path.join('node_modules', 'udhr', 'declaration', code + '.html')
    )
  )
  plain = $.selectAll('article p', tree)
    .map((d) => toString(d))
    .join(' ')
  trigrams = asTuples(plain)
  topTrigrams = trigrams.slice(-300)
  totalTopTrigramOccurrences = 0
  trigramIndex = -1

  while (++trigramIndex < topTrigrams.length) {
    totalTopTrigramOccurrences += topTrigrams[trigramIndex][1]
  }

  console.log(
    [
      'Writing trigram file for: %s',
      '',
      '*   Code:                  `%s`;',
      '*   Highest trigram:       `%s`;',
      '*   Highest trigram count:  %s;',
      '*   Total trigrams:         %s;',
      '*   Top trigrams count:     %s;',
      '*   String length:          %s;'
    ].join('\n'),
    udhr[index].name,
    code,
    trigrams[trigrams.length - 1][0],
    trigrams[trigrams.length - 1][1],
    trigrams.length,
    totalTopTrigramOccurrences,
    plain.length
  )

  if (trigrams[trigrams.length - 1][1] > highestTrigram[1]) {
    highestTrigram = trigrams[trigrams.length - 1]
    highestTrigramLanguage = udhr[index].name
  }

  allCount++

  if (
    trigrams.length > 300 &&
    trigrams[trigrams.length - 1][1] > 30 &&
    plain.length / totalTopTrigramOccurrences < 2.5
  ) {
    top.add(code, tuplesAsDictionary(topTrigrams))
    min.add(
      code,
      topTrigrams.map((d) => d[0])
    )

    console.log(
      '*   Top trigram file:       yes;\n- Min trigram file:       yes.'
    )
  } else {
    console.log(
      '*   Top trigram file:       no;\n- Min trigram file:       no.'
    )
  }

  console.log('')
}

// Log information regarding the highest trigram.
console.log(
  'The highest trigram was `%s` which occurred %s times in %s.\n',
  highestTrigram[0],
  highestTrigram[1],
  highestTrigramLanguage
)

// Write the file containing top trigrams.
fs.writeFileSync(path.join('lib', 'top.json'), top)

console.log(
  'Finished writing %s top files (ignoring %s).\n',
  top.count(),
  allCount - top.count()
)

// Write the file containing top trigrams as an array.
fs.writeFileSync(path.join('lib', 'min.json'), min)

console.log(
  'Finished writing %s min files (ignoring %s).\n',
  min.count(),
  allCount - min.count()
)

function createIndexFile() {
  var index = {}

  return {toString, add, count}

  function add(code, data) {
    index[code] = data
  }

  function toString() {
    return JSON.stringify(index, null, 2)
  }

  function count() {
    return Object.keys(index).length
  }
}
