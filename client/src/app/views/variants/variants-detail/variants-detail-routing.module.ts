import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsCommentsModule } from '../variants-comments/variants-comments.module';
import { VariantsCommentsPage } from '../variants-comments/variants-comments.component';
import { VariantsDetailView } from './variants-detail.component';
import { VariantsFlagsModule } from '../variants-flags/variants-flags.module';
import { VariantsFlagsPage } from '../variants-flags/variants-flags.component';
import { VariantsRevisionsModule } from '../variants-revisions/variants-revisions.module';
import { VariantsRevisionsPage } from '@app/views/evidence/variants-revisions/variants-revisions.component';
import { VariantsSummaryModule } from '../variants-summary/variants-summary.module';
import { VariantsSummaryPage } from '../variants-summary/variants-summary.component';

const routes: Routes = [
  {
    path: '',
    component: VariantsDetailView,
    data: {breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: VariantsSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'comments',
        component: VariantsCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: VariantsRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: VariantsFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    VariantsSummaryModule,
    VariantsCommentsModule,
    VariantsRevisionsModule,
    VariantsFlagsModule,
  ],
  exports: [RouterModule],
})
export class VariantsDetailRoutingModule {}
