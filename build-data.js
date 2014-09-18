'use strict';

var udhr,
    writeFile,
    json,
    information,
    getTrigrams,
    EXPRESSION_SYMBOLS,
    highestTrigramCount,
    highestTrigram,
    highestTrigramLanguage,
    topTrigramCount,
    trigramCount,
    allIndex,
    minIndex,
    topIndex;

udhr = require('udhr');
writeFile = require('fs').writeFileSync;
json = udhr.json();
information = udhr.information();
getTrigrams = require('n-gram').trigram;

/**
 * - 'EXCLAMATION MARK' (U+0021)
 * - 'QUOTATION MARK' (U+0022)
 * - 'NUMBER SIGN' (U+0023)
 * - 'DOLLAR SIGN' (U+0024)
 * - 'PERCENT SIGN' (U+0025)
 * - 'AMPERSAND' (U+0026)
 * - 'APOSTROPHE' (U+0027)
 * - 'LEFT PARENTHESIS' (U+0028)
 * - 'RIGHT PARENTHESIS' (U+0029)
 * - 'ASTERISK' (U+002A)
 * - 'PLUS SIGN' (U+002B)
 * - 'COMMA' (U+002C)
 * - 'HYPHEN-MINUS' (U+002D)
 * - 'FULL STOP' (U+002E)
 * - 'SOLIDUS' (U+002F)
 * - 'DIGIT ZERO' (U+0030)
 * - 'DIGIT ONE' (U+0031)
 * - 'DIGIT TWO' (U+0032)
 * - 'DIGIT THREE' (U+0033)
 * - 'DIGIT FOUR' (U+0034)
 * - 'DIGIT FIVE' (U+0035)
 * - 'DIGIT SIX' (U+0036)
 * - 'DIGIT SEVEN' (U+0037)
 * - 'DIGIT EIGHT' (U+0038)
 * - 'DIGIT NINE' (U+0039)
 * - 'COLON' (U+003A)
 * - 'SEMICOLON' (U+003B)
 * - 'LESS-THAN SIGN' (U+003C)
 * - 'EQUALS SIGN' (U+003D)
 * - 'GREATER-THAN SIGN' (U+003E)
 * - 'QUESTION MARK' (U+003F)
 * - 'COMMERCIAL AT' (U+0040)
 */

EXPRESSION_SYMBOLS = /[\u0021-\u0040]+/g

function all(object, key) {
    var results = [],
        property,
        value;

    for (property in object) {
        value = object[property];

        if (property === key) {
            results.push(value);
        } else if (typeof value === 'object') {
            results = results.concat(all(value, key));
        }
    }

    return results;
}



function clean(value) {
    return value
        .replace(EXPRESSION_SYMBOLS, '')
        .replace(/\s+/g, ' ')
        .toLowerCase();
}

/**
 * Deep regular sort on the number at `1` in both objects. E.g. [1, 5, 20];
 *
 * @param {Array} a
 * @param {Array} b
 * @api private
 */
function sort(a, b) {
    return a[1] - b[1];
}

/**
 * Get an object with trigrams as its attributes, and their occurence count
 * as their values
 *
 * @param {string} value
 * @return {Object.<string, number>} - Object containing weighted trigrams.
 * @api private
 */

function getObjectModel(value) {
    var trigrams = getTrigrams(' ' + value + ' '),
        objectModel = {},
        iterator = -1,
        length = trigrams.length,
        trigram;

    while (++iterator < length) {
        trigram = trigrams[iterator];

        if (trigram in objectModel) {
            objectModel[trigram]++;
        } else {
            objectModel[trigram] = 1;
        }
    }

    return objectModel;
}

/**
 * Get the array containing trigram--count tuples from a given value.
 *
 * @param {string} value
 * @return {Array<string, number>[]} - An array containing trigram--count
 *     tupples.
 * @api private
 */
function getCountedTrigrams(value) {
    var objectModel = getObjectModel(value),
        countedTrigrams = [],
        trigram;

    for (trigram in objectModel) {
        countedTrigrams.push([trigram, objectModel[trigram]]);
    }

    return countedTrigrams;
}

function tuplesToObject(tuples) {
    var object = {};

    tuples.forEach(function (tuple) {
        object[tuple[0]] = tuple[1];
    });

    return object;
}

highestTrigramCount = 0;
topTrigramCount = 0;
trigramCount = 0;

function createIndexFile(type) {
    var queue = [];

    function addFile(code, path) {
        queue.push({
            'code' : code,
            'path' : path
        });
    }

    function done() {
        var lines;

        lines = queue.map(function (file) {
            return '\'' + file.code +
                '\': require(\'./' + type + '/' + file.path + '\')';
        });

        return '\'use strict\';\n' +
            '\n' +
            'module.exports = {\n' +
            '  ' +  lines.join(',\n  ') + '\n' +
            '}\n';
    }

    return {
        'toString' : done,
        'add' : addFile
    };
}

allIndex = createIndexFile('all');
minIndex = createIndexFile('min');
topIndex = createIndexFile('top');

Object.keys(json).forEach(function (code) {
    var plain,
        trigrams,
        topTrigrams,
        trigram,
        language;

    plain = clean(all(json[code], 'para').join(''));
    trigrams = getCountedTrigrams(plain).sort(sort);
    topTrigrams = trigrams.slice(trigrams.length - 300);
    trigram = trigrams[trigrams.length - 1];
    language = information[code].name;

    if (information[code].namedVersion) {
        language += ' ' + information[code].namedVersion;
    }

    console.log(
        'Writing trigram file for: ' + language + '\n' +
        '- Code:                  "' + code + '";\n' +
        '- Highest trigram:       "' + trigram[0] + '";\n' +
        '- Highest trigram count:  ' + trigram[1] + ';\n' +
        '- Total trigrams:         ' + trigrams.length + ';\n' +
        '- Cleaned string length:  ' + plain.length + ';'
    );

    if (trigram[1] > highestTrigramCount) {
        highestTrigramCount = trigram[1];
        highestTrigram = trigram[0];
        highestTrigramLanguage = language;
    }

    trigramCount++;
    allIndex.add(code, code + '.json');

    writeFile('./data/all/' + code + '.json', JSON.stringify(
        tuplesToObject(trigrams), 0, 2
    ));

    if (topTrigrams.length === 300) {
        topTrigramCount++;

        writeFile('./data/top/' + code + '.json', JSON.stringify(
            tuplesToObject(topTrigrams), 0, 2
        ));

        writeFile('./data/min/' + code + '.json', JSON.stringify(
            topTrigrams.map(function (trigram) {
                return trigram[0];
            }), 0, 2
        ));

        topIndex.add(code, code + '.json');
        minIndex.add(code, code + '.json');

        console.log(
            '- Top & min trigram file: yes.'
        );
    } else {
        console.log(
            '- Top & min trigram file: no.'
        );
    }

    console.log('');
});

console.log(
    'The highest trigram was "' + highestTrigram + '" which occurred ' +
    highestTrigramCount + ' times in ' + highestTrigramLanguage + '.\n'
);

writeFile('./data/all.js', allIndex);

console.log(
    'Finished writing ' + trigramCount + ' files.\n'
);

writeFile('./data/top.js', topIndex);

console.log(
    'Finished writing ' + topTrigramCount + ' top files ' +
    '(ignoring ' + (trigramCount - topTrigramCount) + ').\n'
);

writeFile('./data/min.js', minIndex);

console.log(
    'Finished writing ' + topTrigramCount + ' min files ' +
    '(ignoring ' + (trigramCount - topTrigramCount) + ').\n'
);
