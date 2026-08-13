import { describe, it, expect, beforeEach } from 'vitest'
import { TestBed } from '@angular/core/testing'
import { RouterTestingHarness } from '@angular/router/testing'
import { By } from '@angular/platform-browser'
import { AppModule } from './app.module'
import { smokeTestProviders } from './testing/smoke-test.providers'
import { CvcQuerySubfiltersField } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.type'

// Regression test for the formly v7 config-split bug: when
// FormlyModule.forRoot() is instantiated in lazy injectors, the core
// extension binds to a different FormlyConfig than the form builder and
// silently skips component lifecycle hooks. For FieldArrayType fields
// (query-subfilters), onPopulate never registers the FormArray control,
// so add() crashes with "Cannot read properties of undefined
// (reading 'markAsDirty')".
describe('Query builder field array smoke test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: smokeTestProviders(),
    }).compileComponents()
  })

  it('builds the subfilters FieldArrayType and adds a filter row', async () => {
    const harness = await RouterTestingHarness.create()
    await harness.navigateByUrl('/search/query/searchAssertions')

    const subfiltersDe = harness.routeDebugElement?.query(
      By.directive(CvcQuerySubfiltersField)
    )
    expect(subfiltersDe).toBeTruthy()

    const subfilters = subfiltersDe!
      .componentInstance as CvcQuerySubfiltersField
    // onPopulate must have registered the FormArray control at build time —
    // undefined here means formly skipped the FieldArrayType lifecycle hooks
    expect(subfilters.field.formControl).toBeDefined()
    expect(Array.isArray(subfilters.field.model)).toBe(true)

    expect(() => subfilters.addRow()).not.toThrow()
    harness.detectChanges()
    expect(subfilters.field.fieldGroup?.length).toBe(1)
    expect(subfilters.field.model.length).toBe(1)
  })
})
