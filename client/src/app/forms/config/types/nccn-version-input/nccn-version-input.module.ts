import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nccnVersionInputTypeOption } from './nccn-version-input.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({types: [nccnVersionInputTypeOption]}),
  ]
})
export class CvcNccnVersionInputTypeModule { }
