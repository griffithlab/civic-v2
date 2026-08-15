import { ChangeDetectionStrategy, Component, Type } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFieldBase } from '@app/forms/select'
import { Maybe } from '@app/generated/civic.apollo.types'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import { NzVariant } from 'ng-zorro-antd/core/types'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzSelectSizeType } from 'ng-zorro-antd/select'

export interface CvcBaseInputFieldProps extends FormlyFieldProps {
  size?: NzSelectSizeType
  variant?: NzVariant
}

export interface CvcBaseInputFieldConfig
  extends FormlyFieldConfig<CvcBaseInputFieldProps> {
  type: 'base-input' | Type<CvcBaseInputField>
}

@Component({
  selector: 'cvc-base-input',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzInputModule,
    NzInputNumberModule,
  ],
  templateUrl: './input.type.html',
})
export class CvcBaseInputField extends CvcFieldBase<
  Maybe<string | number>,
  FieldTypeConfig<CvcBaseInputFieldProps>
> {
  defaultOptions: Partial<FieldTypeConfig<CvcBaseInputFieldProps>> = {
    props: {
      size: 'default',
      variant: 'outlined',
    },
  }
}
