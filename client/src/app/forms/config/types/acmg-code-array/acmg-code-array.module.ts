import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { acmgCodeArrayType } from './acmg-code-array.type';
import { FormlyModule } from '@ngx-formly/core';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { CvcAcmgCodeSelectTypeModule } from '../acmg-code-select/acmg-code-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({types: [acmgCodeArrayType]}),
    CvcMultiFieldTypeModule,
    CvcAcmgCodeSelectTypeModule,
  ]
})
export class CvcAcmgCodeArrayTypeModule { }
