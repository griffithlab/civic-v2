import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcBaseCheckboxField } from './checkbox.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'base-checkbox',
      wrappers: ['form-field'],
      component: CvcBaseCheckboxField,
    },
  ],
}

@NgModule({
  declarations: [CvcBaseCheckboxField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
  ],
})
export class CvcBaseCheckboxModule {}
