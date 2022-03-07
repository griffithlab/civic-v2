import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionsCommentsComponent } from './assertions-comments/assertions-comments.component';
import { AssertionsDetailComponent } from './assertions-detail/assertions-detail.component';
import { AssertionsFlagsComponent } from './assertions-flags/assertions-flags.component';
import { AssertionsHomePage } from './assertions-home/assertions-home.page';
import { AssertionsRevisionsComponent } from './assertions-revisions/assertions-revisions.component';
import { AssertionsSummaryComponent } from './assertions-summary/assertions-summary.component';

import { AssertionsComponent } from './assertions.component';

const routes: Routes = [
  {
    path: '',
    component: AssertionsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: AssertionsHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: 'add',
        loadChildren: () =>
          import('@app/views/assertions/assertion-add/assertion-add.module').then(
            (m) => m.AssertionAddModule
          ),
        data: { breadcrumb: 'Add' }
      },
      {
        path: ':assertionId',
        component: AssertionsDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME' // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: AssertionsSummaryComponent,
            data: {
              breadcrumb: 'Summary'
            }
          },
          {
            path: 'comments',
            component: AssertionsCommentsComponent,
            data: {
              breadcrumb: 'Comments'
            }
          },
          {
            path: 'revisions',
            component: AssertionsRevisionsComponent,
            data: {
              breadcrumb: 'Revisions'
            }
          },
          {
            path: 'flags',
            component: AssertionsFlagsComponent,
            data: {
              breadcrumb: 'Flags'
            }
          }
        ]
      }
    ]
  },
  { path: 'add', loadChildren: () => import('./assertion-add/assertion-add.module').then(m => m.AssertionAddModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionsRoutingModule { }
