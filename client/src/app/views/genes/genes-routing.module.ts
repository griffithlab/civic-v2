import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenesComponent } from './genes.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesSuggestRevisionComponent } from './genes-suggest-revision/genes-suggest-revision.component';
import { GenesSummaryPage } from './genes-summary/genes-summary.page';
import { GenesCommentsComponent } from './genes-comments/genes-comments.component';
import { GenesRevisionsComponent } from './genes-revisions/genes-revisions.component';
import { GenesFlagsComponent } from './genes-flags/genes-flags.component';
import { GenesHomePage } from './genes-home/genes-home.page';

const routes: Routes = [
  {
    path: '',
    component: GenesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: GenesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':geneId',
        component: GenesDetailComponent,
        // setting 'DISPLAYNAME' here will cause breadcrumb & title generation logic
        // to use a provided displayName instead of breadcrumb string
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: GenesSummaryPage,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: GenesCommentsComponent,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: GenesRevisionsComponent,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: GenesFlagsComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'suggest-revision',
            component: GenesSuggestRevisionComponent,
            data: {
              breadcrumb: 'Suggest Revision'
            }
          },

        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GenesRoutingModule { }
