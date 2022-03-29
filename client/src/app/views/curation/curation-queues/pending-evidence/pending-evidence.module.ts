import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingEvidencePage } from './pending-evidence.page';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';



@NgModule({
  declarations: [
    PendingEvidencePage
  ],
  imports: [
    CommonModule,
    CvcEvidenceTableModule
  ]
})
export class PendingEvidenceModule { }
