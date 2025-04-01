import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SourcesRoutingModule } from './sources-routing.module'
import { SourcesView } from './sources.view'

import { SourcesHomeModule } from './sources-home/sources-home.module'
import { SourcesDetailModule } from './sources-detail/sources-detail.module'
import { SourcesSummaryModule } from './sources-detail/sources-summary/sources-summary.module'
import { SourceAddModule } from './source-add/source-add.module'
import { SourceAddRelatedModule } from './source-add-related/source-add-related.module'
import { RouterModule } from '@angular/router'
import { SourcesCommentsModule } from './sources-detail/sources-comments/sources-comments.module'

@NgModule({
  declarations: [SourcesView],
  imports: [
    CommonModule,
    RouterModule,
    SourcesRoutingModule,
    SourcesHomeModule,
    SourcesDetailModule,
    SourcesSummaryModule,
    SourceAddModule,
    SourceAddRelatedModule,
    SourcesCommentsModule,
  ],
})
export class SourcesModule {}
