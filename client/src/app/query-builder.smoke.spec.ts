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
  })
})
