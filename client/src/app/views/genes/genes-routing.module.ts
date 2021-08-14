import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesComponent } from './genes.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesSuggestRevisionComponent } from './genes-suggest-revision/genes-suggest-revision.component';
import { GenesRevisionsPage } from './genes-revisions/genes-revisions.page';
import { GenesFlagsComponent } from './genes-flags/genes-flags.component';

import { GenesHomeModule } from './genes-home/genes-home.module';
import { GenesHomePage } from './genes-home/genes-home.page';
import { GenesSummaryModule } from './genes-summary/genes-summary.module';
import { GenesSummaryPage } from './genes-summary/genes-summary.page';
import { GenesCommentsModule } from './genes-comments/genes-comments.module';
import { GenesCommentsPage } from './genes-comments/genes-comments.page';
import { GenesRevisionsModule } from './genes-revisions/genes-revisions.module';

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
            component: GenesCommentsPage,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: GenesRevisionsPage,
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
    RouterModule.forChild(routes),
    GenesHomeModule,
    GenesSummaryModule,
    GenesCommentsModule,
    GenesRevisionsModule,

  ],
  exports: [RouterModule]
})
export class GenesRoutingModule { }
