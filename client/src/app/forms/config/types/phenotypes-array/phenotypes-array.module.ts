import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@forms/config/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcPhenotypeInputTypeModule } from '../phenotype-input/phenotype-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { phenotypeArrayTypeOption } from './phenotypes-array.type';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({types: [phenotypeArrayTypeOption]}),
    CvcPhenotypeInputTypeModule,
    CvcMultiFieldTypeModule,
  ]
})
export class CvcPhenotypeArrayTypeModule { }
