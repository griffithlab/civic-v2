import { OverlayContainer } from '@angular/cdk/overlay'
import { ComponentFixture } from '@angular/core/testing'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { civicIcons } from '@app/icons-provider.module'
import {
  MockGraphqlOperation,
  provideMockApollo,
} from '@app/testing/apollo-test.providers'
import {
  FormlyTestHostComponent,
  createFieldTestHost,
} from '@app/testing/formly-test.host'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { BehaviorSubject } from 'rxjs'
import { afterEach, describe, expect, it } from 'vitest'

const disease = (id: number, name: string, doid: string) => ({
  __typename: 'Disease' as const,
  id,
  name,
  link: `/diseases/${id}`,
  deprecated: false,
  doid,
  diseaseAliases: [`${name} alias`],
})

const MELANOMA = disease(7, 'Melanoma', '1909')
const LEUKEMIA = disease(8, 'Leukemia', '1240')

describe('CvcDiseaseSelectField', () => {
  let fixture: ComponentFixture<FormlyTestHostComponent>
  let overlay: HTMLElement
  let operations: MockGraphqlOperation[]

  async function setup(
    field: Partial<FormlyFieldConfig> = {},
    model: Record<string, any> = {},
    formState?: any
  ) {
    operations = []
    fixture = createFieldTestHost({
      field: {
        key: 'diseaseId',
        type: 'disease-select',
        wrappers: [],
        ...field,
      },
      model,
      formState,
      imports: [
        CvcSelectFieldsRegistryModule,
        NzIconModule.forRoot(civicIcons),
      ],
      providers: [
        provideMockApollo((op) => {
          if (op.operationName === 'DiseaseSelectTypeahead') {
            return { diseaseTypeahead: [MELANOMA, LEUKEMIA] }
          }
          if (op.operationName === 'DiseaseSelectTag') {
            return {
              disease: [MELANOMA, LEUKEMIA].find(
                (d) => d.id === op.variables.id
              ),
            }
          }
          throw new Error(`unexpected operation ${op.operationName}`)
        }, operations),
        provideRouter([]),
        provideNoopAnimations(),
      ],
    })
    overlay = fixture.debugElement.injector
      .get(OverlayContainer)
      .getContainerElement()
    await settle()
  }

  afterEach(() => {
    fixture?.debugElement.injector.get(OverlayContainer).ngOnDestroy()
  })

  // NOTE: fixture.whenStable() never resolves in this TestBed (a zone macrotask
  // stays pending), so tests flush macrotasks by hand. The waits must clear the
  // typeahead's 300ms debounce.
  async function settle(ms = 400) {
    fixture.detectChanges()
    await new Promise((r) => setTimeout(r, ms))
    fixture.detectChanges()
    await new Promise((r) => setTimeout(r, 0))
    fixture.detectChanges()
  }

  function openDropdown() {
    ;(fixture.nativeElement.querySelector('nz-select') as HTMLElement).click()
    fixture.detectChanges()
  }

  function type(text: string) {
    const input = fixture.nativeElement.querySelector(
      'input'
    ) as HTMLInputElement
    input.value = text
    input.dispatchEvent(new Event('input', { bubbles: true }))
    fixture.detectChanges()
  }

  const typeaheadCalls = () =>
    operations.filter((o) => o.operationName === 'DiseaseSelectTypeahead')
  const tagCalls = () =>
    operations.filter((o) => o.operationName === 'DiseaseSelectTag')
  const control = () => fixture.componentInstance.form.get('diseaseId')!
  const optionItems = () =>
    Array.from(overlay.querySelectorAll('nz-option-item')) as HTMLElement[]

  it('issues no query until the dropdown is opened or a search is typed', async () => {
    await setup()
    await settle()
    expect(typeaheadCalls()).toHaveLength(0)
  })

  it('lists everything when the dropdown opens', async () => {
    await setup()
    openDropdown()
    await settle()
    expect(typeaheadCalls()).toHaveLength(1)
    expect(typeaheadCalls()[0].variables).toEqual({ name: '' })
    expect(optionItems()).toHaveLength(2)
  })

  it('debounces keystrokes into a single query', async () => {
    await setup()
    openDropdown()
    await settle()
    const before = typeaheadCalls().length

    type('m')
    type('me')
    type('mel')
    await settle()

    expect(typeaheadCalls().length - before).toBe(1)
    expect(typeaheadCalls().at(-1)!.variables).toEqual({ name: 'mel' })
  })

  it('renders each option as a tag plus its DOID metadata', async () => {
    await setup()
    openDropdown()
    await settle()
    const text = optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('Melanoma')
    expect(text).toContain('1909')
    expect(text).toContain('Leukemia')
  })

  it('sets the control to a bare id when an option is selected', async () => {
    await setup()
    openDropdown()
    await settle()
    optionItems()[1].click()
    await settle()
    expect(control().value).toBe(8)
  })

  it('sets the control to an array of bare ids in multi-select mode', async () => {
    await setup({ type: 'disease-multi-select' })
    openDropdown()
    await settle()
    optionItems()[0].click()
    await settle()
    expect(control().value).toEqual([7])
  })

  it('renders the selected item as a tag from the cache', async () => {
    await setup()
    openDropdown()
    await settle()
    optionItems()[0].click()
    await settle()
    const selected = fixture.nativeElement.querySelector(
      '.ant-select-selection-item'
    ) as HTMLElement
    expect(selected.textContent).toContain('Melanoma')
  })

  it('fetches a prepopulated value and marks the control touched', async () => {
    await setup({}, { diseaseId: 7 })
    await settle()
    expect(tagCalls()).toHaveLength(1)
    expect(tagCalls()[0].variables).toEqual({ id: 7 })
    expect(control().touched).toBe(true)
    expect(fixture.nativeElement.textContent).toContain('Melanoma')
  })

  it('clears the field when the selected tag is closed', async () => {
    await setup({}, { diseaseId: 7 })
    await settle()
    const close = fixture.nativeElement.querySelector(
      'nz-tag .ant-tag-close-icon'
    ) as HTMLElement
    expect(close).toBeTruthy()
    close.click()
    await settle()
    expect(control().value).toBeUndefined()
  })

  it('propagates its value to the form-state subject named after its key', async () => {
    const diseaseId$ = new BehaviorSubject<number | undefined>(undefined)
    await setup({}, {}, { fields: { diseaseId$ } })
    openDropdown()
    await settle()
    optionItems()[1].click()
    await settle()
    expect(diseaseId$.value).toBe(8)
  })

})
