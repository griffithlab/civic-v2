import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurationDashboardPage } from './curation-dashboard/curation-dashboard.page';
import { CurationQueuesView } from './curation-queues/curation-queues.view';
import { PendingAssertionsPage } from './curation-queues/pending-assertions/pending-assertions.page';
import { PendingEvidencePage } from './curation-queues/pending-evidence/pending-evidence.page';
import { PendingSourcesPage } from './curation-queues/pending-sources/pending-sources.page';
import { CurationView } from './curation.view';

const routes: Routes = [
  {
    path: '',
    component: CurationView,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: CurationDashboardPage,
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'queues',
        component: CurationQueuesView,
        data: {
          breadcrumb: 'Queues'
        },
        children: [
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
export class CurationRoutingModule { }
