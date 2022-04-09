import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantTypesDetailComponent } from './variant-types-detail/variant-types-detail.component';
import { VariantTypesHomePage } from './variant-types-home/variant-types-home.page';
import { VariantTypesSummaryComponent } from './variant-types-detail/variant-types-summary/variant-types-summary.component';

import { VariantTypesComponent } from './variant-types.component';

const routes: Routes = [
  {
    path: '',
    component: VariantTypesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: VariantTypesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':variantTypeId',
        component: VariantTypesDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantTypesSummaryComponent,
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
export class VariantTypesRoutingModule { }
