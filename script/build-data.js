/**
 * @typedef {import('trigram-utils').TrigramTuple} TrigramTuple
 */

import fs from 'node:fs/promises'
import {resolve} from 'import-meta-resolve'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {udhr} from 'udhr'
import {asTuples, tuplesAsDictionary} from 'trigram-utils'

// Automated index files.
const min = createIndexFile()
const top = createIndexFile()

// Variables to keep track of some information.
/** @type {TrigramTuple} */
let highestTrigram = ['', 0]
/** @type {string|undefined} */
let highestTrigramLanguage
const ignore = new Set(['ccp', 'fuf_adlm', 'san_gran'])
let index = -1
let allCount = 0

const base = new URL(await resolve('udhr', import.meta.url))

/* eslint-disable no-await-in-loop */

while (++index < udhr.length) {
  const info = udhr[index]

  if (ignore.has(info.code)) {
    continue
  }

  const tree = fromHtml(
    await fs.readFile(new URL('declaration/' + info.code + '.html', base))
  )

  const plain = selectAll('article p', tree)
    .map((d) => toString(d))
    .join(' ')
  const trigrams = asTuples(plain)
  const topTrigrams = trigrams.slice(-300)
  let totalTopTrigramOccurrences = 0
  let trigramIndex = -1

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
    info.name,
    info.code,
    trigrams[trigrams.length - 1][0],
    trigrams[trigrams.length - 1][1],
    trigrams.length,
    totalTopTrigramOccurrences,
    plain.length
  )

  if (trigrams[trigrams.length - 1][1] > highestTrigram[1]) {
    highestTrigram = trigrams[trigrams.length - 1]
    highestTrigramLanguage = info.name
  }

  allCount++

  if (
    trigrams.length > 300 &&
    trigrams[trigrams.length - 1][1] > 30 &&
    plain.length / totalTopTrigramOccurrences < 2.5
  ) {
    top.add(info.code, tuplesAsDictionary(topTrigrams))
    min.add(
      info.code,
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
await fs.writeFile(
  new URL('../lib/top.json', import.meta.url),
  String(top) + '\n'
)

console.log(
  'Finished writing %s top files (ignoring %s).\n',
  top.count(),
  allCount - top.count()
)

// Write the file containing top trigrams as an array.
await fs.writeFile(
  new URL('../lib/min.json', import.meta.url),
  String(min) + '\n'
)

console.log(
  'Finished writing %s min files (ignoring %s).\n',
  min.count(),
  allCount - min.count()
)

function createIndexFile() {
  /**
   * @type {Object.<string, unknown>}
   */
  const index = {}

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

/* eslint-enable no-await-in-loop */
