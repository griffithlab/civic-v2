import { expect, test } from '@playwright/test'

/**
 * The tag gallery seeds the Apollo cache directly, so every assertion here is
 * offline: no query, no login, no fixtures on the dev server. That is the point
 * — it stays green on a fresh checkout and in a second worktree.
 */
test.describe('tag gallery', { tag: '@offline' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/test/forms/selects')
    await expect(page.getByTestId('tag-gallery')).toBeVisible()
  })

  test('renders a tag for every seeded typename', async ({ page }) => {
    const tags = page.getByTestId('tag')
    await expect(tags).toHaveCount(21)

    // each of the five concrete Variant typenames shares one spec, and all five
    // must still resolve through it
    for (const typename of [
      'Variant',
      'GeneVariant',
      'FactorVariant',
      'FusionVariant',
      'RegionVariant',
    ]) {
      await expect(
        page.locator(`[data-testid="tag"][data-typename="${typename}"]`)
      ).toBeVisible()
    }
  })

  test('reads each label out of the cache rather than showing a bare id', async ({
    page,
  }) => {
    const disease = page.locator('[data-testid="tag"][data-typename="Disease"]')
    await expect(disease).toContainText('Chronic Myeloid Leukemia')

    // a Source tag labels itself from its citation, not its name
    const source = page.locator('[data-testid="tag"][data-typename="Source"]')
    await expect(source).toContainText('Davies')

    // '#<id>' is what a tag renders when its fragment is missing from the cache,
    // so its absence is the real assertion here
    await expect(page.getByTestId('tag-gallery')).not.toContainText('#1')
  })

  // the popover content is a lazily-loaded component, so this also proves the
  // on-demand chunk resolves — the whole point of moving popovers out of the
  // shared forms chunk
  test('opens a popover on a tag that has one', async ({ page }) => {
    await page
      .locator('[data-testid="tag"][data-typename="MolecularProfile"]')
      .first()
      .hover()

    await expect(page.locator('.ant-popover').first()).toBeVisible({
      timeout: 10_000,
    })
  })
})
