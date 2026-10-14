import { describe, it, expect, beforeEach } from 'vitest'
import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { By } from '@angular/platform-browser'
import { AppModule } from './app.module'
import { smokeTestProviders } from './testing/smoke-test.providers'
import { CvcQuerySubfiltersField } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.type'

describe('Query builder field array smoke test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: smokeTestProviders(),
    }).compileComponents()
  })

  it('adds a filter row when formly is configured once, at the root injector', async () => {
    const harness = await RouterTestingHarness.create()
    await harness.navigateByUrl('/search/query/searchAssertions')

    const subfiltersDe = harness.routeDebugElement?.query(
      By.directive(CvcQuerySubfiltersField)
    )
    expect(subfiltersDe).toBeTruthy()

    const subfilters = subfiltersDe!
      .componentInstance as CvcQuerySubfiltersField
    // undefined here means formly skipped FieldArrayType.onPopulate
    expect(subfilters.field.formControl).toBeDefined()
    expect(Array.isArray(subfilters.field.model)).toBe(true)

    expect(() => subfilters.addRow()).not.toThrow()
    harness.detectChanges()
    expect(subfilters.field.fieldGroup?.length).toBe(1)
    expect(subfilters.field.model.length).toBe(1)

    // The row's config comes from the query-subfilters type's `fieldArray`
    // default (query-subfilters.module.ts), not from getQueryFieldConfig, which
    // must not import getFieldOptions or it closes an import cycle. If that
    // default stops being applied a row is still added — just an empty one — so
    // assert the row is really built from the endpoint's field options.
    const row = subfilters.field.fieldGroup![0]
    expect(row.type).toBe('query-filter')
    expect((row.props?.options as unknown[])?.length).toBeGreaterThan(0)
    expect(row.fieldGroup?.length).toBeGreaterThan(0)
  })
})
