/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module trigrams
 * @fileoverview Interace for `trigrams`.
 */

'use strict';

/* eslint-env commonjs */

/**
 * Require all UDHR trigram information.
 */
function all() {
    return require('./data/all.js');
}

/**
 * Require top 300 UDHR trigram information (with occurance count).
 */
function top() {
    return require('./data/top.js');
}

/**
 * Require top 300 UDHR trigram information (without occurance count).
 */
function min() {
    return require('./data/min.js');
}

/**
 * Export all require functions.
 */

module.exports = {
    'all': all,
    'min': min,
    'top': top
};
