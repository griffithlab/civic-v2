import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolecularProfilesCommentsModule } from './molecular-profiles-comments/molecular-profiles-comments.module';
import { MolecularProfilesCommentsPage } from './molecular-profiles-comments/molecular-profiles-comments.page';
import { MolecularProfilesDetailView } from './molecular-profiles-detail.view';
import { MolecularProfilesFlagsModule } from './molecular-profiles-flags/molecular-profiles-flags.module';
import { MolecularProfilesFlagsPage } from './molecular-profiles-flags/molecular-profiles-flags.page';
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
       {
        path: 'comments',
        component: MolecularProfilesCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: MolecularProfilesRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: MolecularProfilesFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
  /*
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
    MolecularProfilesCommentsModule,
    MolecularProfilesFlagsModule,
  ],
  exports: [RouterModule],
})
export class MolecularProfileDetailRoutingModule {}
