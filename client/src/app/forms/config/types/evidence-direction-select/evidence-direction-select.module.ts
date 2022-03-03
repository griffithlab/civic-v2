import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { edOptionValidationMessage, edOptionValidator, evidenceDirectionSelectTypeOption } from './evidence-direction-select.type';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [evidenceDirectionSelectTypeOption],
      validators: [edOptionValidator],
      validationMessages: [edOptionValidationMessage]
    }),
  ]
})
export class CvcEvidenceDirectionSelectModule { }
