'use strict';

/* eslint-env node, mocha */

/*
 * Dependencies.
 */

var assert = require('assert');
var trigrams = require('./');

/*
 * Tests.
 */

describe('trigrams', function () {
    it('should be an `Object`', function () {
        assert(typeof trigrams === 'object');
    });
});

describe('trigrams.all()', function () {
    var allTrigrams;

    before(function () {
        allTrigrams = trigrams.all();
    });

    it('should return an object', function () {
        assert(typeof allTrigrams === 'object');
    });

    it('trigrams.all().n should be an object', function () {
        Object.keys(allTrigrams).forEach(function (code) {
            assert(typeof allTrigrams[code] === 'object');
        });
    });

    it('trigrams.all().n.n should be an integer', function () {
        Object.keys(allTrigrams).forEach(function (code) {
            Object.keys(allTrigrams[code]).forEach(function (trigram) {
                var value = allTrigrams[code][trigram];

                assert(typeof value === 'number');
                assert(Math.round(value) === value);
            });
        });
    });
});

describe('trigrams.top()', function () {
    var topTrigrams;

    before(function () {
        topTrigrams = trigrams.top();
    });

    it('should return an object', function () {
        assert(typeof topTrigrams === 'object');
    });

    it('trigrams.top().n should be an object', function () {
        Object.keys(topTrigrams).forEach(function (code) {
            assert(typeof topTrigrams[code] === 'object');
        });
    });

    it('trigrams.top().n should contain 300 attributes', function () {
        Object.keys(topTrigrams).forEach(function (code) {
            assert(Object.keys(topTrigrams[code]).length === 300);
        });
    });

    it('trigrams.top().n.n should be an integer', function () {
        Object.keys(topTrigrams).forEach(function (code) {
            Object.keys(topTrigrams[code]).forEach(function (trigram) {
                var value = topTrigrams[code][trigram];

                assert(typeof value === 'number');
                assert(Math.round(value) === value);
            });
        });
    });
});

describe('trigrams.min()', function () {
    var minTrigrams;

    before(function () {
        minTrigrams = trigrams.min();
    });

    it('should return an object', function () {
        assert(typeof minTrigrams === 'object');
    });

    it('trigrams.min().n should be an array', function () {
        Object.keys(minTrigrams).forEach(function (code) {
            assert(Array.isArray(minTrigrams[code]));
        });
    });

    it('trigrams.min().n should contain 300 values', function () {
        Object.keys(minTrigrams).forEach(function (code) {
            assert(minTrigrams[code].length === 300);
        });
    });

    it('trigrams.min().n[n] should be a string', function () {
        Object.keys(minTrigrams).forEach(function (code) {
            minTrigrams[code].forEach(function (trigram) {
                assert(typeof trigram === 'string');
            });
        });
    });
});
