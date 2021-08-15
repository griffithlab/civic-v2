import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesComponent } from './genes.component';

import { GenesHomeModule } from './genes-home/genes-home.module';
import { GenesHomePage } from './genes-home/genes-home.page';
import { GenesSummaryModule } from './genes-detail/genes-summary/genes-summary.module';
import { GenesSummaryPage } from './genes-detail/genes-summary/genes-summary.page';
import { GenesCommentsModule } from './genes-detail/genes-comments/genes-comments.module';
import { GenesCommentsPage } from './genes-detail/genes-comments/genes-comments.page';
import { GenesRevisionsModule } from './genes-detail/genes-revisions/genes-revisions.module';
import { GenesRevisionsPage } from './genes-detail/genes-revisions/genes-revisions.page';
import { GenesFlagsModule } from './genes-detail/genes-flags/genes-flags.module';
import { GenesFlagsPage } from './genes-detail/genes-flags/genes-flags.page';
import { GenesSuggestModule } from './genes-revise/genes-suggest/genes-suggest.module';
import { GenesSuggestPage } from './genes-revise/genes-suggest/genes-suggest.page';
import { GenesReviseModule } from './genes-revise/genes-revise.module';
import { GenesReviseView } from './genes-revise/genes-revise.view';
import { GenesDetailView } from './genes-detail/genes-detail.view';
import { GenesDetailModule } from './genes-detail/genes-detail.module';

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
        component: GenesDetailView,
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
            component: GenesFlagsPage,
            data: {
              breadcrumb: 'Summary'
            }
          },
        ]
      },
      {
        path: ':geneId',
        component: GenesReviseView,
        data: { breadcrumb: 'DISPLAYNAME'},
        children: [
          {
            path: 'revise',
            component: GenesSuggestPage,
            data: {
              breadcrumb: 'Suggest Revision'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GenesHomeModule,
    GenesDetailModule,
    GenesSummaryModule,
    GenesCommentsModule,
    GenesRevisionsModule,
    GenesFlagsModule,
    GenesReviseModule,
    GenesSuggestModule,
  ],
  exports: [RouterModule]
})
export class GenesRoutingModule { }
