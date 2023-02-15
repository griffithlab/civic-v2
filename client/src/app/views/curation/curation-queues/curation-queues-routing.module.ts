import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingAssertionsPage } from './pending-assertions/pending-assertions.page';
import { PendingEvidencePage } from './pending-evidence/pending-evidence.page';
import { PendingRevisionsPage } from './pending-revisions/pending-revisions.page';
import { PendingSourcesPage } from './pending-sources/pending-sources.page';

const routes: Routes = [
  { path: '', redirectTo: 'pending-sources', pathMatch: 'full' },
  {
    path: 'pending-sources',
    component: PendingSourcesPage,
    data: {
      breadcrumb: 'Pending Source Suggestions'
    },
  },
  {
    path: 'pending-evidence',
    component: PendingEvidencePage,
    data: {
      breadcrumb: 'Pending Evidence Items'
    },
  },
  {
    path: 'pending-assertions',
    component: PendingAssertionsPage,
    data: {
      breadcrumb: 'Pending Assertions'
    },
  },
  {
    path: 'pending-revisions',
    component: PendingRevisionsPage,
    data: {
      breadcrumb: 'Pending Revisions'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurationQueuesRoutingModule { }
