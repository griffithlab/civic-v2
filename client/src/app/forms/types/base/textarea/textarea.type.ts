import { TextFieldModule } from '@angular/cdk/text-field'
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
import { NzInputModule } from 'ng-zorro-antd/input'

// zorro 22 removed textarea[nzAutosize] (and its AutoSizeType) in favor
// of the CDK's cdkTextareaAutosize; shape retained for field configs
export type AutoSizeType = { minRows?: number; maxRows?: number }

export type CvcTextareaFieldOptions = Partial<
  FieldTypeConfig<CvcTextAreaFieldProps>
>

export interface CvcTextAreaFieldProps extends FormlyFieldProps {
  rows?: number
  autosize: string | boolean | AutoSizeType
}

export interface FormlyTextAreaFieldConfig
  extends FormlyFieldConfig<CvcTextAreaFieldProps> {
  type: 'base-textarea' | Type<CvcTextareaField>
}

@Component({
  selector: 'formly-field-nz-textarea',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, FormlyModule, NzInputModule, TextFieldModule],
  templateUrl: './textarea.type.html',
})
export class CvcTextareaField extends CvcFieldBase<
  Maybe<string>,
  FieldTypeConfig<CvcTextAreaFieldProps>
> {
  defaultOptions: CvcTextareaFieldOptions = {
    props: {
      autosize: false,
    },
  }

  get autosizeMinRows(): number | undefined {
    const autosize = this.props.autosize
    return typeof autosize === 'object' ? autosize.minRows : undefined
  }

  get autosizeMaxRows(): number | undefined {
    const autosize = this.props.autosize
    return typeof autosize === 'object' ? autosize.maxRows : undefined
  }
}
