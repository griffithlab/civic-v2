import {
  ChangeDetectionStrategy,
  Component,
  Type,
  effect,
} from '@angular/core'
import { AbstractControl, ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzInputModule } from 'ng-zorro-antd/input'

export type CvcNccnGuidelineVersionFieldOptions = Partial<
  FieldTypeConfig<CvcNccnGuidelineFieldProps>
>

export interface CvcNccnGuidelineFieldProps extends FormlyFieldProps {
  extraType?: CvcFormFieldExtraType
}

export interface CvcNccnGuidelineVersionFieldConfig
  extends FormlyFieldConfig<CvcNccnGuidelineFieldProps> {
  type: 'nccn-guideline-version-input' | Type<CvcNccnGuidelineVersionField>
}

const DEFAULT_DESCRIPTION =
  "Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>"

@Component({
  selector: 'cvc-nccn-guideline-version-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, FormlyModule, NzInputModule],
  template: `
    <input
      nz-input
      placeholder="ex: 1.2023"
      [formControl]="formControl"
      [formlyAttributes]="field" />
  `,
})
export class CvcNccnGuidelineVersionField extends CvcFieldBase<
  Maybe<string>,
  FieldTypeConfig<CvcNccnGuidelineFieldProps>
> {
  defaultOptions: CvcNccnGuidelineVersionFieldOptions = {
    validators: {
      nccnVersionNumber: {
        expression: (c: AbstractControl) => {
          if (!c.value) return true
          if (!/^\d{1,2}\.\d{4}$/.test(c.value)) return false
          const year = +c.value.split('.')[1]
          return year >= 2000 && year <= new Date().getFullYear() + 1
        },
        message: (_: any, field: FormlyFieldConfig) =>
          `"${field.formControl?.value}" does not fit the format Version.Year`,
      },
    },
    props: {
      label: 'NCCN Guideline Version',
      extraType: 'description',
      description: DEFAULT_DESCRIPTION,
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.connectGuideline()
  }

  /** see the FDA checkboxes: no barrier needed, effects flush late */
  private connectGuideline(): void {
    const guideline = this.state?.fields.nccnGuidelineId
    if (!guideline) return
    effect(
      () => {
        const guidelineId: Maybe<number> = guideline()
        if (guidelineId) {
          this.props.disabled = false
          this.props.required = true
          this.props.extraType = 'description'
          this.props.description = DEFAULT_DESCRIPTION
        } else {
          this.props.disabled = true
          this.props.required = false
          this.props.extraType = 'prompt'
          this.props.description =
            'NCCN Guideline Version is only required when NCCN Guideline is specified.'
          this.formControl.setValue(undefined)
        }
      },
      { injector: this.injector }
    )
  }
}
