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
import { NzSizeLDSType } from 'ng-zorro-antd/core/types'
import { FormlySelectOption } from '@ngx-formly/core/select'

export interface CvcBaseRadioFieldProps extends FormlyFieldProps {
  size: NzSizeLDSType
  type: 'radio' | 'button'
  options: FormlySelectOption[]
}

export interface CvcBaseRadioFieldConfig
  extends FormlyFieldConfig<CvcBaseRadioFieldProps> {
  type: 'base-radio' | Type<CvcBaseRadioField>
}

const BaseRadioMixin =
  mixin(
    BaseFieldType<
      FieldTypeConfig<CvcBaseRadioFieldProps>,
      Maybe<number | string | boolean>
    >()
  )
@Component({
  selector: 'cvc-base-radio',
  templateUrl: './radio.type.html',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcBaseRadioField extends BaseRadioMixin implements AfterViewInit {
  defaultOptions: Partial<FieldTypeConfig<CvcBaseRadioFieldProps>> = {
    props: {
      size: 'default',
      type: 'radio',
      options: [],
    },
  }
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
