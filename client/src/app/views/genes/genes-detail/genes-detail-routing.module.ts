import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesCommentsModule } from './genes-comments/genes-comments.module';
import { GenesCommentsPage } from './genes-comments/genes-comments.page';
import { GenesDetailView } from './genes-detail.view';
import { GenesEventsModule } from './genes-events/genes-events.module';
import { GenesEventsPage } from './genes-events/genes-events.page';
import { GenesFlagsModule } from './genes-flags/genes-flags.module';
import { GenesFlagsPage } from './genes-flags/genes-flags.page';
import { GenesRevisionsModule } from './genes-revisions/genes-revisions.module';
import { GenesRevisionsPage } from './genes-revisions/genes-revisions.page';
import { GenesSummaryModule } from './genes-summary/genes-summary.module';
import { GenesSummaryPage } from './genes-summary/genes-summary.page';

const routes: Routes = [
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
      {
        path: 'events',
        component: GenesEventsPage,
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
    GenesSummaryModule,
    GenesCommentsModule,
    GenesRevisionsModule,
    GenesFlagsModule,
    GenesEventsModule,
  ],
  exports: [RouterModule],
})
export class GenesDetailRoutingModule {}
