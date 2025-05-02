import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberLegacyModule } from 'ng-zorro-antd/input-number-legacy'
import { CvcBaseInputField } from './input.type'

@NgModule({
  declarations: [CvcBaseInputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberLegacyModule,

    FormlyModule.forChild({
      types: [
        {
          name: 'base-input',
          component: CvcBaseInputField,
          wrappers: ['form-field'],
        },
        { name: 'base-string', extends: 'base-input' },
        {
          name: 'base-number',
          extends: 'base-input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
        {
          name: 'base-integer',
          extends: 'base-input',
          defaultOptions: {
            props: {
              type: 'number',
            },
          },
        },
      ],
    }),
  ],
})
export class CvcBaseInputModule {}
