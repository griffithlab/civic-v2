import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';

@NgModule({
  declarations: [ClinicalTrialsSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    CvcEvidenceTableModule,
    CvcSourcesTableModule,
  ]
})
export class ClinicalTrialsSummaryModule { }
