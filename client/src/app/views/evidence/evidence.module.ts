import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceRoutingModule } from './evidence-routing.module';
import { EvidenceComponent } from './evidence.component';
import { EvidenceHomeModule } from './evidence-home/evidence-home.module';
import { EvidenceDetailModule } from './evidence-detail/evidence-detail.module';
import { EvidenceSummaryModule } from './evidence-summary/evidence-summary.module';
import { EvidenceCommentsModule } from './evidence-comments/evidence-comments.module';
import { EvidenceRevisionsModule } from './evidence-revisions/evidence-revisions.module';
import { EvidenceFlagsModule } from './evidence-flags/evidence-flags.module';

@NgModule({
  declarations: [
    EvidenceComponent,
  ],
  imports: [
    CommonModule,
    EvidenceFlagsModule,
    EvidenceRevisionsModule,
    EvidenceCommentsModule,
    EvidenceSummaryModule,
    EvidenceDetailModule,
    EvidenceRoutingModule,
    EvidenceHomeModule,
  ],
  exports: [
    EvidenceComponent,
  ]
})
export class EvidenceModule { }
