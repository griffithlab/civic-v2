import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { fdaTestCheckboxTypeOption } from './fda-test-checkbox.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({types: [fdaTestCheckboxTypeOption]}),
  ]
})
export class CvcFdaTestCheckboxTypeModule { }
