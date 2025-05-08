import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SourceAddPage } from './source-add/source-add.page'
import { SourceAddRelatedPage } from './source-add-related/source-add-related.page'
import { SourcesDetailView } from './sources-detail/sources-detail.view'
import { SourcesHomePage } from './sources-home/sources-home.page'
import { SourcesSummaryPage } from './sources-detail/sources-summary/sources-summary.page'

import { SourcesView } from './sources.view'
import { SourcesCommentsPage } from './sources-detail/sources-comments/sources-comments.page'

const routes: Routes = [
  {
    path: '',
    component: SourcesView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: SourcesHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: 'add',
        data: {
          breadcrumb: 'Submit a Source Suggestion',
        },
        runGuardsAndResolvers: 'always',
        component: SourceAddPage,
      },
      {
        path: ':sourceId',
        component: SourcesDetailView,
        data: {
          breadcrumb: 'DISPLAYNAME',
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: SourcesSummaryPage,
            data: {
              breadcrumb: 'Summary',
            },
          },
          {
            path: 'comments',
            component: SourcesCommentsPage,
            data: {
              breadcrumb: 'Comments',
            },
          },
          {
            path: 'add-related',
            component: SourceAddRelatedPage,
            data: {
              breadcrumb: 'Add Related Source',
            }
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourcesRoutingModule {}
