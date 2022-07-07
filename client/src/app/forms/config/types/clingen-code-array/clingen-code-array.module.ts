import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { clingenCodeArrayTypeOption } from './clingen-code-array.type';
import { CvcClingenCodeSelectTypeModule } from '../clingen-code-select/clingen-code-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({types: [clingenCodeArrayTypeOption]}),
    CvcMultiFieldTypeModule,
    CvcClingenCodeSelectTypeModule
  ],
})
export class CvcClingenCodeArrayTypeModule { }
