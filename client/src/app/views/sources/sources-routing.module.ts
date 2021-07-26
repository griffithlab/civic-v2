import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesBrowseComponent } from './sources-browse/sources-browse.component';
import { SourcesDetailComponent } from './sources-detail/sources-detail.component';
import { SourcesSummaryComponent } from './sources-summary/sources-summary.component';

import { SourcesComponent } from './sources.component';

const routes: Routes = [
  { 
    path: '',
    component: SourcesComponent,
    children: [
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      },
      {
        path: 'browse',
        component: SourcesBrowseComponent
      },
      {
        path: ':sourceId',
        component: SourcesDetailComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: SourcesSummaryComponent
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
