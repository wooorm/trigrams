import assert from 'node:assert/strict'
import test from 'node:test'
import {top, min} from './index.js'

const own = {}.hasOwnProperty

test('trigrams.top()', async function () {
  const data = await top()

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

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

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

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

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

    for (code in data) {
      if (own.call(data, code)) {
        /** @type {string} */
        let trigram

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
})

test('trigrams.min()', async function () {
  const data = await min()

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

    for (code in data) {
      if (own.call(data, code)) {
        assert.ok(Array.isArray(data[code]), code + ' should be an array')
      }
    }
  }, 'trigrams.min()[] should be an array')

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

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

  assert.doesNotThrow(function () {
    /** @type {string} */
    let code

    for (code in data) {
      if (own.call(data, code)) {
        let index = -1
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
})
