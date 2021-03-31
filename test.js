'use strict'

var assert = require('assert')
var test = require('tape')
var trigrams = require('.')

var own = {}.hasOwnProperty

test('trigrams.all()', function (t) {
  var all = trigrams.all()

  t.doesNotThrow(function () {
    var code

    for (code in all) {
      if (own.call(all, code)) {
        assert.strictEqual(
          typeof all[code],
          'object',
          code + ' should be an object'
        )
      }
    }
  }, 'trigrams.all()[] should be an object')

  t.doesNotThrow(function () {
    var code
    var trigram

    for (code in all) {
      if (own.call(all, code)) {
        for (trigram in all[code]) {
          if (own.call(all[code], trigram)) {
            assert.strictEqual(
              typeof all[code][trigram],
              'number',
              trigram + ' in ' + code + ' should be a number'
            )

            assert.strictEqual(
              Math.round(all[code][trigram]),
              all[code][trigram],
              trigram + ' in ' + code + ' should be an integer'
            )
          }
        }
      }
    }
  }, 'trigrams.all()[][] should be an integer')

  t.end()
})

test('trigrams.top()', function (t) {
  var top = trigrams.top()

  t.doesNotThrow(function () {
    var code

    for (code in top) {
      if (own.call(top, code)) {
        assert.strictEqual(
          typeof top[code],
          'object',
          code + ' should be an object'
        )
      }
    }
  }, 'trigrams.top()[] should be an object')

  t.doesNotThrow(function () {
    var code

    for (code in top) {
      if (own.call(top, code)) {
        assert.strictEqual(
          Object.keys(top[code]).length,
          300,
          code + ' should have 300 values'
        )
      }
    }
  }, 'trigrams.top()[] should contain 300 values')

  t.doesNotThrow(function () {
    var code
    var trigram

    for (code in top) {
      if (own.call(top, code)) {
        for (trigram in top[code]) {
          if (own.call(top[code], trigram)) {
            assert.strictEqual(
              typeof top[code][trigram],
              'number',
              trigram + ' in ' + code + ' should be a number'
            )

            assert.strictEqual(
              Math.round(top[code][trigram]),
              top[code][trigram],
              trigram + ' in ' + code + ' should be an integer'
            )
          }
        }
      }
    }
  }, 'trigrams.top()[][] should be an integer')

  t.end()
})

test('trigrams.min()', function (t) {
  var min = trigrams.min()

  t.doesNotThrow(function () {
    var code

    for (code in min) {
      if (own.call(min, code)) {
        assert.ok(Array.isArray(min[code]), code + ' should be an array')
      }
    }
  }, 'trigrams.min()[] should be an array')

  t.doesNotThrow(function () {
    var code

    for (code in min) {
      if (own.call(min, code)) {
        assert.strictEqual(
          min[code].length,
          300,
          code + ' should have 300 values'
        )
      }
    }
  }, 'trigrams.min()[] should contain 300 values')

  t.doesNotThrow(function () {
    var code
    var index

    for (code in min) {
      if (own.call(min, code)) {
        index = -1
        while (++index < min[code].length) {
          assert.strictEqual(
            typeof min[code][index],
            'string',
            index + ' in ' + code + ' should be a string'
          )
        }
      }
    }
  }, 'trigrams.min()[][] should be a string')

  t.end()
})
