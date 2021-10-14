import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvidenceDetailView } from './evidence-detail.view';
import { EvidenceCommentsModule } from './evidence-comments/evidence-comments.module';
import { EvidenceCommentsPage } from './evidence-comments/evidence-comments.page';
import { EvidenceFlagsModule } from './evidence-flags/evidence-flags.module';
import { EvidenceFlagsPage } from './evidence-flags/evidence-flags.page';
import { EvidenceRevisionsModule } from './evidence-revisions/evidence-revisions.module';
import { EvidenceRevisionsPage } from './evidence-revisions/evidence-revisions.page';
import { EvidenceSummaryModule } from './evidence-summary/evidence-summary.module';
import { EvidenceSummaryPage } from './evidence-summary/evidence-summary.page';

const routes: Routes = [
  {
    path: '',
    component: EvidenceDetailView,
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: EvidenceSummaryPage,
        data: {
          breadcrumb: 'Summary'
        }
      },
      {
        path: 'comments',
        component: EvidenceCommentsPage,
        data: {
          breadcrumb: 'Comments'
        }
      },
      {
        path: 'revisions',
        component: EvidenceRevisionsPage,
        data: {
          breadcrumb: 'Revisions'
        }
      },
      {
        path: 'flags',
        component: EvidenceFlagsPage,
        data: {
          breadcrumb: 'Flags'
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EvidenceSummaryModule,
    EvidenceCommentsModule,
    EvidenceRevisionsModule,
    EvidenceFlagsModule,
  ],
  exports: [RouterModule],
})
export class EvidenceDetailRoutingModule { }
