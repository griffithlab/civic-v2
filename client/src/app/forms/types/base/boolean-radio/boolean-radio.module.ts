import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CvcFormFieldWrapperModule } from '@app/forms/wrappers/form-field/form-field.module'
import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { CvcBaseBooleanRadioField } from './boolean-radio.type'

const typeConfig: ConfigOption = {
  types: [
    {
      name: 'base-boolean-radio',
      wrappers: ['form-field'],
      component: CvcBaseBooleanRadioField,
    },
  ],
}

@NgModule({
  declarations: [CvcBaseBooleanRadioField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRadioModule,
    FormlyModule.forChild(typeConfig),
    CvcFormFieldWrapperModule,
  ],
})
export class CvcBaseBooleanRadioModule {}
