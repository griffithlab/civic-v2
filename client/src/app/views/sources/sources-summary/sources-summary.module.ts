import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { SourcesSummaryComponent } from './sources-summary.component';

@NgModule({
  declarations: [SourcesSummaryComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzGridModule,
    CvcEntityTableCardModule,
    CvcEvidenceTableModule,
    CvcSourceSuggestionsTableModule,
    CvcClinicalTrialTagModule,
  ]
})
export class SourcesSummaryModule { }
