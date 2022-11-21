import fs from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

/**
 * @returns {Promise<Record<string, Array<string>>>}
 */
export async function min() {
  return JSON.parse(
    String(
      await fs.readFile(fileURLToPath(new URL('min.json', import.meta.url)))
    )
  )
  /* c8 ignore next */
}
