import url from 'url'
import {promises as fs} from 'fs'

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
