import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
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
import { filter, take } from 'rxjs'

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
    if (!this.state) return

    if (!this.state.formReady$) {
      this.connectApproval()
      return
    }
    // the form component populates its model, then announces formReady$
    this.state.formReady$
      .pipe(filter(Boolean), take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.connectApproval())
  }

  private connectApproval(): void {
    this.state?.requires.allowsFdaApproval$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((allowed: Maybe<boolean>) => {
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
      })
  }
}
