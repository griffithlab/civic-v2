import { OverlayContainer } from '@angular/cdk/overlay'
import { Type } from '@angular/core'
import { ComponentFixture } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { provideNoopAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { civicIcons } from '@app/icons-provider.module'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { describe, expect, it } from 'vitest'
import { MockGraphqlOperation, provideMockApollo } from './apollo-test.providers'
import { FormlyTestHostComponent, createFieldTestHost } from './formly-test.host'

/** Everything a spec needs to drive one mounted entity-select field. */
export interface SelectFieldHarness {
  fixture: ComponentFixture<FormlyTestHostComponent>
  /** every GraphQL operation the field has issued, in order */
  operations: MockGraphqlOperation[]
  /**
   * Flushes pending macrotasks and re-renders. `fixture.whenStable()` never
   * resolves in this TestBed (a zone macrotask stays pending), so waits are
   * manual; the default clears the typeahead's 300ms debounce.
   */
  settle(ms?: number): Promise<void>
  openDropdown(): void
  type(text: string): void
  /** the rendered dropdown options, which live in the cdk overlay container */
  optionItems(): HTMLElement[]
  callsTo(operationName: string): MockGraphqlOperation[]
  control(): import('@angular/forms').AbstractControl
  /** the field component instance */
  field<T>(fieldType: Type<T>): T
  /** what a quick-add form emits once it has created an entity */
  quickAdd(fieldType: Type<unknown>, value: number | number[]): void
  destroy(): void
}

export interface SelectFieldHarnessConfig {
  /** the registered formly type name, e.g. 'disease-select' */
  type: string
  /** the model/control key, e.g. 'diseaseId' */
  key: string
  /** answers each GraphQL operation; throw for anything unexpected */
  respond: (op: MockGraphqlOperation) => Record<string, any>
  field?: Partial<FormlyFieldConfig>
  model?: Record<string, any>
  formState?: any
}

/**
 * Mounts an entity-select field by its registered type name against a mock
 * Apollo link, and returns the handles specs need to drive it. Awaits one
 * settle before returning — cdk-virtual-scroll renders zero options if the
 * dropdown opens before it has measured.
 */
export async function createSelectFieldHarness(
  config: SelectFieldHarnessConfig
): Promise<SelectFieldHarness> {
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
    imports: [CvcSelectFieldsRegistryModule, NzIconModule.forRoot(civicIcons)],
    providers: [
      provideMockApollo(config.respond, operations),
      provideRouter([]),
      provideNoopAnimations(),
    ],
  })

  const overlay = fixture.debugElement.injector
    .get(OverlayContainer)
    .getContainerElement()

  const harness: SelectFieldHarness = {
    fixture,
    operations,
    async settle(ms = 400) {
      fixture.detectChanges()
      await new Promise((r) => setTimeout(r, ms))
      fixture.detectChanges()
      await new Promise((r) => setTimeout(r, 0))
      fixture.detectChanges()
    },
    openDropdown() {
      ;(fixture.nativeElement.querySelector('nz-select') as HTMLElement).click()
      fixture.detectChanges()
    },
    type(text: string) {
      const input = fixture.nativeElement.querySelector(
        'input'
      ) as HTMLInputElement
      input.value = text
      input.dispatchEvent(new Event('input', { bubbles: true }))
      fixture.detectChanges()
    },
    optionItems: () =>
      Array.from(overlay.querySelectorAll('nz-option-item')) as HTMLElement[],
    callsTo: (operationName) =>
      operations.filter((o) => o.operationName === operationName),
    control: () => fixture.componentInstance.form.get(config.key)!,
    field: <T,>(fieldType: Type<T>) =>
      fixture.debugElement.query(By.directive(fieldType as Type<any>))
        .componentInstance as T,
    quickAdd(fieldType, value) {
      const instance = this.field(fieldType) as unknown as {
        onEntityCreated(v: number | number[]): void
      }
      instance.onEntityCreated(value)
    },
    destroy() {
      fixture.debugElement.injector.get(OverlayContainer).ngOnDestroy()
    },
  }

  await harness.settle()
  return harness
}

export interface EntitySelectContractConfig<TField> {
  /** the field component class, used to reach the instance */
  fieldType: Type<TField>
  /** registered single-select type name */
  type: string
  /** registered multi-select type name */
  multiType: string
  key: string
  typeaheadOp: string
  tagOp: string
  respond: (op: MockGraphqlOperation) => Record<string, any>
  /** two records the typeahead returns, in order */
  records: [{ id: number; name: string }, { id: number; name: string }]
  /** the typeahead variables produced by an empty search */
  emptySearchVars: Record<string, any>
  /** the typeahead variables produced by searching `searchTerm` */
  searchVars: (term: string) => Record<string, any>
  /** the tag-query variables for an id */
  tagVars: (id: number) => Record<string, any>
  /** a search term that should match; defaults to the first record's prefix */
  searchTerm?: string
  /** set false for fields with no quick-add form */
  hasQuickAdd?: boolean
}

