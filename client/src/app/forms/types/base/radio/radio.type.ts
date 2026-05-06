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

export interface CvcBaseRadioFieldProps extends FormlyFieldProps {}

export interface CvcBaseRadioFieldConfig
  extends FormlyFieldConfig<CvcBaseRadioFieldProps> {
  type: 'base-radio' | Type<CvcBaseRadioField>
}

const BaseRadioMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcBaseRadioFieldProps>,
    Maybe<number | string | boolean>
  >()
)
@Component({
  selector: 'cvc-base-radio',
  templateUrl: './radio.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcBaseRadioField extends BaseRadioMixin implements AfterViewInit {
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
