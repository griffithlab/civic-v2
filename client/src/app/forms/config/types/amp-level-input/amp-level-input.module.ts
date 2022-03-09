import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { ampLevelInputType } from './amp-level-input.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [ampLevelInputType],
    }),

  ]
})
export class CvcAmpLevelInputTypeModule { }
