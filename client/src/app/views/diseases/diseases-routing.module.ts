import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiseasesBrowseComponent } from './diseases-browse/diseases-browse.component';
import { DiseasesDetailComponent } from './diseases-detail/diseases-detail.component';
import { DiseasesSummaryComponent } from './diseases-summary/diseases-summary.component';

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
      },
      {
        path: ':diseaseId',
        component: DiseasesDetailComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: DiseasesSummaryComponent
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
export class DiseasesRoutingModule { }
