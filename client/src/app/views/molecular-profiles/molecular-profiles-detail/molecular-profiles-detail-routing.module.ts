import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolecularProfilesDetailView } from './molecular-profiles-detail.view';
import { MolecularProfilesRevisionsModule } from './molecular-profiles-revisions/molecular-profiles-revisions.module';
import { MolecularProfilesRevisionsPage } from './molecular-profiles-revisions/molecular-profiles-revisions.page';
import { MolecularProfilesSummaryModule } from './molecular-profiles-summary/molecular-profiles-summary.module';
import { MolecularProfilesSummaryPage } from './molecular-profiles-summary/molecular-profiles-summary.page';

const routes: Routes = [
  {
    path: '',
    component: MolecularProfilesDetailView,
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: MolecularProfilesSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
/*       {
        path: 'comments',
        component: MolecularProfileCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
*/
      {
        path: 'revisions',
        component: MolecularProfilesRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
/*
      {
        path: 'flags',
        component: MolecularProfileFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
      {
        path: 'events',
        component: MolecularProfileEventsPage,
        data: {
          breadcrumb: 'Events',
        },
      }, */
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MolecularProfilesSummaryModule,
    MolecularProfilesRevisionsModule,
  ],
  exports: [RouterModule],
})
export class MolecularProfileDetailRoutingModule {}
