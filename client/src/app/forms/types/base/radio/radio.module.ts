import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlySelectModule } from '@ngx-formly/core/select'

import { NzRadioModule } from 'ng-zorro-antd/radio'
import { CvcBaseRadioField } from './radio.type'

@NgModule({
  declarations: [CvcBaseRadioField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzRadioModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'radio',
          component: CvcBaseRadioField,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class CvcBaseRadioFieldModule {}
