'use strict'

var assert = require('assert')
var test = require('tape')
var trigrams = require('.')

test('trigrams.all()', function(t) {
  var all = trigrams.all()

  t.doesNotThrow(function() {
    Object.keys(all).forEach(function(code) {
      assert.strictEqual(
        typeof all[code],
        'object',
        code + ' should be an object'
      )
    })
  }, 'trigrams.all().n should be an object')

  t.doesNotThrow(function() {
    Object.keys(all).forEach(function(code) {
      Object.keys(all[code]).forEach(function(trigram) {
        var value = all[code][trigram]

        assert.strictEqual(
          typeof value,
          'number',
          value + ' in ' + code + ' should be a number'
        )

        assert.strictEqual(
          Math.round(value),
          value,
          value + ' in ' + code + ' should be an integer'
        )
      })
    })
  }, 'trigrams.all().n.n should be an integer')

  t.end()
})

test('trigrams.top()', function(t) {
  var top = trigrams.top()

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      assert.strictEqual(
        typeof top[code],
        'object',
        code + ' should be an object'
      )
    })
  }, 'trigrams.top().n should be an object')

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      assert.strictEqual(
        Object.keys(top[code]).length,
        300,
        code + ' should have 300 values'
      )
    })
  }, 'trigrams.top().n should contain 300 values')

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      Object.keys(top[code]).forEach(function(trigram) {
        var value = top[code][trigram]

        assert.strictEqual(
          typeof value,
          'number',
          value + ' in ' + code + ' should be a number'
        )

        assert.strictEqual(
          Math.round(value),
          value,
          value + ' in ' + code + ' should be an integer'
        )
      })
    })
  }, 'trigrams.top().n.n should be an integer')

  t.end()
})

test('trigrams.min()', function(t) {
  var min = trigrams.min()

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      assert.ok(Array.isArray(min[code]), code + ' should be an array')
    })
  }, 'trigrams.min().n should be an array')

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      assert.strictEqual(
        min[code].length,
        300,
        code + ' should have 300 values'
      )
    })
  }, 'trigrams.min().n should contain 300 values')

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      min[code].forEach(function(value) {
        assert.strictEqual(
          typeof value,
          'string',
          value + ' in ' + code + ' should be a string'
        )
      })
    })
  }, 'trigrams.min().n[n] should be a string')

  t.end()
})
