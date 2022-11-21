/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Table} Table
 * @typedef {import('mdast').TableCell} TableCell
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 */

import {zone} from 'mdast-zone'
import {u} from 'unist-builder'
import {udhr} from 'udhr'
import {min} from '../index.js'

export default function support() {
  return transformer
}

/**
 * @param {Root} tree
 */
async function transformer(tree) {
  const data = await min()

  zone(tree, 'support', replace)

  /**
   * @param {Node?} start
   * @param {unknown} _
   * @param {Node?} end
   */
  function replace(start, _, end) {
    return [start, table(), end]
  }

  /**
   * @returns {Table}
   */
  function table() {
    const content = [u('tableRow', [cell('Code'), cell('Name'), cell('OHCHR')])]
    let index = -1

    while (++index < udhr.length) {
      if (!(udhr[index].code in data)) {
        continue
      }

      content.push(
        u('tableRow', [
          cell(udhr[index].code),
          cell(udhr[index].name),
          cell(
            udhr[index].ohchr
              ? u(
                  'link',
                  {
                    url:
                      'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
                      udhr[index].ohchr
                  },
                  [u('text', udhr[index].ohchr)]
                )
              : 'No'
          )
        ])
      )
    }

    return u('table', {align: []}, content)

    /**
     * @param {string|PhrasingContent} value
     * @returns {TableCell}
     */
    function cell(value) {
      return u('tableCell', [
        typeof value === 'string' ? u('text', value) : value
      ])
    }
  }
}
