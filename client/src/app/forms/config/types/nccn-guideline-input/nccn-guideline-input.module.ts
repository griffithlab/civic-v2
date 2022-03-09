import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { nccnGuidelineInputTypeOption } from './nccn-guideline-input.type';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({types: [nccnGuidelineInputTypeOption]}),
  ]
})
export class CvcNccnGuidelineInputTypeModule { }
