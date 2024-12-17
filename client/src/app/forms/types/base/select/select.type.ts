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

export interface CvcBaseSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean
}

export interface CvcBaseSelectFieldConfig
  extends FormlyFieldConfig<CvcBaseSelectFieldProps> {
  type: 'base-select' | Type<CvcBaseSelectField>
}

const BaseSelectMixin =
  mixin(
    BaseFieldType<
      FieldTypeConfig<CvcBaseSelectFieldProps>,
      Maybe<string | number>
    >()
  )
@Component({
  selector: 'cvc-base-select',
  templateUrl: './select.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcBaseSelectField
  extends BaseSelectMixin
  implements AfterViewInit
{
  defaultOptions: Partial<FieldTypeConfig<CvcBaseSelectFieldProps>> = {
    props: {
      isMultiSelect: false,
    },
  }
  constructor() {
    super()
  }
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
