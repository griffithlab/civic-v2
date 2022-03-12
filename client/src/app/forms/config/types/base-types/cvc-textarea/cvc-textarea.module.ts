import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NzInputModule } from 'ng-zorro-antd/input';

import { CvcFormFieldWrapperModule } from '@app/forms/config/wrappers/base-wrappers/cvc-form-field/cvc-form-field.module';
import { CvcTextareaType } from './cvc-textarea.type';

@NgModule({
  declarations: [CvcTextareaType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,

    CvcFormFieldWrapperModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'cvc-textarea',
          component: CvcTextareaType,
          wrappers: ['cvc-form-field'],
        },
      ],
    }),
  ],
})
export class CvcTextareaTypeModule {}
