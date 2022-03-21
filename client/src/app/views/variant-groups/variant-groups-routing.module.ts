import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantGroupsCommentsPage } from './variant-groups-detail/variant-groups-comments/variant-groups-comments.page';
import { VariantGroupsDetailView } from './variant-groups-detail/variant-groups-detail.view';
import { VariantGroupsSummaryPage } from './variant-groups-detail/variant-groups-summary/variant-groups-summary.page';
import { VariantGroupsFlagsPage } from './variant-groups-flags/variant-groups-flags.page';
import { VariantGroupsHomePage } from './variant-groups-home/variant-groups-home.page';
import { VariantGroupsRevisionsPage } from './variant-groups-detail/variant-groups-revisions/variant-groups-revisions.page';

import { VariantGroupsView } from './variant-groups.view';

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: VariantGroupsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':variantGroupId',
        component: VariantGroupsDetailView,
        data: {
          breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantGroupsSummaryPage,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: VariantGroupsCommentsPage,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: VariantGroupsRevisionsPage,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: VariantGroupsFlagsPage,
            data: {
              breadcrumb: 'Flags'
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantGroupsRoutingModule { }
