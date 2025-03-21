import fs from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

/**
 * Get top trigrams.
 *
 * @returns {Promise<Record<string, ReadonlyArray<string>>>}
 *   Top trigrams.
 */
export async function min() {
  return JSON.parse(
    await fs.readFile(
      fileURLToPath(new URL('min.json', import.meta.url)),
      'utf8'
    )
  )
}

/**
 * Get top trigrams to occurrence counts.
 *
 * @returns {Promise<Record<string, Record<string, number>>>}
 *   Top trigrams to occurrence counts.
 */
export async function top() {
  return JSON.parse(
    await fs.readFile(
      fileURLToPath(new URL('top.json', import.meta.url)),
      'utf8'
    )
  )
}
