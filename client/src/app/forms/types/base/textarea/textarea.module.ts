import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzInputModule } from 'ng-zorro-antd/input'
import { CvcTextareaField } from './textarea.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'base-textarea',
      component: CvcTextareaField,
      wrappers: ['form-field'],
    },
  ],
}

@NgModule({
  declarations: [CvcTextareaField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild(typeConfig),
    NzInputModule,
    CvcFormFieldWrapperModule,
  ],
  exports: [CvcTextareaField],
})
export class CvcBaseTextareaFieldModule {}
