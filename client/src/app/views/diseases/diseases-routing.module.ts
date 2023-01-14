import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiseasesDetailComponent } from './diseases-detail/diseases-detail.component';
import { DiseasesHomePage } from './diseases-home/diseases-home.page';
import { DiseasesSummaryComponent } from './diseases-detail/diseases-summary/diseases-summary.component';

import { DiseasesComponent } from './diseases.component';

const routes: Routes = [
  {
    path: '',
    component: DiseasesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: DiseasesHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: ':diseaseId',
        component: DiseasesDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME',
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: DiseasesSummaryComponent,
            data: {
              breadcrumb: 'Summary',
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseasesRoutingModule {}
