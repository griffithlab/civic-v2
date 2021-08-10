import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesBrowseComponent } from './sources-browse/sources-browse.component';
import { SourcesDetailComponent } from './sources-detail/sources-detail.component';
import { SourcesHomePage } from './sources-home/sources-home.page';
import { SourcesSummaryComponent } from './sources-summary/sources-summary.component';

import { SourcesComponent } from './sources.component';

const routes: Routes = [
  {
    path: '',
    component: SourcesComponent,
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
        path: ':sourceId',
        component: SourcesDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: SourcesSummaryComponent,
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
export class SourcesRoutingModule { }
