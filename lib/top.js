import fs from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

/**
 * @returns {Promise<Record<string, Record<string, number>>>}
 */
export async function top() {
  return JSON.parse(
    String(
      await fs.readFile(fileURLToPath(new URL('top.json', import.meta.url)))
    )
  )
  /* c8 ignore next */
}