/**
 * The behavior every entity-select field inherits from
 * CvcEntitySelectFieldBase. Call inside a `describe` for the field; add
 * field-specific `it`s (metadata rendering, type gating) alongside it.
 */
export function describeEntitySelectContract<TField>(
  config: EntitySelectContractConfig<TField>
): void {
  const [first, second] = config.records
  const term = config.searchTerm ?? first.name.slice(0, 3).toLowerCase()

  const setup = (overrides: Partial<SelectFieldHarnessConfig> = {}) =>
    createSelectFieldHarness({
      type: config.type,
      key: config.key,
      respond: config.respond,
      ...overrides,
    })

  describe('entity-select contract', () => {
    it('issues no query until the dropdown is opened or a search is typed', async () => {
      const h = await setup()
      await h.settle()
      expect(h.callsTo(config.typeaheadOp)).toHaveLength(0)
      h.destroy()
    })

    it('lists everything when the dropdown opens', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      expect(h.callsTo(config.typeaheadOp)).toHaveLength(1)
      expect(h.callsTo(config.typeaheadOp)[0].variables).toEqual(
        config.emptySearchVars
      )
      expect(h.optionItems()).toHaveLength(2)
      h.destroy()
    })

    it('debounces keystrokes into a single query', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      const before = h.callsTo(config.typeaheadOp).length

      for (let i = 1; i <= term.length; i++) h.type(term.slice(0, i))
      await h.settle()

      expect(h.callsTo(config.typeaheadOp).length - before).toBe(1)
      expect(h.callsTo(config.typeaheadOp).at(-1)!.variables).toEqual(
        config.searchVars(term)
      )
      h.destroy()
    })

    it('renders an option per result', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      const text = h
        .optionItems()
        .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
        .join('|')
      expect(text).toContain(first.name)
      expect(text).toContain(second.name)
      h.destroy()
    })

    it('sets the control to a bare id when an option is selected', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      h.optionItems()[1].click()
      await h.settle()
      expect(h.control().value).toBe(second.id)
      h.destroy()
    })

    it('sets the control to an array of bare ids in multi-select mode', async () => {
      const h = await setup({ type: config.multiType })
      h.openDropdown()
      await h.settle()
      h.optionItems()[0].click()
      await h.settle()
      expect(h.control().value).toEqual([first.id])
      h.destroy()
    })

    it('renders the selected item as a tag from the cache', async () => {
      const h = await setup()
      h.openDropdown()
      await h.settle()
      h.optionItems()[0].click()
      await h.settle()
      const selected = h.fixture.nativeElement.querySelector(
        '.ant-select-selection-item'
      ) as HTMLElement
      expect(selected.textContent).toContain(first.name)
      h.destroy()
    })

    it('fetches a prepopulated value and marks the control touched', async () => {
      const h = await setup({ model: { [config.key]: first.id } })
      await h.settle()
      expect(h.callsTo(config.tagOp)).toHaveLength(1)
      expect(h.callsTo(config.tagOp)[0].variables).toEqual(
        config.tagVars(first.id)
      )
      expect(h.control().touched).toBe(true)
      expect(h.fixture.nativeElement.textContent).toContain(first.name)
      h.destroy()
    })

    it('clears the field when the selected tag is closed', async () => {
      const h = await setup({ model: { [config.key]: first.id } })
      await h.settle()
      const close = h.fixture.nativeElement.querySelector(
        'nz-tag .ant-tag-close-icon'
      ) as HTMLElement
      expect(close).toBeTruthy()
      close.click()
      await h.settle()
      expect(h.control().value).toBeUndefined()
      h.destroy()
    })

    it('propagates its value to the form-state subject named after its key', async () => {
      const { BehaviorSubject } = await import('rxjs')
      const subject = new BehaviorSubject<number | undefined>(undefined)
      const h = await setup({
        formState: { fields: { [`${config.key}$`]: subject } },
      })
      h.openDropdown()
      await h.settle()
      h.optionItems()[1].click()
      await h.settle()
      expect(subject.value).toBe(second.id)
      h.destroy()
    })

    if (config.hasQuickAdd !== false) {
      it('appends a quick-added entity to a multi-select rather than replacing it', async () => {
        const h = await setup({
          type: config.multiType,
          model: { [config.key]: [first.id] },
        })
        await h.settle()
        expect(h.control().value).toEqual([first.id])

        h.quickAdd(config.fieldType, second.id)
        await h.settle()

        expect(h.control().value).toEqual([first.id, second.id])
        h.destroy()
      })

      it('does not duplicate an id already selected in a multi-select', async () => {
        const h = await setup({
          type: config.multiType,
          model: { [config.key]: [first.id] },
        })
        await h.settle()
        h.quickAdd(config.fieldType, first.id)
        await h.settle()
        expect(h.control().value).toEqual([first.id])
        h.destroy()
      })

      it('replaces the value when a quick-added entity lands in a single select', async () => {
        const h = await setup({ model: { [config.key]: first.id } })
        await h.settle()
        h.quickAdd(config.fieldType, second.id)
        await h.settle()
        expect(h.control().value).toBe(second.id)
        h.destroy()
      })
    }
  })
}
