'use strict';

var zone = require('mdast-zone');
var u = require('unist-builder');
var udhr = require('udhr');

var info = udhr.information();
var all = require('..').all();
var top = require('..').top();
var min = require('..').min();

module.exports = support;

function support() {
  return transformer;
}

function transformer(tree) {
  zone(tree, 'support', replace);
}

function replace(start, nodes, end) {
  return [start, table(), end];
}

function table() {
  var header = ['Code', 'Name', 'OHCHR', 'All?', 'Top?', 'Min?'];

  return u('table', {align: []}, [
    u('tableRow', header.map(cell))
  ].concat(Object.keys(info).map(function (code) {
    var hasAll;
    var hasMin;
    var hasTop;
    var ohchr;

    if (code in all) {
      hasAll = u('link', {url: 'data/all/' + code + '.json'}, [u('text', 'Yes')]);
    } else {
      hasAll = u('text', 'No');
    }

    if (code in min) {
      hasMin = u('link', {url: 'data/min/' + code + '.json'}, [u('text', 'Yes')]);
    } else {
      hasMin = u('text', 'No');
    }

    if (code in top) {
      hasTop = u('link', {url: 'data/top/' + code + '.json'}, [u('text', 'Yes')]);
    } else {
      hasTop = u('text', 'No');
    }

    if (info[code].OHCHR) {
      ohchr = u('link', {
        url: 'http://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' + info[code].OHCHR
      }, [u('text', info[code].OHCHR)]);
    } else {
      ohchr = u('text', 'No');
    }

    return u('tableRow', [
      cell(code),
      cell(info[code].name),
      cell(ohchr || ''),
      cell(hasAll),
      cell(hasTop),
      cell(hasMin)
    ]);
  })));

  function cell(value) {
    var val = typeof value === 'string' ? u('text', value) : value;
    return u('tableCell', [val]);
  }
}
