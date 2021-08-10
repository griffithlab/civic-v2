import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhenotypesDetailComponent } from './phenotypes-detail/phenotypes-detail.component';
import { PhenotypesHomePage } from './phenotypes-home/phenotypes-home.page';
import { PhenotypesSummaryComponent } from './phenotypes-summary/phenotypes-summary.component';
import { PhenotypesComponent } from './phenotypes.component';

const routes: Routes = [
  {
    path: '',
    component: PhenotypesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: PhenotypesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':phenotypeId',
        component: PhenotypesDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: PhenotypesSummaryComponent,
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
export class PhenotypesRoutingModule { }
