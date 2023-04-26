import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcSourceSuggestionsTableModule } from '@app/components/source-suggestions/source-suggestions-table/source-suggestions-table.module';
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module';
import { LetModule, PushModule, } from '@ngrx/component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SourcesSummaryPage } from './sources-summary.page';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';


@NgModule({
  declarations: [SourcesSummaryPage],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzGridModule,
    NzSpaceModule,
    NzGridModule,
    NzSpaceModule,
    NzTypographyModule,
    NzIconModule,
    NzToolTipModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcAutoHeightDivModule,
    CvcEvidenceTableModule,
    CvcSourceSuggestionsTableModule,
    CvcClinicalTrialTagModule,
  ],
})
export class SourcesSummaryModule {}
