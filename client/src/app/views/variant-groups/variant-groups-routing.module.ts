import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantGroupsBrowseComponent } from './variant-groups-browse/variant-groups-browse.component';
import { VariantGroupsCommentsComponent } from './variant-groups-comments/variant-groups-comments.component';
import { VariantGroupsDetailComponent } from './variant-groups-detail/variant-groups-detail.component';
import { VariantGroupsFlagsComponent } from './variant-groups-flags/variant-groups-flags.component';
import { VariantGroupsHomePage } from './variant-groups-home/variant-groups-home.page';
import { VariantGroupsRevisionsComponent } from './variant-groups-revisions/variant-groups-revisions.component';
import { VariantGroupsSummaryComponent } from './variant-groups-summary/variant-groups-summary.component';

import { VariantGroupsComponent } from './variant-groups.component';

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsComponent ,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: VariantGroupsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':variantGroupId',
        component: VariantGroupsDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantGroupsSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: VariantGroupsCommentsComponent,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: VariantGroupsRevisionsComponent,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: VariantGroupsFlagsComponent,
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
