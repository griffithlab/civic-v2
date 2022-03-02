import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import {
  clinicalSignificanceSelectTypeOption,
  optionValidationMessage,
  optionValidator,
} from './clinical-significance-select.type';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';

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
      validators:  [optionValidator],
      validationMessages: [optionValidationMessage]
    }),
  ]
})
export class CvcClinicalSignificanceSelectModule { }
