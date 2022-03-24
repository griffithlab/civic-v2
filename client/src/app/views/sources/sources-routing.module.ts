import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceAddPage } from './source-add/source-add.page';
import { SourcesDetailView } from './sources-detail/sources-detail.view';
import { SourcesHomePage } from './sources-home/sources-home.page';
import { SourcesSummaryPage } from './sources-detail/sources-summary/sources-summary.page';

import { SourcesView } from './sources.view';

const routes: Routes = [
  {
    path: '',
    component: SourcesView,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: SourcesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'add',
        data: {
          breadcrumb: 'Submit a Source Suggestion',
        },
        component: SourceAddPage
      },
      {
        path: ':sourceId',
        component: SourcesDetailView,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: SourcesSummaryPage,
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
  exports: [RouterModule],
})
export class SourcesRoutingModule { }
