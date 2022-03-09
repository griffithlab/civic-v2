import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ampLevelInputTypeOption } from './amp-level-input.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [ampLevelInputTypeOption],
    }),

  ]
})
export class CvcAmpLevelInputTypeModule { }
