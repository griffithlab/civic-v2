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

export interface CvcBaseInputFieldProps extends FormlyFieldProps {}

export interface CvcBaseInputFieldConfig
  extends FormlyFieldConfig<CvcBaseInputFieldProps> {
  type: 'base-input' | Type<CvcBaseInputField>
}

const BaseInputMixin =
  mixin(
    BaseFieldType<
      FieldTypeConfig<CvcBaseInputFieldProps>,
      Maybe<string | number>
    >()
  )
@Component({
  selector: 'cvc-base-input',
  templateUrl: './input.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcBaseInputField extends BaseInputMixin implements AfterViewInit {
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
