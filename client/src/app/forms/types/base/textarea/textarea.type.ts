import { Component, ChangeDetectionStrategy, Type } from '@angular/core'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { Maybe } from '@app/generated/civic.apollo'
import { FieldType, FieldTypeConfig, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyFieldProps } from '@ngx-formly/ng-zorro-antd/form-field'
import mixin from 'ts-mixin-extended'

export type CvcTextareaFieldOptions = Partial<
  FieldTypeConfig<CvcTextAreaFieldProps>
>

export interface CvcTextAreaFieldProps extends FormlyFieldProps {}

export interface FormlyTextAreaFieldConfig
  extends FormlyFieldConfig<CvcTextAreaFieldProps> {
  type: 'textarea' | Type<CvcTextareaField>
}

const TextareaMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcTextAreaFieldProps>, Maybe<string>>()
)

@Component({
  selector: 'formly-field-nz-textarea',
  template: `
    <textarea
      nz-input
      [rows]="props.rows ? props.rows : 2"
      [formControl]="formControl"
      [formlyAttributes]="field"></textarea>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcTextareaField extends TextareaMixin {
 defaultOptions: CvcTextareaFieldOptions = {
   props: {
     label: 'TEXTAREA!'
   }
 };

}
