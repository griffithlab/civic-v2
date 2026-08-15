import { OverlayContainer } from '@angular/cdk/overlay'
import { Type, signal } from '@angular/core'
import { ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { CvcBaseFieldsRegistryModule } from '@app/forms/types/base-fields.registry.module'
import { CvcFormWrappersModule } from '@app/forms/wrappers/form-wrappers.module'
import { CaretRightOutline } from '@ant-design/icons-angular/icons'
import { civicIcons } from '@app/icons-provider.module'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { describe, expect, it } from 'vitest'
import { MockGraphqlOperation, provideMockApollo } from './apollo-test.providers'
import { FormlyTestHostComponent, createFieldTestHost } from './formly-test.host'

/** Everything a spec needs to drive one mounted enum-select field. */
export interface EnumFieldHarness {
  fixture: ComponentFixture<FormlyTestHostComponent>
  operations: MockGraphqlOperation[]
  /** flushes pending macrotasks and re-renders; see the entity harness */
  settle(ms?: number): Promise<void>
  openDropdown(): void
  /** the rendered dropdown options, which live in the cdk overlay container */
  optionItems(): HTMLElement[]
  selectedItem(): HTMLElement
  control(): import('@angular/forms').AbstractControl
  field<T>(fieldType: Type<T>): T
  /** the props object the form-field wrapper renders around this field */
  props(): Record<string, any>
  destroy(): void
}

export interface EnumFieldHarnessConfig {
  /** the registered formly type name, e.g. 'reference-build-select' */
  type: string
  /** the model/control key, e.g. 'referenceBuild' */
  key: string
  field?: Partial<FormlyFieldConfig>
  model?: Record<string, any>
  formState?: any
  /** only the handful of enum fields that query the API need this */
  respond?: (op: MockGraphqlOperation) => Record<string, any>
}

/**
 * Mounts an enum-select field by its registered type name. Unlike the entity
 * harness there is no typeahead to wait on, so `settle` only needs to clear
 * the microtask queue and the cdk overlay's first measure.
 */
export async function createEnumFieldHarness(
  config: EnumFieldHarnessConfig
): Promise<EnumFieldHarness> {
  const operations: MockGraphqlOperation[] = []

  const fixture = createFieldTestHost({
    field: {
      key: config.key,
      type: config.type,
      wrappers: [],
      ...config.field,
    },
    model: config.model ?? {},
    formState: config.formState,
    // both registries: enum selects live in the select one, the plain fields
    // (clinvar, tag-input, the FDA checkboxes) in the base one
    imports: [
      CvcSelectFieldsRegistryModule,
      CvcBaseFieldsRegistryModule,
      CvcFormWrappersModule,
      NzIconModule.forRoot([...civicIcons, CaretRightOutline]),
    ],
    providers: [
      provideMockApollo(config.respond ?? (() => ({})), operations),
      provideRouter([]),
      provideNoopAnimations(),
    ],
  })

  const overlay = fixture.debugElement.injector
    .get(OverlayContainer)
    .getContainerElement()

  const select = (): HTMLElement =>
    fixture.nativeElement.querySelector('nz-select')

  const harness: EnumFieldHarness = {
    fixture,
    operations,
    async settle(ms = 0) {
      fixture.detectChanges()
      await new Promise((r) => setTimeout(r, ms))
      fixture.detectChanges()
      await new Promise((r) => setTimeout(r, 0))
      fixture.detectChanges()
    },
    openDropdown() {
      select().click()
      fixture.detectChanges()
    },
    optionItems: () =>
      Array.from(overlay.querySelectorAll('nz-option-item')) as HTMLElement[],
    selectedItem: () =>
      select().querySelector('.ant-select-selection-item') as HTMLElement,
    control: () => fixture.componentInstance.form.get(config.key)!,
    field: <T,>(fieldType: Type<T>) =>
      fixture.debugElement.query(By.directive(fieldType as Type<any>))
        .componentInstance as T,
    props: () => fixture.componentInstance.fields[0].props as Record<string, any>,
    destroy() {
      fixture.debugElement.injector.get(OverlayContainer).ngOnDestroy()
    },
  }

  await harness.settle()
  return harness
}

export interface EnumSelectContractConfig<TField> {
  fieldType: Type<TField>
  /** registered single-select type name */
  type: string
  key: string
  /** the enum values the field is expected to offer, in order */
  values: string[]
  /** label text expected in the first option, when it is not the raw value */
  firstOptionText?: string
  formState?: () => Record<string, any>
  respond?: (op: MockGraphqlOperation) => Record<string, any>
}

/**
 * The behavior every enum-select field inherits from CvcEnumSelectFieldBase.
 * Call inside a `describe` for the field; add its option-copy and gating tests
 * alongside.
 */
export function describeEnumSelectContract<TField>(
  config: EnumSelectContractConfig<TField>
): void {
  const setup = (overrides: Partial<EnumFieldHarnessConfig> = {}) =>
    createEnumFieldHarness({
      type: config.type,
      key: config.key,
      formState: config.formState?.(),
      respond: config.respond,
      ...overrides,
    })

  describe('enum-select contract', () => {
    it('offers an option per enum value', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      expect(h.optionItems()).toHaveLength(config.values.length)
      h.destroy()
    })

    it('labels the first option', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      const text = h.optionItems()[0].textContent?.replace(/\s+/g, ' ').trim()
      expect(text).toContain(config.firstOptionText ?? config.values[0])
      h.destroy()
    })

    it('sets the control to the bare enum value when an option is selected', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      h.optionItems()[0].click()
      await h.settle()
      expect(h.control().value).toBe(config.values[0])
      h.destroy()
    })

    it('renders the selection and clears it when the tag is closed', async () => {
      const h = await setup({ model: { [config.key]: config.values[0] } })
      await h.settle()
      expect(h.control().touched).toBe(true)

      const close = h.fixture.nativeElement.querySelector(
        '.ant-tag-close-icon'
      ) as HTMLElement
      expect(close).toBeTruthy()
      close.click()
      await h.settle()
      expect(h.control().value).toBeUndefined()
      h.destroy()
    })

    it('publishes its value into the form state under its own key', async () => {
      const stateField = signal<string | undefined>(undefined)
      const base = config.formState?.() ?? {}
      const h = await setup({
        formState: {
          ...base,
          fields: { ...(base.fields ?? {}), [config.key]: stateField },
        },
      })
      h.openDropdown()
      await h.settle()
      h.optionItems()[0].click()
      await h.settle()
      expect(stateField()).toBe(config.values[0])
      h.destroy()
    })
  })
}
