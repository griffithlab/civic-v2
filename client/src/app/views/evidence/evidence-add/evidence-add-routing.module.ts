import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceAddView } from './evidence-add.view';
import { EvidenceSubmitModule } from './evidence-submit/evidence-submit.module';
import { EvidenceSubmitPage } from './evidence-submit/evidence-submit.page';

const routes: Routes = [
  {
    path: '',
    component: EvidenceAddView,
    children: [
      { path: '', redirectTo: 'submit', pathMatch: 'full' },
      {
        path: 'submit',
        component: EvidenceSubmitPage,
        data: {
          breadcrumb: 'Submit New Evidence',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EvidenceSubmitModule],
  exports: [RouterModule],
})
export class EvidenceAddRoutingModule {}
