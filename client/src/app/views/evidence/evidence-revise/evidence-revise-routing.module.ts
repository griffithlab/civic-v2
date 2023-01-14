import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvidenceReviseView } from './evidence-revise.view';
import { EvidenceSuggestModule } from './evidence-suggest/evidence-suggest.module';
import { EvidenceSuggestPage } from './evidence-suggest/evidence-suggest.page';

const routes: Routes = [
  {
    path: '',
    component: EvidenceReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: EvidenceSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), EvidenceSuggestModule],
  exports: [RouterModule],
})
export class EvidenceReviseRoutingModule {}
