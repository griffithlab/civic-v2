import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AssertionsDetailView } from './assertions-detail.view'
import { AssertionsCommentsModule } from './assertions-comments/assertions-comments.module'
import { AssertionsCommentsPage } from './assertions-comments/assertions-comments.page'
import { AssertionsFlagsModule } from './assertions-flags/assertions-flags.module'
import { AssertionsFlagsPage } from './assertions-flags/assertions-flags.page'
import { AssertionsRevisionsModule } from './assertions-revisions/assertions-revisions.module'
import { AssertionsRevisionsPage } from './assertions-revisions/assertions-revisions.page'
import { AssertionsSummaryModule } from './assertions-summary/assertions-summary.module'
import { AssertionsSummaryPage } from './assertions-summary/assertions-summary.page'
import { AssertionsEventsPage } from './assertions-events/assertions-events.page'
import { AssertionsEventsModule } from './assertions-events/assertions-events.module'
import { AssertionsApprovalsPage } from './assertions-approvals/assertions-approvals.page'

const routes: Routes = [
  {
    path: '',
    component: AssertionsDetailView,
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      {
        path: 'summary',
        component: AssertionsSummaryPage,
        data: {
          breadcrumb: 'Summary',
        },
      },
      {
        path: 'events',
        component: AssertionsEventsPage,
        data: {
          breadcrumb: 'Events',
        },
      },
      {
        path: 'comments',
        component: AssertionsCommentsPage,
        data: {
          breadcrumb: 'Comments',
        },
      },
      {
        path: 'revisions',
        component: AssertionsRevisionsPage,
        data: {
          breadcrumb: 'Revisions',
        },
      },
      {
        path: 'flags',
        component: AssertionsFlagsPage,
        data: {
          breadcrumb: 'Flags',
        },
      },
      {
        path: 'approvals',
        component: AssertionsApprovalsPage,
        data: {
          breadcrumb: 'Approvals',
        },
      },
    ],
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AssertionsSummaryModule,
    AssertionsCommentsModule,
    AssertionsRevisionsModule,
    AssertionsFlagsModule,
    AssertionsEventsModule,
  ],
  exports: [RouterModule],
})
export class AssertionsDetailRoutingModule {}
