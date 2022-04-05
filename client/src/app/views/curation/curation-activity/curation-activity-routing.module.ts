import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurationTimelinePage } from './curation-timeline/curation-timeline.page';

const routes: Routes = [
  { path: '', redirectTo: 'curation-timeline', pathMatch: 'full' },
  {
    path: 'curation-timeline',
    component: CurationTimelinePage,
    data: {
      breadcrumb: 'Timeline'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurationActivityRoutingModule { }
