import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { geneSelectTypeOption } from './gene-select.type';
import { CvcFormsModule } from '@app/forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    CvcFormsModule,
    FormlyModule.forChild({types: [geneSelectTypeOption]}),
  ]
})
export class CvcGeneSelectModule { }
