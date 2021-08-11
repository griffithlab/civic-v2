import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedComponentsModule } from '@app/components/shared/shared-components.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { ClinicalTrialsRoutingModule } from './clinical-trials-routing.module';
import { ClinicalTrialsComponent } from './clinical-trials.component';
import { ClinicalTrialsDetailComponent } from './clinical-trials-detail/clinical-trials-detail.component';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary/clinical-trials-summary.component';
import { SourcesModule } from '../sources/sources.module';
import { ClinicalTrialsHomeModule } from './clinical-trials-home/clinical-trials-home.module';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcEntityTableCardModule } from '@app/components/shared/entity-table-card/entity-table-card.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';

@NgModule({
  declarations: [
    ClinicalTrialsComponent,
    ClinicalTrialsDetailComponent,
    ClinicalTrialsSummaryComponent,
  ],
  imports: [
    CommonModule,
    ClinicalTrialsRoutingModule,
    ClinicalTrialsHomeModule,
    CvcSourcesTableModule,
    CvcEvidenceTableModule,
    CvcEntityTableCardModule,
    CvcLinkTagModule,
    IconsProviderModule,
    NzTableModule,
    SharedComponentsModule,
    NzPageHeaderModule,
    ReactiveComponentModule,
    NzGridModule,
    NzToolTipModule,
    NzSpaceModule,
    SourcesModule,
  ],
})
export class ClinicalTrialsModule {}
