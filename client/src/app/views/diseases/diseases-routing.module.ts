import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiseasesBrowseComponent } from './diseases-browse/diseases-browse.component';

import { DiseasesComponent } from './diseases.component';

const routes: Routes = [
  { 
    path: '',
    component: DiseasesComponent ,
    children: [
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      },
      {
        path: 'browse',
        component: DiseasesBrowseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseasesRoutingModule { }
