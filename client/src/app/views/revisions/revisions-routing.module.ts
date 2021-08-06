import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionsBrowseComponent } from './revisions-browse/revisions-browse.component';
import { RevisionsComponent } from './revisions.component';

const routes: Routes = [
  {
    path: '', component: RevisionsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: RevisionsBrowseComponent,
        data: {
          breadcrumb: 'Browse'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevisionsRoutingModule { }
