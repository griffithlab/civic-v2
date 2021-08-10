import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalTrialsBrowseComponent } from './clinical-trials-browse/clinical-trials-browse.component';
import { ClinicalTrialsDetailComponent } from './clinical-trials-detail/clinical-trials-detail.component';
import { ClinicalTrialsHomePage } from './clinical-trials-home/clinical-trials-home.page';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary/clinical-trials-summary.component';
import { ClinicalTrialsComponent } from './clinical-trials.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicalTrialsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: ClinicalTrialsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':clinicalTrialId',
        component: ClinicalTrialsDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: ClinicalTrialsSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
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
export class ClinicalTrialsRoutingModule { }
