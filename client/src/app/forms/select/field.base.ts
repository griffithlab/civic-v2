import {
  DestroyRef,
  Directive,
  Injector,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core'
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
  /** for effects created outside the constructor, i.e. from ngOnInit */
  protected readonly injector = inject(Injector)

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
   * Publishes this field's value into the form state, under its own `key`.
   *
   * The `${field.key}$` naming convention this used to rely on is gone with the
   * subjects — the state keys are now just the field keys, so there is no
   * convention left to get wrong.
   */
  protected connectStateField(): void {
    const formState = this.field.options?.formState
    if (!formState?.fields) return
    this.state = formState as BaseState

    const key = String(this.field.key)
    const stateField = this.state.fields[key]
    if (!stateField) {
      console.warn(
        `${this.field.id} could not find state field ${key} on its form state.`
      )
      return
    }

    stateField.set(this.value())
    this.formControl.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((v) => stateField.set(normalizeValue(v)))
  }

  protected resetField(): void {
    this.formControl.setValue(undefined)
  }
}

/** nz form controls emit null when cleared; the rest of the stack wants undefined. */
function normalizeValue<V>(v: Maybe<V>): Maybe<V> {
  return v === null ? undefined : v
}
