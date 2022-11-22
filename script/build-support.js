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

/**
 * @type {import('unified').Plugin<[], Root, Root>}
 */
export default function support() {
  return async function (tree) {
    const data = await min()

    zone(tree, 'support', function (start, _, end) {
      return [start, table(), end]
    })

    /**
     * @returns {Table}
     */
    function table() {
      const content = [
        u('tableRow', [cell('Code'), cell('Name'), cell('OHCHR')])
      ]
      let index = -1

      while (++index < udhr.length) {
        const info = udhr[index]

        if (!(info.code in data)) {
          continue
        }

        content.push(
          u('tableRow', [
            cell(info.code),
            cell(info.name),
            cell(
              info.ohchr
                ? u(
                    'link',
                    {
                      url:
                        'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
                        info.ohchr
                    },
                    [u('text', info.ohchr)]
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
}
