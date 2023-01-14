import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import {
  edOptionValidationMessage,
  edOptionValidator,
  evidenceDirectionSelectTypeOption,
} from './evidence-direction-select.type';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forChild({
      types: [evidenceDirectionSelectTypeOption],
      validators: [edOptionValidator],
      validationMessages: [edOptionValidationMessage],
    }),
  ],
})
export class CvcEvidenceDirectionSelectModule {}
