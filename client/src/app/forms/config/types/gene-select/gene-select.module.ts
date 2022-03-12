import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { geneSelectTypeOption } from './gene-select.type';
import { CvcSelectTypeModule } from '../base-types/cvc-select/cvc-select.module';
import { CvcFormFieldWrapperModule } from '../../wrappers/base-wrappers/cvc-form-field/cvc-form-field.module';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({types: [geneSelectTypeOption]}),
    CvcSelectTypeModule,
    CvcFormFieldWrapperModule,
  ]
})
export class CvcGeneSelectModule { }
