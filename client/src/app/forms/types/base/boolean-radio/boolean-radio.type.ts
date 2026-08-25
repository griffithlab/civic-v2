import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import mixin from 'ts-mixin-extended'

export interface CvcBaseBooleanRadioFieldProps extends FormlyFieldProps {
  labels: { true: string; false: string }
}

export interface CvcBaseBooleanRadioFieldConfig
  extends FormlyFieldConfig<CvcBaseBooleanRadioFieldProps> {
  type: 'base-boolean-radio' | Type<CvcBaseBooleanRadioField>
}

const BaseBooleanRadioMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcBaseBooleanRadioFieldProps>,
    Maybe<boolean>
  >()
)

@Component({
  selector: 'cvc-base-boolean-radio',
  templateUrl: './boolean-radio.type.html',
  styleUrls: ['./boolean-radio.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcBaseBooleanRadioField extends BaseBooleanRadioMixin {
  override defaultOptions = {
    props: {
      labels: { true: 'Yes', false: 'No' },
      hideLabel: true,
    },
  }
}
