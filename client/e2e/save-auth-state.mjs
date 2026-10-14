import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { createInterface } from 'node:readline/promises'
import { fileURLToPath } from 'node:url'

/**
 * Captures a signed-in dev session for the Playwright specs to reuse.
 *
 * It opens a real browser and waits — the sign-in is done by hand, by a human,
 * in that window. This script never reads, stores or transmits a credential;
 * all it keeps is the resulting cookie jar.
 */
const here = path.dirname(fileURLToPath(import.meta.url))
const storageState = path.join(here, '.auth', 'dev-user.json')
const baseURL = process.env.CIVIC_BASE_URL ?? 'http://127.0.0.1:4200'

const browser = await chromium.launch({ headless: false })
const context = await browser.newContext()
await (await context.newPage()).goto(baseURL)

console.log(
  [
    ``,
    `A browser window is open at ${baseURL}.`,
    `Sign in there yourself — this script does not handle credentials.`,
    ``,
  ].join('\n')
)

const rl = createInterface({ input: process.stdin, output: process.stdout })
await rl.question('Press Enter once you are signed in… ')
rl.close()

await mkdir(path.dirname(storageState), { recursive: true })
await context.storageState({ path: storageState })
await browser.close()

console.log(`Saved session to ${storageState}`)
