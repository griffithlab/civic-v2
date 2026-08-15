import {
  ChangeDetectorRef,
  Directive,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { FieldTypeConfig } from '@ngx-formly/core'
import { CvcFieldBase } from './field.base'
import { CvcEnumSelectFieldProps } from './select.types'

export type CvcEnumSelectValue<E extends string> = Maybe<E | E[]>

/** Distinguishes "no previous value yet" from a previous value of undefined. */
const FIRST_RUN = Symbol('first run')

/**
 * Base for the ten fields that select from a fixed enum rather than searching
 * the API. Replaces the EnumSelectField mixin, whose whole job was turning a
 * `QueryList<TemplateRef>` of option templates into `NzSelectOptionInterface[]`
 * with TemplateRef labels — a dance forced by rendering through the
 * `cvc-enum-select` wrapper. Field templates now declare `<nz-option
 * nzCustomContent>` directly inside their own `<nz-select>`, so the options are
 * ordinary template content and the ViewChildren/detectChanges machinery goes
 * away with the wrapper.
 */
@Directive()
export abstract class CvcEnumSelectFieldBase<
  E extends string,
  P extends CvcEnumSelectFieldProps = CvcEnumSelectFieldProps,
> extends CvcFieldBase<CvcEnumSelectValue<E>, FieldTypeConfig<P>> {
  protected readonly cdr = inject(ChangeDetectorRef)

  /** the enum values this field offers; set directly or via connectStateEnum */
  protected readonly optionValues = signal<E[]>([])

  /** the current selection when the field is single-select, else undefined */
  protected readonly selected: Signal<Maybe<E>> = computed(() => {
    const value = this.value()
    return Array.isArray(value) ? undefined : value
  })

  /**
   * Per-option copy shown beneath the field, for fields whose description is a
   * plain function of the selected value. Opt in with connectValueDescription;
   * a field whose description also depends on a gate should write props itself
   * in one effect instead, so there is only ever one writer.
   */
  protected descriptionFor(_value: E): Maybe<string> {
    return undefined
  }

  /** Installs the descriptionFor effect. Call from ngOnInit. */
  protected connectValueDescription(): void {
    effect(
      () => {
        const value = this.selected()
        const description = value ? this.descriptionFor(value) : undefined
        if (description) {
          this.props.description = description
          this.props.extraType = 'description'
        } else {
          this.props.description = undefined
          this.props.extraType = undefined
        }
        this.markDirty()
      },
      { injector: this.injector }
    )
  }

  /**
   * Follows the form's `<entityName>Type` and returns it. A type change
   * invalidates whatever is selected, so this also clears the control;
   * describing the field is left to the caller, so that each field has exactly
   * one writer of `props`.
   *
   * **The first run never clears.** Arriving at an initial value is not a
   * change — on a revise or clone form that value is the prepopulated one, and
   * clearing it would wipe what the form had just loaded. This used to be a
   * `skip(formMode === 'add' ? 0 : 1)` on a replaying BehaviorSubject, which
   * needed to know the form mode to decide whether the first emission was real.
   * Comparing against the previous value needs no such knowledge, and there is a
   * test that fails if the guard is removed.
   */
  protected connectEntityTypeGate<T = EntityType>(): Signal<Maybe<T>> {
    const state = this.state
    if (!state) return signal<Maybe<T>>(undefined).asReadonly()

    const stateKey = `${state.entityName.toLowerCase()}Type`
    const entityType = state.fields[stateKey] as Maybe<Signal<Maybe<T>>>
    if (!entityType) {
      console.error(
        `${this.field.id} could not find form state's ${stateKey} to gate its options.`
      )
      return signal<Maybe<T>>(undefined).asReadonly()
    }

    let previous: Maybe<T> | typeof FIRST_RUN = FIRST_RUN
    effect(
      () => {
        const current = entityType()
        const wasFirstRun = previous === FIRST_RUN
        const changed = !wasFirstRun && previous !== current
        previous = current
        if (changed && this.formControl.value) this.resetField()
      },
      { injector: this.injector }
    )

    return entityType
  }

  /** Feeds a form-state enum into the dropdown's options. */
  protected connectStateEnum(source: Signal<E[]>): void {
    effect(() => this.optionValues.set(source() ?? []), {
      injector: this.injector,
    })
  }

  protected onTagClose(): void {
    this.resetField()
  }

  protected override resetField(): void {
    this.formControl.setValue(this.props.isMultiSelect ? [] : undefined)
  }

  /**
   * props are plain objects read by the OnPush form-field wrapper above this
   * field; only marking the view dirty makes the wrapper re-render them.
   */
  protected markDirty(): void {
    this.cdr.markForCheck()
  }
}
