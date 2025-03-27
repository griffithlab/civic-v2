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
import { AutoSizeType } from 'ng-zorro-antd/input'
import mixin from 'ts-mixin-extended'

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

const TextareaMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcTextAreaFieldProps>, Maybe<string>>()
)

@Component({
    selector: 'formly-field-nz-textarea',
    templateUrl: './textarea.type.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
  ngAfterViewInit(): void {
    this.configureBaseField()
  }
}
