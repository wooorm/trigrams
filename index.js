'use strict';

exports.all = all;
exports.min = min;
exports.top = top;

function all() {
  return require('./data/all.js');
}

function top() {
  return require('./data/top.js');
}

function min() {
  return require('./data/min.js');
}
