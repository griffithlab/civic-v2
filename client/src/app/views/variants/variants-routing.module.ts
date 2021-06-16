import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsBrowseComponent } from './variants-browse/variants-browse.component';
import { VariantsDetailComponent } from './variants-detail/variants-detail.component';
import { VariantSummaryComponent } from './variants-summary/variants-summary.component';

import { VariantsComponent } from './variants.component';

const routes: Routes = [
  { 
    path: '',
    component: VariantsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: VariantsBrowseComponent
      },
      {
        path: ':variantId',
        component: VariantsDetailComponent,
        children: [
          {path: '', redirectTo: 'summary', pathMatch: 'full'},
          {
            path: 'summary',
            component: VariantSummaryComponent
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
export class VariantsRoutingModule { }
