import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyNzFormFieldModule } from '@forms/config/ng-zorro-antd/form-field';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcSourceInputTypeModule } from '../source-input/source-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { sourceArrayTypeOption } from './source-array.type';
import { CvcFieldListTypeModule } from '../field-list/field-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    FormlyNzFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({types: [sourceArrayTypeOption]}),
    CvcSourceInputTypeModule,
    CvcMultiFieldTypeModule,
    CvcFieldListTypeModule,
  ]
})
export class CvcSourceArrayTypeModule { }
