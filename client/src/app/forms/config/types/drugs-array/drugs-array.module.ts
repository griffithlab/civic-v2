import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CvcDrugInputTypeModule } from '../drug-input/drug-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { drugArrayTypeOption } from './drugs-array.type';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({types: [drugArrayTypeOption]}),
    CvcDrugInputTypeModule,
    CvcMultiFieldTypeModule,
  ]
})
export class CvcDrugArrayTypeModule { }
