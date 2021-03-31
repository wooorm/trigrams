import url from 'url'
import {promises as fs} from 'fs'

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
}
