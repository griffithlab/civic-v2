import {
  Component,
  ChangeDetectionStrategy,
  Type,
  AfterViewInit,
} from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo.types'
import { FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import mixin from 'ts-mixin-extended'

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

export interface FormlyTextAreaFieldConfig extends FormlyFieldConfig<CvcTextAreaFieldProps> {
  type: 'base-textarea' | Type<CvcTextareaField>
}

const TextareaMixin =
  mixin(BaseFieldType<FieldTypeConfig<CvcTextAreaFieldProps>, Maybe<string>>())

@Component({
  selector: 'formly-field-nz-textarea',
  templateUrl: './textarea.type.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcTextareaField extends TextareaMixin implements AfterViewInit {
  defaultOptions: CvcTextareaFieldOptions = {
    props: {
      autosize: false,
    },
  }
  constructor() {
    super()
  }

  get autosizeMinRows(): number | undefined {
    const autosize = this.props.autosize
    return typeof autosize === 'object' ? autosize.minRows : undefined
  }

  get autosizeMaxRows(): number | undefined {
    const autosize = this.props.autosize
    return typeof autosize === 'object' ? autosize.maxRows : undefined
  }

  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
