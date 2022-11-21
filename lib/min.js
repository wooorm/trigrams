import url from 'node:url'
import {promises as fs} from 'node:fs'

/**
 * @returns {Promise.<Object.<string, Array.<string>>>}
 */
export async function min() {
  return JSON.parse(
    String(
      await fs.readFile(
        url.fileURLToPath(new url.URL('./min.json', import.meta.url))
      )
    )
  )
  /* c8 ignore next */
}
