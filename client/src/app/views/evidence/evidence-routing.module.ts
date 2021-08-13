import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvidenceCommentsComponent } from './evidence-comments/evidence-comments.component';
import { EvidenceDetailComponent } from './evidence-detail/evidence-detail.component';
import { EvidenceFlagsComponent } from './evidence-flags/evidence-flags.component';
import { EvidenceRevisionsComponent } from './evidence-revisions/evidence-revisions.component';
import { EvidenceSummaryComponent } from './evidence-summary/evidence-summary.component';
import { EvidenceHomePage } from './evidence-home/evidence-home.page';
import { EvidenceComponent } from './evidence.component';

const routes: Routes = [
  {
    path: '',
    component: EvidenceComponent,
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
        component: EvidenceDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
          {
            path: 'summary',
            component: EvidenceSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: EvidenceCommentsComponent,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: EvidenceRevisionsComponent,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: EvidenceFlagsComponent,
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
