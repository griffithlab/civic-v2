import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariantGroupsDetailView } from './variant-groups-detail.view';
import { VariantGroupsCommentsModule } from './variant-groups-comments/variant-groups-comments.module';
import { VariantGroupsCommentsPage } from './variant-groups-comments/variant-groups-comments.page';
import { VariantGroupsFlagsModule } from './variant-groups-flags/variant-groups-flags.module';
import { VariantGroupsFlagsPage } from './variant-groups-flags/variant-groups-flags.page';
import { VariantGroupsRevisionsModule } from './variant-groups-revisions/variant-groups-revisions.module';
import { VariantGroupsRevisionsPage } from './variant-groups-revisions/variant-groups-revisions.page';
import { VariantGroupsSummaryModule } from './variant-groups-summary/variant-groups-summary.module';
import { VariantGroupsSummaryPage } from './variant-groups-summary/variant-groups-summary.page';
import { VariantGroupsEventsModule } from './variant-groups-events/variant-groups-events.module';
import { VariantGroupsEventsPage } from './variant-groups-events/variant-groups-events.page';

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsDetailView,
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: VariantGroupsSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'comments',
        component: VariantGroupsCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: VariantGroupsRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: VariantGroupsFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
      {
        path: 'events',
        component: VariantGroupsEventsPage,
        data: {
          breadcrumb: 'Events',
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    VariantGroupsSummaryModule,
    VariantGroupsCommentsModule,
    VariantGroupsRevisionsModule,
    VariantGroupsFlagsModule,
    VariantGroupsEventsModule,
  ],
  exports: [RouterModule],
})
export class VariantGroupsDetailRoutingModule {}
