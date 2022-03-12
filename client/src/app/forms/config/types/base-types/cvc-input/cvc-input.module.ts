import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { CvcInputType } from './cvc-input.type';

@NgModule({
  declarations: [CvcInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzInputNumberModule,

    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cvc-input',
          component: CvcInputType,
          wrappers: ['cvc-form-field'],
        },
        { name: 'cvc-string', extends: 'input' },
        {
          name: 'cvc-number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {
          name: 'cvc-integer',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
      ],
    }),
  ],
})
export class FormlyNzInputModule {}
