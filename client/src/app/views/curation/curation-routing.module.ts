import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurationDashboardPage } from './curation-dashboard/curation-dashboard.page';
import { CurationQueuesView } from './curation-queues/curation-queues.view';
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
              breadcrumb: 'Summary'
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
