import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantTypesBrowseComponent } from './variant-types-browse/variant-types-browse.component';
import { VariantTypesDetailComponent } from './variant-types-detail/variant-types-detail.component';
import { VariantTypesSummaryComponent } from './variant-types-summary/variant-types-summary.component';

import { VariantTypesComponent } from './variant-types.component';

const routes: Routes = [
  {
    path: '',
    component: VariantTypesComponent,
    children: [
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      },
      {
        path: 'browse',
        component: VariantTypesBrowseComponent
      },
      {
        path: ':variantTypeId',
        component: VariantTypesDetailComponent,
        children: [
          { path: '', redirectTo: 'summary', pathMatch: 'full' },
          {
            path: 'summary',
            component: VariantTypesSummaryComponent
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
