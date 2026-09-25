import { expect, test } from '@playwright/test'

/**
 * Proves the harness itself: that it attached to a dev server on whichever
 * baseURL it was pointed at, booted the app, and can assert against rendered
 * output. Deliberately unauthenticated, so it passes on a fresh checkout with
 * no captured session.
 */
test(
  'the app boots and routes to welcome',
  { tag: '@offline' },
  async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle(/CIViC/i)
    // '' redirects to /welcome, so this asserts the router ran, not just that
    // index.html was served
    await expect(page).toHaveURL(/\/welcome$/)
    await expect(page.locator('app-welcome')).toBeVisible()
  }
)
