import { expect, test } from '@playwright/test'

/**
 * The date-picker stylesheet ships with CvcDatePickerStylesComponent in the
 * activity feed's lazy chunk, not the global bundle. A picker rendered
 * without that carrier is unstyled rather than broken, which no build or
 * unit test can see.
 *
 * Not @offline: the feed needs the API.
 */
test('the activity feed date picker is styled', async ({ page }) => {
  await page.goto('/variants/2/events')

  // ant puts .ant-picker on the nz-date-picker host itself, not inside it
  const trigger = page
    .locator('cvc-activity-feed-filters nz-date-picker.ant-picker')
    .first()
  await expect(trigger).toBeVisible()

  // an unstyled picker has no border box and collapses to about text height
  await expect(trigger).toHaveCSS('border-top-width', '1px')
  expect((await trigger.boundingBox())!.height).toBeGreaterThan(20)

  // the panel renders into a CDK overlay on <body>, which is the part that
  // cannot be reached by an encapsulated component stylesheet at all
  await trigger.click()
  const panel = page.locator('.ant-picker-dropdown').first()
  await expect(panel).toBeVisible()
  await expect(panel.locator('.ant-picker-header')).toBeVisible()
  expect((await panel.boundingBox())!.width).toBeGreaterThan(200)
})
