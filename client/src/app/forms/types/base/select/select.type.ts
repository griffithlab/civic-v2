import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { AsyncPipe } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzVariant } from 'ng-zorro-antd/core/types'
import { NzSelectModule, NzSelectSizeType } from 'ng-zorro-antd/select'

export interface CvcBaseSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean
  size?: NzSelectSizeType
  variant?: NzVariant
  optionHeightPx?: number
  optionOverflowSize?: number
}

export interface CvcBaseSelectFieldConfig
  extends FormlyFieldConfig<CvcBaseSelectFieldProps> {
  type: 'base-select' | Type<CvcBaseSelectField>
}

@Component({
  selector: 'cvc-base-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    FormlySelectModule,
    NzSelectModule,
    AsyncPipe,
  ],
  templateUrl: './select.type.html',
})
export class CvcBaseSelectField extends CvcFieldBase<
  Maybe<string | number>,
  FieldTypeConfig<CvcBaseSelectFieldProps>
> {
  defaultOptions: Partial<FieldTypeConfig<CvcBaseSelectFieldProps>> = {
    props: {
      isMultiSelect: false,
      size: 'default',
      variant: 'outlined',
    },
  }
}
