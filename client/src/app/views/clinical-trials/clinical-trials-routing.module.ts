import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicalTrialsBrowseComponent } from './clinical-trials-browse/clinical-trials-browse.component';
import { ClinicalTrialsDetailComponent } from './clinical-trials-detail/clinical-trials-detail.component';
import { ClinicalTrialsSummaryComponent } from './clinical-trials-summary/clinical-trials-summary.component';
import { ClinicalTrialsComponent } from './clinical-trials.component';

const routes: Routes = [
  {
    path: '',
    component: ClinicalTrialsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: ClinicalTrialsBrowseComponent
      },
      {
        path: ':clinicalTrialId',
        component: ClinicalTrialsDetailComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: ClinicalTrialsSummaryComponent
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
