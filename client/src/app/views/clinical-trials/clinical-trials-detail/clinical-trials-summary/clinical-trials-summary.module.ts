import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [ClinicalTrialsSummaryComponent],
  imports: [
    CommonModule,
    NzSpaceModule,
    NzIconModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcSourcesTableModule,
  ]
})
export class ClinicalTrialsSummaryModule { }
