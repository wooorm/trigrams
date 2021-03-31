import url from 'url'
import {promises as fs} from 'fs'

export async function min() {
  return JSON.parse(
    await fs.readFile(url.fileURLToPath(new URL('./min.json', import.meta.url)))
  )
}
