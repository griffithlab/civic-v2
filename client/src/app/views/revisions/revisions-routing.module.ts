import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RevisionsHomePage } from './revisions-home/revisions-home.page';
import { RevisionsComponent } from './revisions.component';

const routes: Routes = [
  {
    path: '', component: RevisionsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: RevisionsHomePage,
        data: {
          breadcrumb: 'Home'
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
