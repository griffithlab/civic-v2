import { Injectable } from '@angular/core'
import { BaseState } from '@app/forms/states/base.state'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FieldType, FieldTypeConfig } from '@ngx-formly/core'
import { BehaviorSubject, filter, map, Observable } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

export type BaseFieldValue = Maybe<
  number | string | boolean | string[] | number[]
>

export function BaseFieldType<
  FC extends FieldTypeConfig,
  V extends BaseFieldValue,
>() {
  @UntilDestroy()
  @Injectable()
  class BaseFieldType extends FieldType<FC> {
    state?: BaseState

    // SOURCE STREAMS
    // emits all field model changes from field.valueChanges
    onModelChange$!: Observable<Maybe<V>>

    // emits values for both model changes and non-model value updates
    // e.g. query param, tag close, restore saved form state
    onValueChange$!: BehaviorSubject<Maybe<V>>

    // STATE OUTPUT STREAM
    stateValueChange$?: BehaviorSubject<Maybe<V>>

    configureBaseField(): void {
      if (!this.field?.options?.fieldChanges) {
        console.error(
          `${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`
        )
        return
      }

      // set up model and value changes observables
      this.onModelChange$ = this.field.options.fieldChanges.pipe(
        filter((c) => c.field.id === this.field.id), // filter out other fields
        pluck('value')
        // tag(`${this.field.key} base-field onModelChange$`)
      )

      // update state if field has been prepopulated w/ query param or
      // form component model e.g. revise forms
      if (this.formControl.value) {
        this.onValueChange$ = new BehaviorSubject<Maybe<V>>(
          this.formControl.value
        )

        if (Array.isArray(this.formControl.value)) {
          // only mark array type fields as touched if value contains elements
          if (this.field.formControl.value.length > 0) {
            this.formControl.markAsTouched()
          }
        } else {
          this.formControl.markAsTouched()
        }
      } else {
        this.onValueChange$ = new BehaviorSubject<Maybe<V>>(undefined)
      }

      // // DEBUG
      // // uncomment next line to limit logging to a single field
      // if (this.field.key === 'evidenceItemIds')
      //   this.onValueChange$
      //     .pipe(tag(`${this.field.key} base-field onValueChange$`))
      //     .subscribe()

      // emit value from onValueChange$ for every model change
      this.onModelChange$.pipe(untilDestroyed(this)).subscribe((v) => {
        this.onValueChange$.next(v)
      })

      if (
        this.field.options?.formState &&
        this.field.options.formState.fields
      ) {
        this.state = this.field.options.formState
        this.autoConfigureStateValueChanges()
      }
    }

    autoConfigureStateValueChanges(): void {
      if (!this.field.key && typeof this.field.key === 'string') {
        console.warn(
          `${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,
          this.field.key
        )
      }

      // it is assumed entity state field names are
      // field key string + '$', e.g. field key 'geneId'
      // will emit value changes from state.field.geneId$
      const stateField = `${this.field.key}$`
      if (!(this.state && this.state.fields[stateField])) {
        console.warn(
          `${this.field.id} could not find state field ${stateField} on form state. State: `,
          this.state
        )
        return
      }
      this.stateValueChange$ = this.state.fields[stateField]
      this.onValueChange$
        .pipe(
          // some nz form components set model value to null when cleared,
          // but other fields expect undefined for an unset model value, so
          // nulls are converted to undefined for consistency
          map((v: Maybe<V>) => (v === null ? undefined : v)),
          // tag(`${this.field.id} onValueChange$`),
          untilDestroyed(this)
        )
        .subscribe((v) => {
          if (this.stateValueChange$) this.stateValueChange$.next(v)
        })
    }
  }

  return BaseFieldType
}
