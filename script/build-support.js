'use strict'

var zone = require('mdast-zone')
var u = require('unist-builder')
var udhr = require('udhr')

var info = udhr.information()
var top = require('..').top()
var min = require('..').min()

var own = {}.hasOwnProperty

module.exports = support

function support() {
  return transformer
}

function transformer(tree) {
  zone(tree, 'support', replace)
}

function replace(start, nodes, end) {
  return [start, table(), end]
}

function table() {
  var content = [
    u(
      'tableRow',
      ['Code', 'Name', 'OHCHR', 'Top?', 'Min?'].map((d) => cell(d))
    )
  ]
  var code

  for (code in info) {
    if (own.call(info, code)) {
      content.push(
        u('tableRow', [
          cell(code),
          cell(info[code].name),
          cell(
            info[code].OHCHR
              ? u(
                  'link',
                  {
                    url:
                      'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
                      info[code].OHCHR
                  },
                  [u('text', info[code].OHCHR)]
                )
              : 'No'
          ),
          cell(
            code in top
              ? u('link', {url: 'data/top/' + code + '.json'}, [
                  u('text', 'Yes')
                ])
              : 'No'
          ),
          cell(
            code in min
              ? u('link', {url: 'data/min/' + code + '.json'}, [
                  u('text', 'Yes')
                ])
              : 'No'
          )
        ])
      )
    }
  }

  return u('table', {align: []}, content)

  function cell(value) {
    return u('tableCell', [
      typeof value === 'string' ? u('text', value) : value
    ])
  }
}
