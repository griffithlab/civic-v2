import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyNzFormFieldModule } from '@ngx-formly/ng-zorro-antd/form-field';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import {
  DuplicateEvidenceWarningComponent,
  DuplicateEvidenceWarningType,
} from './duplicate-evidence-warning';

@NgModule({
  declarations: [DuplicateEvidenceWarningComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    FormlyNzFormFieldModule,
    FormlyModule.forChild({
      types: [DuplicateEvidenceWarningType],
    }),
    NzAlertModule,
    NzTypographyModule,
    CvcEvidenceTableModule,
  ],
  exports: [DuplicateEvidenceWarningComponent],
})
export class CvcDuplicateEvidenceWarningModule {}
