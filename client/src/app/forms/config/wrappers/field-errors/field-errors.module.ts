import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import {
  FieldErrorsWrapper,
  FieldErrorsWrapperOption,
} from './field-errors.wrapper';

@NgModule({
  declarations: [FieldErrorsWrapper],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [FieldErrorsWrapperOption],
    }),
  ],
})
export class CvcFieldErrorsWrapper {}
