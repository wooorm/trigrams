'use strict'

var fs = require('fs')
var udhr = require('udhr')
var trigramUtils = require('trigram-utils')

var writeFile = fs.writeFileSync

var json = udhr.json()
var information = udhr.information()

// Variables to keep track of some information.
var highestTrigramCount = 0
var highestTrigram
var highestTrigramLanguage

// Automated index files.
var allIndex = createIndexFile('all')
var minIndex = createIndexFile('min')
var topIndex = createIndexFile('top')

// Create data.
Object.keys(json)
  .filter(filter)
  .forEach(function(code) {
    var plain = all(json[code], 'para').join('')
    var trigrams = trigramUtils.asTuples(plain)
    var topTrigrams = trigrams.slice(-300)
    var trigram = topTrigrams[topTrigrams.length - 1]
    var language = information[code].name
    var totalTopTrigramOccurrences

    totalTopTrigramOccurrences = topTrigrams.reduce(function(a, b) {
      return a + b[1]
    }, 0)

    console.log(
      [
        'Writing trigram file for: %s',
        '- Code:                  "%s";',
        '- Highest trigram:       "%s";',
        '- Highest trigram count:  %s;',
        '- Total trigrams:         %s;',
        '- Top trigrams count:     %s;',
        '- String length:          %s;'
      ].join('\n'),
      language,
      code,
      trigram[0],
      trigram[1],
      trigrams.length,
      totalTopTrigramOccurrences,
      plain.length
    )

    if (trigram[1] > highestTrigramCount) {
      highestTrigramCount = trigram[1]
      highestTrigram = trigram[0]
      highestTrigramLanguage = language
    }

    allIndex.add(code)

    writeFile(
      './data/all/' + code + '.json',
      JSON.stringify(trigramUtils.tuplesAsDictionary(trigrams), 0, 2)
    )

    if (
      topTrigrams.length === 300 &&
      trigram[1] > 30 &&
      plain.length / totalTopTrigramOccurrences < 2.5
    ) {
      writeFile(
        './data/top/' + code + '.json',
        JSON.stringify(trigramUtils.tuplesAsDictionary(topTrigrams), 0, 2)
      )

      writeFile(
        './data/min/' + code + '.json',
        JSON.stringify(
          topTrigrams.map(function(trigram) {
            return trigram[0]
          }),
          0,
          2
        )
      )

      topIndex.add(code)
      minIndex.add(code)

      console.log(
        '- Top trigram file:       yes;\n- Min trigram file:       yes.'
      )
    } else {
      console.log(
        '- Top trigram file:       no;\n- Min trigram file:       no.'
      )
    }

    console.log('')
  })

// Log information regarding the highest trigram.
console.log(
  'The highest trigram was "%s" which occurred %s times in %s.\n',
  highestTrigram,
  highestTrigramCount,
  highestTrigramLanguage
)

// Write the file containing all trigrams.
writeFile('./data/all.js', allIndex)

console.log('Finished writing %s files.\n', allIndex.count())

// Write the file containing top trigrams.
writeFile('./data/top.js', topIndex)

console.log(
  'Finished writing %s top files (ignoring %s).\n',
  topIndex.count(),
  allIndex.count() - topIndex.count()
)

// Write the file containing top trigrams as an array.
writeFile('./data/min.js', minIndex)

console.log(
  'Finished writing %s min files (ignoring %s).\n',
  minIndex.count(),
  allIndex.count() - minIndex.count()
)

function createIndexFile(type) {
  var queue = []

  return {
    toString: done,
    add: addFile,
    count: count
  }

  function addFile(code) {
    queue.push({
      code: code,
      path: code + '.json'
    })
  }

  function done() {
    var lines = queue.map(function(file) {
      return '"' + file.code + '": require("./' + type + '/' + file.path + '")'
    })

    return (
      "'use strict'\n" +
      '\n' +
      'module.exports = {\n' +
      '  ' +
      lines.join(',\n') +
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
    value = object[property]

    if (property === key) {
      results.push(value)
    } else if (typeof value === 'object') {
      results = results.concat(all(value, key))
    }
  }

  return results
}

function filter(code) {
  return code !== 'ccp' && code !== 'fuf_adlm' && code !== 'san_gran'
}
