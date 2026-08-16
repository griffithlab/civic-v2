import { defineConfig, devices } from '@playwright/test'

/**
 * The dev session's cookies are bound to the host `127.0.0.1` and cookies ignore
 * port, so a second worktree can serve on another port and reuse the same login.
 * Never `localhost` — that is a different host, and therefore a different jar.
 *
 * ## The `@offline` tag
 *
 * Most specs here need the Rails API behind the dev proxy: the manager goldens
 * assert against real row counts, and the select specs drive real typeaheads.
 * CI has no backend, so it runs `yarn e2e --grep @offline` — the subset that
 * holds with nothing behind `/api`, because it either asserts only on the app
 * shell or seeds the Apollo cache directly.
 *
 * Tag a spec `@offline` only after checking it really is: route `**​/api/**` to
 * `route.abort()` and confirm it still passes. A spec that quietly depends on a
 * query will pass locally and fail only in CI, which is the worst outcome
 * available.
 */
const baseURL = process.env.CIVIC_BASE_URL ?? 'http://127.0.0.1:4200'
const port = new URL(baseURL).port || '4200'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: [['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // attaches to the server already running rather than racing it for the port
    command: `yarn start --port ${port}`,
    url: baseURL,
    reuseExistingServer: true,
    timeout: 300_000,
  },
})
