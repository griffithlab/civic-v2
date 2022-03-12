import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormFieldWrapperBase } from './cvc-form-field.wrapper';

@NgModule({
  declarations: [FormFieldWrapperBase],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'cvc-form-field',
          component: FormFieldWrapperBase,
        },
      ],
    }),
  ],
})
export class CvcFormFieldWrapperModule {}
