import { Component, ChangeDetectionStrategy, Type, AfterViewInit } from '@angular/core';
import { BaseFieldType } from '@app/forms/mixins/base/base-field';
import { Maybe } from '@app/generated/civic.apollo';
import { untilDestroyed } from '@ngneat/until-destroy';
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field';
import { filter, take } from 'rxjs';
import mixin from 'ts-mixin-extended'

export type CvcFdaCompanionTestCheckboxFieldOptions = Partial<
  FieldTypeConfig<CvcFdaCompanionTestCheckboxFieldProps>
>
export interface CvcFdaCompanionTestCheckboxFieldProps extends FormlyFieldProps {
  indeterminate?: boolean;
  extraType?: string
  description?: string
  disabled?: boolean
}

export interface FormlyCheckboxFieldConfig extends FormlyFieldConfig<CvcFdaCompanionTestCheckboxFieldProps> {
  type: 'checkbox' | Type<CvcFdaCompanionTestCheckboxField>;
}

const FdaCompanionTestMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcFdaCompanionTestCheckboxFieldProps>, Maybe<string>>()
)

@Component({
    selector: 'cvc-fda-companion-test-checkbox',
    templateUrl: './fda-companion-test-checkbox.type.html',
    styleUrls: ['./fda-companion-test-checkbox.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcFdaCompanionTestCheckboxField extends FdaCompanionTestMixin implements AfterViewInit {
  defaultDescription = 'Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).'
  override defaultOptions = {
    props: {
      hideLabel: false,
      label: "FDA Companion Test",
      description: this.defaultDescription
    },
  };

  ngAfterViewInit(): void {
    this.configureBaseField()
    if(!this.state) { return }

    if(this.state.formReady$) {
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
    this.state?.fields.fdaRegulatoryApproval$.pipe(
      untilDestroyed(this)
    ).subscribe((approval: Maybe<boolean>) => {
      if(approval) {
        this.props.disabled = false
        this.props.extraType = 'description'
        this.props.description = this.defaultDescription
        if(this.formControl.value === undefined) {
          this.formControl.setValue(false)
        }
      } else {
        this.props.disabled = true
        this.props.description = 'FDA Companion Test only applies when Regulatory Approval is selected'
        this.formControl.setValue(undefined)
      }
    })

  }
}
