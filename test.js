import assert from 'node:assert/strict'
import test from 'node:test'
import {min, top} from './index.js'

test('trigrams', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'min',
      'top'
    ])
  })
})

test('top()[]', async function (t) {
  const data = await top()

  await t.test('should be an object', async function () {
    for (const [code, value] of Object.entries(data)) {
      assert.strictEqual(typeof value, 'object', code + ' should be an object')
    }
  })

  await t.test('should contain 300 values', async function () {
    for (const [code, value] of Object.entries(data)) {
      assert.strictEqual(
        Object.keys(value).length,
        300,
        code + ' should have 300 values'
      )
    }
  })

  await t.test('should contain integers', async function () {
    for (const [code, value] of Object.entries(data)) {
      for (const [trigram, count] of Object.entries(value)) {
        assert.strictEqual(
          typeof count,
          'number',
          trigram + ' in ' + code + ' should be a number'
        )

        assert.strictEqual(
          Math.round(count),
          count,
          trigram + ' in ' + code + ' should be an integer'
        )
      }
    }
  })
})

test('min()[]', async function (t) {
  const data = await min()

  await t.test('should be an array', async function () {
    for (const [code, value] of Object.entries(data)) {
      assert.ok(Array.isArray(value), code + ' should be an array')
    }
  })

  await t.test('should contain 300 values', async function () {
    for (const [code, value] of Object.entries(data)) {
      assert.strictEqual(value.length, 300, code + ' should have 300 values')
    }
  })

  await t.test('should contain strings', async function () {
    for (const [code, value] of Object.entries(data)) {
      let index = -1
      while (++index < value.length) {
        assert.strictEqual(
          typeof value[index],
          'string',
          index + ' in ' + code + ' should be a string'
        )
      }
    }
  })
})
