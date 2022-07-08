import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary.component';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [ClinicalTrialsSummaryComponent],
  imports: [
    CommonModule,
    NzGridModule,
    CvcEvidenceTableModule,
    CvcSourcesTableModule,
  ]
})
export class ClinicalTrialsSummaryModule { }
