import { defineConfig, devices } from '@playwright/test'

/**
 * Use host `127.0.0.1`, never `localhost`: the dev session's cookies are bound
 * to that host, and cookies ignore port, so another worktree can serve on a
 * different port and reuse the login.
 *
 * CI has no backend and runs `yarn e2e --grep @offline`: the specs that
 * assert only on the app shell or seed the Apollo cache directly. Tag a spec
 * `@offline` only after it passes with `**​/api/**` routed to
 * `route.abort()`; otherwise it passes locally and fails only in CI.
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
