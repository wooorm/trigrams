import fs from 'fs'
import path from 'path'
import unified from 'unified'
import rehypeParse from 'rehype-parse'
// @ts-ignore remove when typed
import $ from 'hast-util-select'
// @ts-ignore remove when typed
import toString from 'hast-util-to-string'
import {udhr} from 'udhr'
import {asTuples, tuplesAsDictionary} from 'trigram-utils'

/**
 * @typedef {import('trigram-utils').TrigramTuple} TrigramTuple
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 */

// Automated index files.
var min = createIndexFile()
var top = createIndexFile()

// Variables to keep track of some information.
/** @type {TrigramTuple} */
var highestTrigram = ['', 0]
/** @type {string} */
var highestTrigramLanguage
var ignore = new Set(['ccp', 'fuf_adlm', 'san_gran'])
var index = -1
var pipeline = unified().use(rehypeParse)
var allCount = 0
/** @type {string} */
var plain
/** @type {TrigramTuple[]} */
var trigrams
/** @type {TrigramTuple[]} */
var topTrigrams
/** @type {number} */
var totalTopTrigramOccurrences
/** @type {number} */
var trigramIndex
/** @type {Root} */
var tree

while (++index < udhr.length) {
  if (ignore.has(udhr[index].code)) {
    continue
  }

  tree = pipeline.parse(
    fs.readFileSync(
      path.join(
        'node_modules',
        'udhr',
        'declaration',
        udhr[index].code + '.html'
      )
    )
  )
  plain = $.selectAll('article p', tree)
    .map((/** @type {Element} */ d) => /** @type {string} */ toString(d))
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
    udhr[index].code,
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
    top.add(udhr[index].code, tuplesAsDictionary(topTrigrams))
    min.add(
      udhr[index].code,
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
  /**
   * @type {Object.<string, unknown>}
   */
  var index = {}

  return {toString, add, count}

  /**
   * @param {string} code
   * @param {unknown} data
   */
  function add(code, data) {
    index[code] = data
  }

  /**
   * @returns {string}
   */
  function toString() {
    return JSON.stringify(index, null, 2)
  }

  /**
   * @returns {number}
   */
  function count() {
    return Object.keys(index).length
  }
}
