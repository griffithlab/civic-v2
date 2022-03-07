import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcDrugInputTypeModule } from '../drug-input/drug-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { drugArrayTypeOption } from './drugs-array.type';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({types: [drugArrayTypeOption]}),
    CvcDrugInputTypeModule,
    CvcMultiFieldTypeModule,
  ]
})
export class CvcDrugArrayTypeModule { }
