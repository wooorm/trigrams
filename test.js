'use strict'

var assert = require('assert')
var test = require('tape')
var trigrams = require('.')

test('trigrams.all()', function(t) {
  var all = trigrams.all()

  t.doesNotThrow(function() {
    Object.keys(all).forEach(function(code) {
      assert(typeof all[code] === 'object')
    })
  }, 'trigrams.all().n should be an object')

  t.doesNotThrow(function() {
    Object.keys(all).forEach(function(code) {
      Object.keys(all[code]).forEach(function(trigram) {
        var value = all[code][trigram]

        assert(typeof value === 'number')
        assert(Math.round(value) === value)
      })
    })
  }, 'trigrams.all().n.n should be an integer')

  t.end()
})

test('trigrams.top()', function(t) {
  var top = trigrams.top()

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      assert(typeof top[code] === 'object')
    })
  }, 'trigrams.top().n should be an object')

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      assert(Object.keys(top[code]).length === 300)
    })
  }, 'trigrams.top().n should contain 300 attributes')

  t.doesNotThrow(function() {
    Object.keys(top).forEach(function(code) {
      Object.keys(top[code]).forEach(function(trigram) {
        var value = top[code][trigram]

        assert(typeof value === 'number')
        assert(Math.round(value) === value)
      })
    })
  }, 'trigrams.top().n.n should be an integer')

  t.end()
})

test('trigrams.min()', function(t) {
  var min = trigrams.min()

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      assert(Array.isArray(min[code]))
    })
  }, 'trigrams.min().n should be an array')

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      assert(min[code].length === 300)
    })
  }, 'trigrams.min().n should contain 300 values')

  t.doesNotThrow(function() {
    Object.keys(min).forEach(function(code) {
      min[code].forEach(function(trigram) {
        assert(typeof trigram === 'string')
      })
    })
  }, 'trigrams.min().n[n] should be a string')

  t.end()
})
