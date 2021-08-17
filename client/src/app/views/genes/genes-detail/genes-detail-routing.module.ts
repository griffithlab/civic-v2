import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesCommentsModule } from './genes-comments/genes-comments.module';
import { GenesCommentsPage } from './genes-comments/genes-comments.page';
import { GenesDetailView } from './genes-detail.view';
import { GenesFlagsModule } from './genes-flags/genes-flags.module';
import { GenesFlagsPage } from './genes-flags/genes-flags.page';
import { GenesRevisionsModule } from './genes-revisions/genes-revisions.module';
import { GenesRevisionsPage } from './genes-revisions/genes-revisions.page';
import { GenesSummaryModule } from './genes-summary/genes-summary.module';
import { GenesSummaryPage } from './genes-summary/genes-summary.page';

const routes: Routes = [
  {
    path: 'revise',
    loadChildren: () => import('@app/views/genes/genes-revise/genes-revise.module').then(m => m.GenesReviseModule),
    data: { breadcrumb: 'Revise' }
  },
  {
    path: '',
    component: GenesDetailView,
    // setting 'DISPLAYNAME' here will cause breadcrumb & title generation logic
    // to use a provided displayName instead of breadcrumb string
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: GenesSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'comments',
        component: GenesCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: GenesRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: GenesFlagsPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GenesSummaryModule,
    GenesCommentsModule,
    GenesRevisionsModule,
    GenesFlagsModule,
  ],
  exports: [RouterModule]
})
export class GenesDetailRoutingModule {}
