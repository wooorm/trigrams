import zone from 'mdast-zone'
import u from 'unist-builder'
import {udhr} from 'udhr'
import {min} from '../index.js'

export default function support() {
  return transformer
}

async function transformer(tree) {
  var data = await min()

  zone(tree, 'support', replace)

  function replace(start, _, end) {
    return [start, table(), end]
  }

  function table() {
    var content = [u('tableRow', [cell('Code'), cell('Name'), cell('OHCHR')])]
    var index = -1

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

    function cell(value) {
      return u('tableCell', [
        typeof value === 'string' ? u('text', value) : value
      ])
    }
  }
}
