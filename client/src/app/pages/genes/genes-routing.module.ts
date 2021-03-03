import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenesComponent } from './genes.component';
import { GenesBrowseComponent } from './genes-browse/genes-browse.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';

const routes: Routes = [
  { path: '',
    component: GenesComponent,
    children: [
      {
        path: 'browse',
        component: GenesBrowseComponent
      },
      {
        path: 'detail',
        component: GenesDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenesRoutingModule { }
