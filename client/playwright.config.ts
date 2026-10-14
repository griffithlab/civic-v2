import { defineConfig, devices } from '@playwright/test'

/**
 * The dev session's cookies are bound to the host `127.0.0.1` and cookies ignore
 * port, so a second worktree can serve on another port and reuse the same login.
 * Never `localhost` — that is a different host, and therefore a different jar.
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
