import { expect, test } from '@playwright/test'

/**
 * Unlike the tag gallery these hit the real dev API through the proxy, because
 * the typeahead is the thing under test. Reads are unauthenticated, so there is
 * still no login involved.
 *
 * Fields are located by their model key rather than by position or label, so
 * reordering the bench or relabelling a field cannot silently retarget an
 * assertion.
 */
test.beforeEach(async ({ page }) => {
  await page.goto('/test/forms/selects')
  await expect(page.getByTestId('evidence-fields')).toBeVisible()
})

/** Each bench cell wraps exactly one field, keyed by its model key. */
const cell = (page: import('@playwright/test').Page, key: string) =>
  page.locator(`[data-testid="field"][data-key="${key}"]`)

/**
 * The typeahead itself, as opposed to any sibling nz-select a field happens to
 * render — feature-select has a feature-type picker beside its search box. The
 * cvcEntitySelect directive marks the one bound to the entity search.
 */
const typeahead = (field: ReturnType<typeof cell>) =>
  field.locator('nz-select[cvcEntitySelect]')

/** Picks an option out of the cdk overlay by its visible text. */
const pickOption = async (
  page: import('@playwright/test').Page,
  text: string | RegExp
) => {
  const option = page.locator('nz-option-item').filter({ hasText: text }).first()
  await expect(option).toBeVisible({ timeout: 20_000 })
  await option.click()
}

test('disease select: search, choose, tag, then close it', async ({ page }) => {
  const field = cell(page, 'diseaseId')

  // disease is type-gated on requiresDisease$, so it stays disabled until an
  // Evidence Type that needs one is chosen
  await expect(typeahead(field)).toHaveClass(/ant-select-disabled/)
  await cell(page, 'evidenceType').locator('nz-select').click()
  await pickOption(page, 'Diagnostic')
  await expect(typeahead(field)).not.toHaveClass(/ant-select-disabled/)

  await typeahead(field).click()
  await typeahead(field).locator('input').fill('Leukemia')

  const option = page.locator('nz-option-item').first()
  await expect(option).toBeVisible({ timeout: 20_000 })
  await expect(option).toContainText(/Leukemia/i)
  await option.click()

  // the selection renders as a cvc-tag, which means the chosen entity resolved
  // out of the cache after the tag query — not just that a value was set
  const tag = field.locator('cvc-tag')
  await expect(tag).toBeVisible({ timeout: 20_000 })
  await expect(tag).toContainText(/Leukemia/i)

  await field.locator('.ant-tag-close-icon, .ant-select-clear').first().click()
  await expect(field.locator('cvc-tag')).toHaveCount(0)
})

test('variant select is gated on a feature, and enables once one is chosen', async ({
  page,
}) => {
  const variant = cell(page, 'variantId')
  await expect(typeahead(variant)).toHaveClass(/ant-select-disabled/)

  const feature = cell(page, 'featureId')
  await typeahead(feature).click()
  await typeahead(feature).locator('input').fill('BRAF')

  const option = page.locator('nz-option-item').first()
  await expect(option).toBeVisible({ timeout: 20_000 })
  await option.click()

  await expect(feature.locator('cvc-tag')).toBeVisible({ timeout: 20_000 })
  await expect(typeahead(variant)).not.toHaveClass(/ant-select-disabled/)
})
