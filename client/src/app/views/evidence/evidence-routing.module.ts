import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvidenceBrowseComponent } from './evidence-browse/evidence-browse.component';
import { EvidenceCommentsComponent } from './evidence-comments/evidence-comments.component';
import { EvidenceDetailComponent } from './evidence-detail/evidence-detail.component';
import { EvidenceFlagsComponent } from './evidence-flags/evidence-flags.component';
import { EvidenceSummaryComponent } from './evidence-summary/evidence-summary.component';

import { EvidenceComponent } from './evidence.component';

const routes: Routes = [
  {
    path: '',
    component: EvidenceComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: EvidenceBrowseComponent
      },
      {
        path: ':evidenceId',
        component: EvidenceDetailComponent,
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
          {
            path: 'summary',
            component: EvidenceSummaryComponent
          },
          {
            path: 'comments',
            component: EvidenceCommentsComponent,
          },
          {
            path: 'flags',
            component: EvidenceFlagsComponent
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
export class EvidenceRoutingModule { }
