import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsBrowseComponent } from './drugs-browse/drugs-browse.component';
import { DrugsDetailComponent } from './drugs-detail/drugs-detail.component';
import { DrugsSummaryComponent } from './drugs-summary/drugs-summary.component';
import { DrugsComponent } from './drugs.component';

const routes: Routes = [
  {
    path: '',
    component: DrugsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: DrugsBrowseComponent,
        data: {
          breadcrumb: 'Browse'
        }
      },
      {
        path: ':drugId',
        component: DrugsDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: DrugsSummaryComponent,
            data: {
              breadcrumb: 'Summary'
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
export class DrugsRoutingModule { }
