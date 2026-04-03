import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NzRadioModule } from 'ng-zorro-antd/radio'
import { CvcBaseRadioField } from './radio.type'
import { FormlyNzRadioModule } from '@ngx-formly/ng-zorro-antd/radio'
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field'
import { FormlySelectOptionsPipe } from '@ngx-formly/core/select'

@NgModule({
  declarations: [CvcBaseRadioField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRadioModule,
    FormlyNzFormFieldModule,
    FormlyNzRadioModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'base-radio',
          component: CvcBaseRadioField,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlySelectOptionsPipe,
  ],
})
export class CvcBaseRadioFieldModule {}
