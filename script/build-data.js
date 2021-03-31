'use strict'

var fs = require('fs')
var udhr = require('udhr')
var trigramUtils = require('trigram-utils')

var own = {}.hasOwnProperty

var json = udhr.json()
var information = udhr.information()

// Variables to keep track of some information.
var highestTrigram = ['', 0]
var highestTrigramLanguage

// Automated index files.
var allIndex = createIndexFile('all')
var minIndex = createIndexFile('min')
var topIndex = createIndexFile('top')

var ignore = new Set(['ccp', 'fuf_adlm', 'san_gran'])
var key
var plain
var trigrams
var topTrigrams
var totalTopTrigramOccurrences
var trigramIndex

for (key in json) {
  if (!own.call(json, key) || ignore.has(key)) {
    continue
  }

  plain = all(json[key], 'para').join('')
  trigrams = trigramUtils.asTuples(plain)
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
    information[key].name,
    key,
    trigrams[trigrams.length - 1][0],
    trigrams[trigrams.length - 1][1],
    trigrams.length,
    totalTopTrigramOccurrences,
    plain.length
  )

  if (trigrams[trigrams.length - 1][1] > highestTrigram[1]) {
    highestTrigram = trigrams[trigrams.length - 1]
    highestTrigramLanguage = information[key].name
  }

  allIndex.add(key)

  fs.writeFileSync(
    './data/all/' + key + '.json',
    JSON.stringify(trigramUtils.tuplesAsDictionary(trigrams), null, 2) + '\n'
  )

  if (
    trigrams.length > 300 &&
    trigrams[trigrams.length - 1][1] > 30 &&
    plain.length / totalTopTrigramOccurrences < 2.5
  ) {
    fs.writeFileSync(
      './data/top/' + key + '.json',
      JSON.stringify(trigramUtils.tuplesAsDictionary(topTrigrams), null, 2) +
        '\n'
    )

    fs.writeFileSync(
      './data/min/' + key + '.json',
      JSON.stringify(
        topTrigrams.map((d) => d[0]),
        null,
        2
      ) + '\n'
    )

    topIndex.add(key)
    minIndex.add(key)

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

// Write the file containing all trigrams.
fs.writeFileSync('./data/all.js', allIndex)

console.log('Finished writing %s files.\n', allIndex.count())

// Write the file containing top trigrams.
fs.writeFileSync('./data/top.js', topIndex)

console.log(
  'Finished writing %s top files (ignoring %s).\n',
  topIndex.count(),
  allIndex.count() - topIndex.count()
)

// Write the file containing top trigrams as an array.
fs.writeFileSync('./data/min.js', minIndex)

console.log(
  'Finished writing %s min files (ignoring %s).\n',
  minIndex.count(),
  allIndex.count() - minIndex.count()
)

function createIndexFile(type) {
  var queue = []

  return {toString, add, count}

  function add(code) {
    queue.push({code: code, path: code + '.json'})
  }

  function toString() {
    return (
      "'use strict'\n" +
      '\n' +
      'module.exports = {\n' +
      '  ' +
      queue
        .map(
          (d) => '"' + d.code + '": require("./' + type + '/' + d.path + '")'
        )
        .join(',\n') +
      '\n' +
      '}\n'
    )
  }

  function count() {
    return queue.length
  }
}

function all(object, key) {
  var results = []
  var property
  var value

  for (property in object) {
    if (own.call(object, property)) {
      value = object[property]

      if (property === key) {
        results.push(value)
      } else if (typeof value === 'object') {
        results = results.concat(all(value, key))
      }
    }
  }

  return results
}
