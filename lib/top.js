import url from 'url'
import {promises as fs} from 'fs'

export async function top() {
  return JSON.parse(
    await fs.readFile(url.fileURLToPath(new URL('./top.json', import.meta.url)))
  )
}
