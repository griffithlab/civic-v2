import {
  Component,
  ChangeDetectionStrategy,
  Type,
  AfterViewInit,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import mixin from 'ts-mixin-extended'

export type CvcBaseCheckboxFieldOptions = Partial<
  FieldTypeConfig<CvcBaseCheckboxFieldProps>
>
export interface CvcBaseCheckboxFieldProps extends FormlyFieldProps {
  indeterminate?: boolean
}

export interface FormlyCheckboxFieldConfig
  extends FormlyFieldConfig<CvcBaseCheckboxFieldProps> {
  type: 'checkbox' | Type<CvcBaseCheckboxField>
}

const BaseCheckboxMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcBaseCheckboxFieldProps>, Maybe<boolean>>()
)
@Component({
    selector: 'cvc-checkbox',
    templateUrl: './checkbox.type.html',
    styleUrls: ['./checkbox.type.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CvcBaseCheckboxField
  extends BaseCheckboxMixin
  implements AfterViewInit
{
  override defaultOptions = {
    props: {
      indeterminate: true,
      hideLabel: true,
    },
  }

  ngAfterViewInit(): void {
    console.log(this.props)
  }
}
