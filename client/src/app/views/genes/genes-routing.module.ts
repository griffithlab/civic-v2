import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenesComponent } from './genes.component';
import { GenesBrowseComponent } from './genes-browse/genes-browse.component';
import { GenesDetailComponent } from './genes-detail/genes-detail.component';
import { GenesSuggestRevisionComponent } from './genes-suggest-revision/genes-suggest-revision.component';
import { GenesSummaryComponent } from './genes-summary/genes-summary.component';
import { GenesCommentsComponent } from './genes-comments/genes-comments.component';
import { GenesRevisionsComponent } from './genes-revisions/genes-revisions.component';
import { GenesFlagsComponent } from './genes-flags/genes-flags.component';

const routes: Routes = [
  {
    path: '',
    component: GenesComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: GenesBrowseComponent,
        data: {
          breadcrumb: 'Browse'
        }
      },
      {
        path: ':geneId',
        component: GenesDetailComponent,
        data: {
          breadcrumb: 'GENERATE' // triggers label generation by getRouteLabel in gene-details.component
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: GenesSummaryComponent,
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
export class GenesRoutingModule { }
