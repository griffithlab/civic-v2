import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsRevisionsComponent } from '../evidence/variants-revisions/variants-revisions.component';
import { VariantsCommentsComponent } from './variants-comments/variants-comments.component';
import { VariantsDetailPage } from './variants-detail/variants-detail.component';
import { VariantsFlagsComponent } from './variants-flags/variants-flags.component';
import { VariantsHomePage } from './variants-home/variants-home.page';
import { VariantsSummaryPage } from './variants-summary/variants-summary.component';

import { VariantsComponent } from './variants.component';

const routes: Routes = [
  {
    path: '',
    component: VariantsComponent,
    data: {
      breadcrumb: 'Variants'
    },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: VariantsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':variantId',
        component: VariantsDetailPage,
        data: {
          breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantsSummaryPage,
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
            component: VariantsRevisionsComponent,
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
