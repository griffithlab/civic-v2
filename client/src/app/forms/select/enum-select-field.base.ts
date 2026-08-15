import {
  ChangeDetectorRef,
  Directive,
  Injector,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop'
import { EntityType } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { FieldTypeConfig } from '@ngx-formly/core'
import { Observable, skip } from 'rxjs'
import { CvcFieldBase } from './field.base'
import { CvcEnumSelectFieldProps } from './select.types'

export type CvcEnumSelectValue<E extends string> = Maybe<E | E[]>

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
  protected readonly injector = inject(Injector)

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
   * Follows the form's `<entityName>Type$` subject and returns it as a signal.
   * A type change invalidates whatever is selected, so this also clears the
   * control; describing the field is left to the caller, so that each field
   * has exactly one writer of `props`.
   *
   * The first emission is skipped on revise and clone forms. The subject is a
   * BehaviorSubject, so it replays its current value the moment we subscribe —
   * and since the handler clears the control, without the skip a revise form
   * would wipe the value it had just prepopulated. Only 'add' starts from a
   * genuinely empty field. Same class of trap as variant-select's formReady$
   * gate; there is a test that fails if the skip is removed.
   */
  protected connectEntityTypeGate<T = EntityType>(): Signal<Maybe<T>> {
    const state = this.state
    if (!state) return signal<Maybe<T>>(undefined).asReadonly()

    const stateKey = `${state.entityName.toLowerCase()}Type$`
    const subject = state.fields[stateKey]
    if (!subject) {
      console.error(
        `${this.field.id} could not find form state's ${stateKey} to gate its options.`
      )
      return signal<Maybe<T>>(undefined).asReadonly()
    }

    // The reset is skipped, the reading is not. Describing the field needs the
    // current entity type immediately — including the replayed one — while
    // clearing the control must wait for a genuine change.
    subject
      .pipe(
        skip(state.formMode === 'add' ? 0 : 1),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        if (this.formControl.value) this.resetField()
      })

    return toSignal(subject, { injector: this.injector })
  }

  /** Feeds a form-state enum subject into the dropdown's options. */
  protected connectStateEnum(subject: Observable<E[]>): void {
    subject
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((values) => this.optionValues.set(values ?? []))
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
