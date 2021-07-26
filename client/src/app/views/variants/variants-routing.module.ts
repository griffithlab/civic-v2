import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsBrowseComponent } from '@app/components/shared/variants-browse/variants-browse.component';
import { VariantGroupsRevisionsComponent } from '../variant-groups/variant-groups-revisions/variant-groups-revisions.component';
import { VariantsCommentsComponent } from './variants-comments/variants-comments.component';
import { VariantsDetailComponent } from './variants-detail/variants-detail.component';
import { VariantsFlagsComponent } from './variants-flags/variants-flags.component';
import { VariantSummaryComponent } from './variants-summary/variants-summary.component';

import { VariantsComponent } from './variants.component';

const routes: Routes = [
  {
    path: '',
    component: VariantsComponent,
    data: {
      breadcrumb: 'Variants'
    },
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: VariantsBrowseComponent,
        data: {
          breadcrumb: 'Browse'
        }
      },
      {
        path: ':variantId',
        component: VariantsDetailComponent,
        data: {
          breadcrumb: 'GENERATE' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: VariantsCommentsComponent,
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
            component: VariantsFlagsComponent,
            data: {
              breadcrumb: 'Flags'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantsRoutingModule { }
