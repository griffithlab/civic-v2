import {
  Component,
  ChangeDetectionStrategy,
  Type,
  AfterViewInit,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { filter, take } from 'rxjs'
import mixin from 'ts-mixin-extended'

export type CvcFdaRegulatoryApprovalCheckboxFieldOptions = Partial<
  FieldTypeConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps>
>
export interface CvcFdaRegulatoryApprovalCheckboxFieldProps
  extends FormlyFieldProps {
  indeterminate?: boolean
  extraType?: string
  description?: string
  disabled?: boolean
}

export interface FormlyCheckboxFieldConfig
  extends FormlyFieldConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps> {
  type: 'checkbox' | Type<CvcFdaRegulatoryApprovalCheckboxField>
}

const FdaRegulatoryApprovalMixin =
  mixin(
    BaseFieldType<
      FieldTypeConfig<CvcFdaRegulatoryApprovalCheckboxFieldProps>,
      Maybe<string>
    >()
  )

@Component({
  selector: 'cvc-fda-regulatory-approval-checkbox',
  templateUrl: './fda-regulatory-approval-checkbox.type.html',
  styleUrls: ['./fda-regulatory-approval-checkbox.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFdaRegulatoryApprovalCheckboxField
  extends FdaRegulatoryApprovalMixin
  implements AfterViewInit
{
  defaultDescription =
    "Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)"
  override defaultOptions = {
    props: {
      hideLabel: false,
      label: 'FDA Regulatory Approval',
      description: this.defaultDescription,
    },
  }

  ngAfterViewInit(): void {
    this.configureBaseField()

    if (!this.state) {
      return
    }

    if (this.state.formReady$) {
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
    this.state?.requires.allowsFdaApproval$
      .pipe(untilDestroyed(this))
      .subscribe((allow: Maybe<boolean>) => {
        if (allow) {
          this.props.disabled = false
          this.props.extraType = 'description'
          this.props.description = this.defaultDescription
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
