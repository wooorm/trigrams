/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module trigrams:script
 * @fileoverview Build `supported-trigrams.md`.
 */

'use strict';

/* eslint-env node */

/*
 * Dependencies.
 */

var fs = require('fs');
var table = require('markdown-table');
var udhr = require('udhr');

/*
 * Data.
 */

var information = udhr.information();
var allTrigrams = require('../').all();
var topTrigrams = require('../').top();
var minTrigrams = require('../').min();

/*
 * Write support information.
 */

fs.writeFileSync('supported-trigrams.md',
    'Supported Trigrams\n' +
    '=================\n' +
    '\n' +
    'Tip: See the [Unicode website](http://www.unicode.org/udhr/' +
    'index.html)\nor [UDHR](https://github.com/wooorm/udhr/) for' +
    'more information.\n' +
    '\n' +

    table([
            [
                'Code', 'Name', 'OHCHR', 'All?',
                'Top?', 'Min?'
            ]
        ].concat(Object.keys(information).map(function (code) {
            var hasAll;
            var hasMin;
            var hasTop;
            var ohchr;

            if (code in allTrigrams) {
                hasAll = '[Yes](data/all/' + code + '.json)';
            } else {
                hasAll = 'No';
            }

            if (code in minTrigrams) {
                hasMin = '[Yes](data/min/' + code + '.json)';
            } else {
                hasMin = 'No';
            }

            if (code in topTrigrams) {
                hasTop = '[Yes](data/top/' + code + '.json)';
            } else {
                hasTop = 'No';
            }

            if (information[code].OHCHR) {
                ohchr = '[' + information[code].OHCHR + ']' +
                    '(http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?' +
                    'LangID=' + information[code].OHCHR + ')';
            } else {
                ohchr = '';
            }

            return [
                code,
                information[code].name,
                ohchr,
                hasAll,
                hasTop,
                hasMin
            ];
        })),
        {
            'align': ['r']
        }
    ) +

    '\n'
);
