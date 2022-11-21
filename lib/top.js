import url from 'node:url'
import {promises as fs} from 'node:fs'

/**
 * @returns {Promise.<Object.<string, Object.<string, number>>>}
 */
export async function top() {
  return JSON.parse(
    String(
      await fs.readFile(
        url.fileURLToPath(new url.URL('./top.json', import.meta.url))
      )
    )
  )
  /* c8 ignore next */
}
