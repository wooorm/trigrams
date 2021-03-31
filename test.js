import assert from 'assert'
import test from 'tape'
import {top, min} from './index.js'

var own = {}.hasOwnProperty

test('trigrams.top()', async function (t) {
  var data = await top()

  t.doesNotThrow(function () {
    /** @type {string} */
    var code

    for (code in data) {
      if (own.call(data, code)) {
        assert.strictEqual(
          typeof data[code],
          'object',
          code + ' should be an object'
        )
      }
    }
  }, 'trigrams.top()[] should be an object')

  t.doesNotThrow(function () {
    /** @type {string} */
    var code

    for (code in data) {
      if (own.call(data, code)) {
        assert.strictEqual(
          Object.keys(data[code]).length,
          300,
          code + ' should have 300 values'
        )
      }
    }
  }, 'trigrams.top()[] should contain 300 values')

  t.doesNotThrow(function () {
    /** @type {string} */
    var code
    /** @type {string} */
    var trigram

    for (code in data) {
      if (own.call(data, code)) {
        for (trigram in data[code]) {
          if (own.call(data[code], trigram)) {
            assert.strictEqual(
              typeof data[code][trigram],
              'number',
              trigram + ' in ' + code + ' should be a number'
            )

            assert.strictEqual(
              Math.round(data[code][trigram]),
              data[code][trigram],
              trigram + ' in ' + code + ' should be an integer'
            )
          }
        }
      }
    }
  }, 'trigrams.top()[][] should be an integer')

  t.end()
})

test('trigrams.min()', async function (t) {
  var data = await min()

  t.doesNotThrow(function () {
    /** @type {string} */
    var code

    for (code in data) {
      if (own.call(data, code)) {
        assert.ok(Array.isArray(data[code]), code + ' should be an array')
      }
    }
  }, 'trigrams.min()[] should be an array')

  t.doesNotThrow(function () {
    /** @type {string} */
    var code

    for (code in data) {
      if (own.call(data, code)) {
        assert.strictEqual(
          data[code].length,
          300,
          code + ' should have 300 values'
        )
      }
    }
  }, 'trigrams.min()[] should contain 300 values')

  t.doesNotThrow(function () {
    /** @type {string} */
    var code
    /** @type {number} */
    var index

    for (code in data) {
      if (own.call(data, code)) {
        index = -1
        while (++index < data[code].length) {
          assert.strictEqual(
            typeof data[code][index],
            'string',
            index + ' in ' + code + ' should be a string'
          )
        }
      }
    }
  }, 'trigrams.min()[][] should be a string')

  t.end()
})
