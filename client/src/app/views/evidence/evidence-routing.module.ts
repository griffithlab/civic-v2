import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvidenceCommentsPage } from './evidence-comments/evidence-comments.page';
import { EvidenceDetailView } from './evidence-detail/evidence-detail.view';
import { EvidenceFlagsPage } from './evidence-flags/evidence-flags.page';
import { EvidenceRevisionsPage } from './evidence-revisions/evidence-revisions.page';
import { EvidenceSummaryPage } from './evidence-summary/evidence-summary.page';
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
        component: EvidenceDetailView,
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvidenceRoutingModule { }
