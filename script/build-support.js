'use strict';

var fs,
    table,
    udhr,
    allTrigrams,
    topTrigrams,
    minTrigrams;

fs = require('fs');
table = require('markdown-table');
udhr = require('udhr').information();
allTrigrams = require('../').all();
topTrigrams = require('../').top();
minTrigrams = require('../').min();

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
        ].concat(Object.keys(udhr).map(function (code) {
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

            if (udhr[code].OHCHR) {
                ohchr = '[' + udhr[code].OHCHR + ']' +
                    '(http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?' +
                    'LangID=' + udhr[code].OHCHR + ')';
            } else {
                ohchr = '';
            }

            return [
                code,
                udhr[code].name,
                (udhr[code].namedVersion || ''),
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
