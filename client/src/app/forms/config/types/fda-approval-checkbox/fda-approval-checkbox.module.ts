import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { fdaApprovalCheckboxTypeOption } from './fda-approval-checkbox.type';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({types: [fdaApprovalCheckboxTypeOption]}),
  ]
})
export class CvcFdaApprovalCheckboxTypeModule { }
