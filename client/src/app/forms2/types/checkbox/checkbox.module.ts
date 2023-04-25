import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms2/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcCheckboxField } from './checkbox.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'checkbox',
      wrappers: ['form-field'],
      component: CvcCheckboxField,
    },
  ],
}

@NgModule({
  declarations: [CvcCheckboxField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
  ],
})
export class CvcCheckboxModule {}
