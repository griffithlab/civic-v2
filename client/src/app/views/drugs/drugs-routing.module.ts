import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrugsDetailComponent } from './drugs-detail/drugs-detail.component';
import { DrugsHomePage } from './drugs-home/drugs-home.page';
import { DrugsSummaryComponent } from './drugs-detail/drugs-summary/drugs-summary.component';
import { DrugsComponent } from './drugs.component';

const routes: Routes = [
  {
    path: '',
    component: DrugsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: DrugsHomePage,
        data: {
          breadcrumb: 'Home'
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
