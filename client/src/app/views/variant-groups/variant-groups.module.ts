import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsRoutingModule } from './variant-groups-routing.module';
import { VariantGroupsView } from './variant-groups.view';
import { VariantGroupsHomeModule } from './variant-groups-home/variant-groups-home.module';
import { VariantGroupsSummaryModule } from './variant-groups-detail/variant-groups-summary/variant-groups-summary.module';
import { VariantGroupsDetailModule } from './variant-groups-detail/variant-groups-detail.module';
import { VariantGroupsCommentsModule } from './variant-groups-detail/variant-groups-comments/variant-groups-comments.module';
import { VariantGroupsFlagsModule } from './variant-groups-detail/variant-groups-flags/variant-groups-flags.module';
import { VariantGroupsRevisionsModule } from './variant-groups-detail/variant-groups-revisions/variant-groups-revisions.module';

@NgModule({
  declarations: [
    VariantGroupsView,
  ],
  imports: [
    CommonModule,
    VariantGroupsRoutingModule,
    VariantGroupsHomeModule,

    VariantGroupsDetailModule,
    VariantGroupsSummaryModule,
    VariantGroupsCommentsModule,
    VariantGroupsFlagsModule,
    VariantGroupsRevisionsModule,

  ],
  exports: [
    VariantGroupsView
  ]
})
export class VariantGroupsModule { }
