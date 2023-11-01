/**
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
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {Promise<undefined>}
   *   Nothing.
   */
  return async function (tree) {
    const data = await min()

    zone(tree, 'support', function (start, _, end) {
      return [start, table(), end]
    })

    /**
     * @returns {Table}
     */
    function table() {
      const content = [u('tableRow', [cell('Code'), cell('Name')])]
      let index = -1

      while (++index < udhr.length) {
        const info = udhr[index]

        if (!(info.code in data)) {
          continue
        }

        const ohchrUrl = info.ohchr
          ? /^https?:/.test(info.ohchr)
            ? info.ohchr
            : 'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
              info.ohchr
          : undefined

        content.push(
          u('tableRow', [
            cell(info.code),
            cell(
              ohchrUrl
                ? u(
                    'link',
                    {
                      url:
                        'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
                        info.ohchr
                    },
                    [u('text', info.name)]
                  )
                : info.name
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
}
