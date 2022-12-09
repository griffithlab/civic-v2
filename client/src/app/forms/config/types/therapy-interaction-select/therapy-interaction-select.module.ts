import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { FormlyModule } from '@ngx-formly/core';
import { therapyInteractionSelectTypeOption } from './therapy-interaction-select.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [therapyInteractionSelectTypeOption] })
  ]
})
export class CvcTherapyInteractionSelectTypeModule { }
