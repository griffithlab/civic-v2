import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { evidenceLevelSelectTypeOption } from './evidence-level-select.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({ types: [evidenceLevelSelectTypeOption] }),
  ],
})
export class CvcEvidenceLevelSelectModule {}
