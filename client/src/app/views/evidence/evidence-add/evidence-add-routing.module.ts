import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceAddView } from './evidence-add.view';
import { EvidenceSubmitModule } from './evidence-submit/evidence-submit.module';
import {EvidenceSubmitPage} from './evidence-submit/evidence-submit.page';

const routes: Routes = [
  {
    path: '',
    component: EvidenceAddView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: EvidenceSubmitPage,
        data: {
          breadcrumb: 'Suggest Revision'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), EvidenceSubmitModule],
  exports: [RouterModule],
})
export class EvidenceAddRoutingModule { }
