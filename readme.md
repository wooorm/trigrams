# trigrams [![Build Status](https://img.shields.io/travis/wooorm/trigrams.svg?style=flat)](https://travis-ci.org/wooorm/trigrams) [![Coverage Status](https://img.shields.io/coveralls/wooorm/trigrams.svg?style=flat)](https://coveralls.io/r/wooorm/trigrams?branch=master)

Trigrams for 400+ languages.

## Installation

npm:
```sh
$ npm install trigrams
```

## Usage

```js
var trigrams = require('trigrams');

trigrams.all(); /* or `top`, or `min`. */
```

## API

### trigrams.all()

```js
trigrams.all().eng;
/**
 * {
 *   'nou': 1,
 *   'n  ': 1,
 *   ' ai': 1,
 *   ...
 *   ' an': 129,
 *   'the': 152,
 *   ' th': 154
 * }
 */
```

Returns information about all trigrams occurring in a certain declaration, in the form of an object.

Every attribute is the code used by [_UDHR in Unicode_](http://www.unicode.org/udhr/index_by_code.html).

Every value is the an object containing trigrams as its keys and integers (occurrence counts) as its values.

### trigrams.top()

```js
trigrams.top().pam;
/**
 * {
 *   'anm': 8,
 *   'obr': 8,
 *   'gpa': 8,
 *   ...
 *   'ang': 374,
 *   'ing': 420,
 *   'ng ': 805
 * }
 */
```

Same as `trigrams.all()`, but for every declaration object, returns only the top 300 trigrams.

### trigrams.min()

```js
trigrams.top().nld;
/**
 * [
 *   'als',
 *   'oon',
 *   'rdi',
 *   ...
 *   'an ',
 *   'de ',
 *   'en '
 * ]
 */
```

A bit like `trigrams.top()`, but instead of a declaration object, returns an array containing trigrams (without occurrence counts, as its indice is the indicator).

## Supported trigrams

For a complete list of supported trigrams, see [supported-trigrams.md](supported-trigrams.md).

## Data

The trigrams are based on the [Unicode](http://www.unicode.org/udhr/index.html) versions of the [Universal Declaration of Human Rights](http://www.un.org/en/documents/udhr/).

The files are created from all paragraphs made available by [wooorm/udhr](https://github.com/wooorm/udhr) and do not include headings and such.

## Cleaning

Before creating trigrams,

- The unicode characters from `\u0021` to `\u0040` (both including) are removed;
- One or more white space characters (`\s+`) are replaced with a single space;
- Alphabetic characters are lower cased (`[A-Z]`).

Additionally, the input is padded with two spaces.

## License

MIT © [Titus Wormer](http://wooorm.com)
