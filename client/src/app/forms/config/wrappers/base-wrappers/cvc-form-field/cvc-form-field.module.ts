import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CvcFormFieldWrapper } from './cvc-form-field.wrapper';

@NgModule({
  declarations: [CvcFormFieldWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'cvc-form-field',
          component: CvcFormFieldWrapper,
        },
      ],
    }),
  ],
})
export class CvcFormFieldWrapperModule {}
