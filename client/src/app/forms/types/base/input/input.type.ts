import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Type,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import mixin from 'ts-mixin-extended'
import { NzVariant } from 'ng-zorro-antd/core/types'
import { NzSelectSizeType } from 'ng-zorro-antd/select'

export interface CvcBaseInputFieldProps extends FormlyFieldProps {
  size: NzSelectSizeType
  variant: NzVariant
}

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
  defaultOptions: Partial<FieldTypeConfig<CvcBaseInputFieldProps>> = {
    props: {
      size: 'default',
      variant: 'outlined',
    },
  }
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
