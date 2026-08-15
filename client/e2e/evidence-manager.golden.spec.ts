import { Page, expect, test } from '@playwright/test'

/**
 * Golden specs: characterise the evidence manager as it behaves TODAY, before
 * the entity-table extraction replaces its template wholesale. The same file
 * must keep passing afterwards, which is what makes it a regression guard
 * rather than a description.
 *
 * They address the table through the `data-testid` contract rather than its DOM
 * shape, because the shape is precisely what changes. Do not reintroduce
 * structural selectors here.
 *
 * Unauthenticated on purpose: /assertions/add renders its form without a
 * session, so this runs on a fresh checkout. (Its sibling /variant-groups/add
 * does NOT — it gates in the component body with "You must be logged in to view
 * this page", which is why the variant manager's goldens are a separate,
 * storageState-bearing file.)
 */

const FILTERED_COUNT = /of ([\d,]+) displayed/

async function openManager(page: Page) {
  await page.goto('/assertions/add')
  const managerButton = page.getByRole('button', { name: /manager/i })
  await expect(managerButton).toBeVisible({ timeout: 30_000 })
  await managerButton.click()

  const table = page.getByTestId('entity-table')
  await expect(table).toBeVisible()
  await expect(page.getByTestId('row').first()).toBeVisible({ timeout: 30_000 })
  return table
}

/** the "N of M displayed" readout's M, i.e. how many rows the query matched */
async function filteredCount(page: Page): Promise<number> {
  const text = await page.getByTestId('row-count').innerText()
  const match = text.match(FILTERED_COUNT)
  expect(match, `could not parse a filtered count from "${text}"`).toBeTruthy()
  return Number(match![1].replace(/,/g, ''))
}

function filterInput(page: Page, column: string) {
  return page
    .locator(`[data-testid="column-filter"][data-column="${column}"]`)
    .locator('input')
}

test('opens with rows and a count readout', async ({ page }) => {
  await openManager(page)

  await expect(page.getByTestId('row').first()).toBeVisible()
  expect(await filteredCount(page)).toBeGreaterThan(0)
})

test('a text column filter narrows the result set', async ({ page }) => {
  await openManager(page)
  const before = await filteredCount(page)

  await filterInput(page, 'disease').fill('Leukemia')

  await expect
    .poll(() => filteredCount(page), { timeout: 20_000 })
    .toBeLessThan(before)
})

/**
 * Never exercised before this file existed — the phase-4 audit could not
 * confirm that clicking a sorter actually reorders rows, only that the control
 * responded.
 */
test('sorting reorders rows', async ({ page }) => {
  await openManager(page)

  const firstRowId = () =>
    page.getByTestId('row').first().getAttribute('data-row-id')
  const initial = await firstRowId()

  // the Evidence column defaults to ascending; one click flips it. ng-zorro
  // makes the whole th clickable rather than rendering a button role.
  await page
    .locator('[data-testid="column-header"][data-column="id"]')
    .click()

  await expect.poll(firstRowId, { timeout: 20_000 }).not.toBe(initial)
})

/**
 * Also never exercised: whether infinite scroll actually pages past the first
 * response. `edgeCount` is the "N" of "N of M displayed", so it rises only if
 * fetchMore merged new edges into the connection.
 */
test('scrolling to the bottom fetches more rows', async ({ page }) => {
  await openManager(page)

  const loaded = async () => {
    const text = await page.getByTestId('row-count').innerText()
    return Number(text.match(/^([\d,]+) of/)![1].replace(/,/g, ''))
  }
  const before = await loaded()

  // Scroll in steps, not one jump to the end. The scroll directive derives
  // "near the bottom" from pairwise() over successive measureScrollOffset
  // readings, so it needs two distinct decreasing offsets to fire at all — a
  // single assignment to scrollHeight produces one event and is ignored.
  const viewport = page.locator('cdk-virtual-scroll-viewport').first()
  for (let i = 0; i < 12; i++) {
    await viewport.evaluate((el, step) => {
      el.scrollTop = Math.min(el.scrollTop + step, el.scrollHeight)
    }, 400)
    await page.waitForTimeout(300)
  }

  expect(await loaded()).toBeGreaterThan(before)
})

test('hiding a column via the preferences panel removes its header', async ({
  page,
}) => {
  await openManager(page)
  const diseaseHeader = page.locator(
    '[data-testid="column-header"][data-column="disease"]'
  )
  await expect(diseaseHeader).toBeVisible()

  await page.getByTestId('column-prefs-trigger').click()
  const panel = page.getByTestId('column-prefs-panel')
  await expect(panel).toBeVisible()
  await panel.getByLabel('Disease', { exact: true }).uncheck()

  await expect(diseaseHeader).toHaveCount(0)
})

/**
 * KNOWN FAILING against current main, deliberately.
 *
 * Reset pushes null into every column's filter.changes subject, so the query
 * clears and the rows repopulate — but it never clears
 * `col.filter.options[0].value`, which is the backing store for the filter
 * input's [cvcModel]. The table and its own filter boxes end up disagreeing,
 * which is why the (unlabelled) reset button reads as inert.
 *
 * `test.fail()` keeps the suite honest about this: it stays green while the bug
 * exists, and turns RED the moment the extraction fixes it — at which point
 * delete this annotation. That flip is the evidence the refactor changed
 * behaviour for the better.
 */
test.fail('reset clears both the query and the filter inputs', async ({
  page,
}) => {
  await openManager(page)
  const unfiltered = await filteredCount(page)

  const disease = filterInput(page, 'disease')
  await disease.fill('Leukemia')
  await expect.poll(() => filteredCount(page), { timeout: 20_000 }).toBeLessThan(unfiltered)

  await page.getByTestId('filter-reset').click()

  // the query does clear — this half already works
  await expect.poll(() => filteredCount(page), { timeout: 20_000 }).toBe(unfiltered)
  // ...but the input still shows "Leukemia", so the UI contradicts the data
  await expect(disease).toHaveValue('')
})
