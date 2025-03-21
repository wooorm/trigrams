/* eslint-disable no-await-in-loop */

import fs from 'node:fs/promises'
import {fromHtml} from 'hast-util-from-html'
import {selectAll} from 'hast-util-select'
import {toString} from 'hast-util-to-string'
import {resolve} from 'import-meta-resolve'
import {asTuples, tuplesAsDictionary} from 'trigram-utils'
import {udhr} from 'udhr'

/** @type {Record<string, Array<string>>} */
const min = {}
/** @type {Record<string, Record<string, number>>} */
const top = {}

// Variables to keep track of some information.
/** @type {[string, number]} */
let highestTrigram = ['', 0]
/** @type {string | undefined} */
let highestTrigramLanguage
const ignore = new Set(['ccp', 'fuf_adlm', 'san_gran'])
let index = -1
let allCount = 0

const base = new URL(await resolve('udhr', import.meta.url))

while (++index < udhr.length) {
  const info = udhr[index]

  if (ignore.has(info.code)) {
    continue
  }

  const tree = fromHtml(
    await fs.readFile(new URL('declaration/' + info.code + '.html', base))
  )

  let plain = ''

  for (const paragraph of selectAll('article p', tree)) {
    plain += ' ' + toString(paragraph)
  }

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
    top[info.code] = tuplesAsDictionary(topTrigrams)

    /** @type {Array<string>} */
    const values = []

    for (const trigram of topTrigrams) {
      values.push(trigram[0])
    }

    min[info.code] = values

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
  JSON.stringify(top, undefined, 2) + '\n'
)

console.log(
  'Finished writing %s top files (ignoring %s).\n',
  Object.keys(top).length,
  allCount - Object.keys(top).length
)

// Write the file containing top trigrams as an array.
await fs.writeFile(
  new URL('../lib/min.json', import.meta.url),
  JSON.stringify(min, undefined, 2) + '\n'
)

console.log(
  'Finished writing %s min files (ignoring %s).\n',
  Object.keys(min).length,
  allCount - Object.keys(min).length
)
