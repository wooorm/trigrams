'use strict';

/**
 * Dependencies.
 */

var fs,
    table,
    udhr;

fs = require('fs');
table = require('markdown-table');
udhr = require('udhr');

/**
 * Data.
 */

var information,
    allTrigrams,
    topTrigrams,
    minTrigrams;

information = udhr.information();

allTrigrams = require('../').all();
topTrigrams = require('../').top();
minTrigrams = require('../').min();

/**
 * Write support information.
 */

fs.writeFileSync('Supported-trigrams.md',
    'Supported Trigrams\n' +
    '=================\n' +
    '\n' +
    'Tip: See the [Unicode website](http://www.unicode.org/udhr/index.html)' +
    ' or [UDHR](https://github.com/wooorm/udhr/) for more information.\n' +
    '\n' +

    table([
            [
                'Code', 'Name', 'Named version', 'OHCHR', 'All?',
                'Top?', 'Min?'
            ]
        ].concat(Object.keys(information).map(function (code) {
            var hasAll,
                hasMin,
                hasTop,
                ohchr;

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
                (information[code].namedVersion || ''),
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
