'use strict';

var udhr,
    writeFile,
    json,
    information,
    trigramUtils,
    highestTrigramCount,
    highestTrigram,
    highestTrigramLanguage,
    allIndex,
    minIndex,
    topIndex;

udhr = require('udhr');
writeFile = require('fs').writeFileSync;
json = udhr.json();
information = udhr.information();
trigramUtils = require('trigram-utils');

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

highestTrigramCount = 0;

function createIndexFile(type) {
    var queue = [];

    function addFile(code) {
        queue.push({
            'code': code,
            'path': code + '.json'
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
            '  ' + lines.join(',\n  ') + '\n' +
            '}\n';
    }

    function count() {
        return queue.length;
    }

    return {
        'toString': done,
        'add': addFile,
        'count': count
    };
}

allIndex = createIndexFile('all');
minIndex = createIndexFile('min');
topIndex = createIndexFile('top');

Object.keys(json).forEach(function (code) {
    var plain,
        trigrams,
        topTrigrams,
        totalTopTrigramOccurrences,
        trigram,
        language;

    plain = all(json[code], 'para').join('');
    trigrams = trigramUtils.asTuples(plain);
    topTrigrams = trigrams.slice(-300);
    trigram = topTrigrams[topTrigrams.length - 1];
    language = information[code].name;

    totalTopTrigramOccurrences = topTrigrams.reduce(function (a, b) {
        return a + b[1];
    }, 0);

    if (information[code].namedVersion) {
        language += ' ' + information[code].namedVersion;
    }

    console.log(
        'Writing trigram file for: ' + language + '\n' +
        '- Code:                  "' + code + '";\n' +
        '- Highest trigram:       "' + trigram[0] + '";\n' +
        '- Highest trigram count:  ' + trigram[1] + ';\n' +
        '- Total trigrams:         ' + trigrams.length + ';\n' +
        '- Top trigrams count:     ' + totalTopTrigramOccurrences + ';\n' +
        '- String length:          ' + plain.length + ';'
    );

    if (trigram[1] > highestTrigramCount) {
        highestTrigramCount = trigram[1];
        highestTrigram = trigram[0];
        highestTrigramLanguage = language;
    }

    allIndex.add(code);

    writeFile('./data/all/' + code + '.json', JSON.stringify(
        trigramUtils.tuplesAsDictionary(trigrams), 0, 2
    ));

    if (
        topTrigrams.length === 300 &&
        trigram[1] > 30 &&
        (plain.length / totalTopTrigramOccurrences) < 2.5
    ) {
        writeFile('./data/top/' + code + '.json', JSON.stringify(
            trigramUtils.tuplesAsDictionary(topTrigrams), 0, 2
        ));

        writeFile('./data/min/' + code + '.json', JSON.stringify(
            topTrigrams.map(function (trigram) {
                return trigram[0];
            }), 0, 2
        ));

        topIndex.add(code);
        minIndex.add(code);

        console.log(
            '- Top trigram file:       yes;\n' +
            '- Min trigram file:       yes.'
        );
    } else {
        console.log(
            '- Top trigram file:       no;\n' +
            '- Min trigram file:       no.'
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
    'Finished writing ' + allIndex.count() + ' files.\n'
);

writeFile('./data/top.js', topIndex);

console.log(
    'Finished writing ' + topIndex.count() + ' top files ' +
    '(ignoring ' + (allIndex.count() - topIndex.count()) + ').\n'
);

writeFile('./data/min.js', minIndex);

console.log(
    'Finished writing ' + minIndex.count() + ' min files ' +
    '(ignoring ' + (allIndex.count() - minIndex.count()) + ').\n'
);
