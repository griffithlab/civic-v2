import {
  Component,
  ChangeDetectionStrategy,
  Type,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { filter, startWith, take } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcNccnGuidelineVersionFieldOptions = Partial<
  FieldTypeConfig<CvcNccnGuidelineFieldProps>
>

export interface CvcNccnGuidelineFieldProps extends FormlyFieldProps {
  description?: string
  extraType?: string
  disabled?: boolean
}

export interface FormlyNccnGuidelineFieldConfig
  extends FormlyFieldConfig<CvcNccnGuidelineFieldProps> {
  type: 'input' | Type<CvcNccnGuidelineVersionField>
}

const NccnGuidelineVersionMixin =
  mixin(
    BaseFieldType<FieldTypeConfig<CvcNccnGuidelineFieldProps>, Maybe<string>>()
  )

@Component({
  selector: 'cvc-nccn-guideline-version-input',
  template: `
    <input
      nz-input
      placeholder="ex: 1.2023"
      [formControl]="formControl"
      [formlyAttributes]="field" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcNccnGuidelineVersionField
  extends NccnGuidelineVersionMixin
  implements AfterViewInit
{
  defaultDescription =
    "Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>"

  defaultOptions: CvcNccnGuidelineVersionFieldOptions = {
    validators: {
      nccnVersionNumber: {
        expression: (c: AbstractControl) => {
          if (c.value) {
            if (/^\d{1,2}\.\d{4}$/.test(c.value)) {
              let year = +c.value.split('.')[1]
              if (year >= 2000 && year <= new Date().getFullYear() + 1) {
                return true
              } else {
                return false
              }
            } else {
              return false
            }
          } else {
            return true
          }
        },
        message: (_: any, field: FormlyFieldConfig) =>
          `"${field.formControl?.value}" does not fit the format Version.Year`,
      },
    },
    props: {
      label: 'NCCN Guideline Version',
      extraType: 'description',
      description: this.defaultDescription,
    },
  }

  constructor(private cdr: ChangeDetectorRef) {
    super()
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  }

  configureField() {
    this.state?.fields.nccnGuidelineId$
      .pipe(untilDestroyed(this))
      .subscribe((guideline: Maybe<number>) => {
        if (guideline) {
          this.props.disabled = false
          this.props.required = true
          this.props.extraType = 'description'
          this.props.description = this.defaultDescription
        } else {
          this.props.disabled = true
          this.props.required = false
          this.props.extraType = 'prompt'
          this.props.description =
            'NCCN Guideline Version is only required when NCCN Guideline is specified.'
          this.formControl.setValue(undefined)
        }
      })
  }
}
