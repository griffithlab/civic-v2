import {
  ChangeDetectionStrategy,
  Component,
  Type,
  effect,
} from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'

export type CvcFdaRegulatoryApprovalCheckboxFieldOptions = Partial<
  FieldTypeConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps>
>

export interface CvcFdaRegulatoryApprovalCheckboxFieldProps
  extends FormlyFieldProps {
  indeterminate?: boolean
  extraType?: CvcFormFieldExtraType
}

export interface CvcFdaRegulatoryApprovalCheckboxFieldConfig
  extends FormlyFieldConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps> {
  type:
    | 'fda-regulatory-approval-checkbox'
    | Type<CvcFdaRegulatoryApprovalCheckboxField>
}

const DEFAULT_DESCRIPTION =
  "Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)"

@Component({
  selector: 'cvc-fda-regulatory-approval-checkbox',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, FormlyModule, NzCheckboxModule],
  templateUrl: './fda-regulatory-approval-checkbox.type.html',
})
export class CvcFdaRegulatoryApprovalCheckboxField extends CvcFieldBase<
  Maybe<boolean>,
  FieldTypeConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps>
> {
  defaultOptions: CvcFdaRegulatoryApprovalCheckboxFieldOptions = {
    props: {
      hideLabel: false,
      label: 'FDA Regulatory Approval',
      description: DEFAULT_DESCRIPTION,
    },
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.connectApproval()
  }

  /**
   * No readiness barrier: effects flush after every field's ngOnInit has
   * published, so the first run already sees the assertion type a revise form
   * loaded. That matters here because the `else` branch clears the control.
   */
  private connectApproval(): void {
    const allowsApproval = this.state?.requires.allowsFdaApproval
    if (!allowsApproval) return
    effect(
      () => {
        const allowed: Maybe<boolean> = allowsApproval()
        if (allowed) {
          this.props.disabled = false
          this.props.extraType = 'description'
          this.props.description = DEFAULT_DESCRIPTION
          // an unanswered checkbox on an assertion type that allows approval
          // means "no", not "unspecified"
          if (this.formControl.value === undefined) {
            this.formControl.setValue(false)
          }
        } else {
          this.props.disabled = true
          this.props.description =
            'FDA Regulatory Approval does not apply to this Assertion Type'
          this.formControl.setValue(undefined)
        }
      },
      { injector: this.injector }
    )
  }
}
