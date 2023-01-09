import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TherapiesDetailComponent } from './therapies-detail/therapies-detail.component';
import { TherapiesHomePage } from './therapies-home/therapies-home.page';
import { TherapiesSummaryComponent } from './therapies-detail/therapies-summary/therapies-summary.component';
import { TherapiesComponent } from './therapies.component';

const routes: Routes = [
  {
    path: '',
    component: TherapiesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: TherapiesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':therapyId',
        component: TherapiesDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: TherapiesSummaryComponent,
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
export class TherapiesRoutingModule { }
