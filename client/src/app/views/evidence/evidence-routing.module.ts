import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvidenceHomeModule } from './evidence-home/evidence-home.module';
import { EvidenceHomePage } from './evidence-home/evidence-home.page';
import { EvidenceView } from './evidence.view';

const routes: Routes = [
  {
    path: '',
    component: EvidenceView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: EvidenceHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':evidenceId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/evidence/evidence-detail/evidence-detail.module').then(
                (m) => m.EvidenceDetailModule
              ),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import('@app/views/evidence/evidence-revise/evidence-revise.module').then(
                (m) => m.EvidenceReviseModule
              ),
            data: { breadcrumb: 'Revise' }
          },
        ]
      },

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EvidenceHomeModule
  ],
  exports: [RouterModule]
})
export class EvidenceRoutingModule { }
