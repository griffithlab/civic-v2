import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertionsCommentsComponent } from './assertions-comments/assertions-comments.component';
import { AssertionsDetailComponent } from './assertions-detail/assertions-detail.component';
import { AssertionsFlagsComponent } from './assertions-flags/assertions-flags.component';
import { AssertionsSummaryComponent } from './assertions-summary/assertions-summary.component';

import { AssertionsComponent } from './assertions.component';

const routes: Routes = [
  {
    path: '',
    component: AssertionsComponent,
    children: [
      {
        path: ':assertionId',
        component: AssertionsDetailComponent,
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
          {
            path: 'summary',
            component: AssertionsSummaryComponent
          },
          {
            path: 'comments',
            component: AssertionsCommentsComponent,
          },
          {
            path: 'flags',
            component: AssertionsFlagsComponent
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
export class AssertionsRoutingModule { }
