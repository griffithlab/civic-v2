import { DestroyRef, Directive, OnInit, Signal, inject, signal } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { BaseState } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo.types'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'

export type CvcFieldValue = Maybe<
  number | string | boolean | string[] | number[]
>

/**
 * Base for every CIViC formly field: exposes the control's value as a signal
 * and binds the field to its form-state subject. Replaces the BaseFieldType
 * mixin's onModelChange$/onValueChange$ pair — one signal covers both, since
 * `formControl.valueChanges` fires for programmatic updates (quick-add, tag
 * close, restored query params) as well as user input.
 */
@Directive()
export abstract class CvcFieldBase<
    V extends CvcFieldValue,
    FC extends FieldTypeConfig = FieldTypeConfig,
  >
  extends FieldType<FC>
  implements OnInit
{
  protected readonly destroyRef = inject(DestroyRef)

  private readonly currentValue = signal<Maybe<V>>(undefined)
  readonly value: Signal<Maybe<V>> = this.currentValue.asReadonly()

  /** the form state this field belongs to, when its form provides one */
  protected state?: BaseState

  ngOnInit(): void {
    const initial = this.formControl.value as Maybe<V>
    this.currentValue.set(normalizeValue(initial))

    // a prepopulated model (revise form, query param) counts as user input
    if (initial && (!Array.isArray(initial) || initial.length > 0)) {
      this.formControl.markAsTouched()
    }

    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((v) => this.currentValue.set(normalizeValue(v as Maybe<V>)))

    this.connectStateField()
  }

  /**
   * Binds this field to its form-state subject, located by the `${field.key}$`
   * naming convention. The convention is deliberately isolated in this one
   * method: the planned form-state rework replaces it and nothing else.
   */
  protected connectStateField(): void {
    const formState = this.field.options?.formState
    if (!formState?.fields) return
    this.state = formState as BaseState

    const stateKey = `${this.field.key}$`
    const subject = this.state.fields[stateKey]
    if (!subject) {
      console.warn(
        `${this.field.id} could not find state field ${stateKey} on its form state.`
      )
      return
    }

    subject.next(this.value())
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((v) => subject.next(normalizeValue(v)))
  }

  protected resetField(): void {
    this.formControl.setValue(undefined)
  }
}

/** nz form controls emit null when cleared; the rest of the stack wants undefined. */
function normalizeValue<V>(v: Maybe<V>): Maybe<V> {
  return v === null ? undefined : v
}
