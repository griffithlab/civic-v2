import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@libs/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {
  clinicalSignificanceSelectTypeOption,
  csOptionValidationMessage,
  csOptionValidator
} from './clinical-significance-select.type';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [clinicalSignificanceSelectTypeOption],
      validators:  [csOptionValidator],
      validationMessages: [csOptionValidationMessage]
    }),
  ]
})
export class CvcClinicalSignificanceSelectModule { }
