/**
 * @import {Root, Table} from 'mdast'
 */

import {zone} from 'mdast-zone'
import {udhr} from 'udhr'
import {min} from '../index.js'

const data = await min()

/**
 * @returns
 *   Transform.
 */
export default function remarkInjectSupport() {
  /**
   * @param {Root} tree
   *   Tree.
   * @returns {undefined}
   *   Nothing.
   */
  return function (tree) {
    zone(tree, 'support', function (start, _, end) {
      /** @type {Table} */
      const table = {
        type: 'table',
        align: [],
        children: [
          {
            type: 'tableRow',
            children: [
              {type: 'tableCell', children: [{type: 'text', value: 'Code'}]},
              {type: 'tableCell', children: [{type: 'text', value: 'Name'}]}
            ]
          }
        ]
      }

      for (const info of Object.values(udhr)) {
        if (!(info.code in data)) {
          continue
        }

        const ohchrUrl = info.ohchr
          ? /^https?:/.test(info.ohchr)
            ? info.ohchr
            : 'https://www.ohchr.org/EN/UDHR/Pages/Language.aspx?LangID=' +
              info.ohchr
          : undefined

        table.children.push({
          type: 'tableRow',
          children: [
            {
              type: 'tableCell',
              children: [{type: 'inlineCode', value: info.code}]
            },
            {
              type: 'tableCell',
              children: ohchrUrl
                ? [
                    {
                      type: 'link',
                      url: ohchrUrl,
                      children: [{type: 'text', value: info.name}]
                    }
                  ]
                : [{type: 'text', value: info.name}]
            }
          ]
        })
      }

      return [start, table, end]
    })
  }
}
