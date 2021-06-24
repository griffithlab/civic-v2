import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourcesBrowseComponent } from './sources-browse/sources-browse.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SourcesRoutingModule { }
