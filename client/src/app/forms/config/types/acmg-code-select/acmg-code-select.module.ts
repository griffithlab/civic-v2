import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { acmgCodeSelectType } from './acmg-code-select.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({types: [acmgCodeSelectType],}),
  ]
})
export class CvcAcmgCodeSelectTypeModule { }
