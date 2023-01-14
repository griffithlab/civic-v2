import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { CvcTherapyInputTypeModule } from '../therapy-input/therapy-input.module';
import { CvcMultiFieldTypeModule } from '../multi-field/multi-field.module';
import { therapyArrayTypeOption } from './therapies-array.type';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({ types: [therapyArrayTypeOption] }),
    CvcTherapyInputTypeModule,
    CvcMultiFieldTypeModule,
  ],
})
export class CvcTherapyArrayTypeModule {}
