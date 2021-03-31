'use strict'

exports.min = min
exports.top = top

function top() {
  return require('./data/top.js')
}

function min() {
  return require('./data/min.js')
}
