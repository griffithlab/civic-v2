import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsBrowseComponent } from '@app/components/shared/variants-browse/variants-browse.component';
import { VariantsCommentsComponent } from './variants-comments/variants-comments.component';
import { VariantsDetailComponent } from './variants-detail/variants-detail.component';
import { VariantsFlagsComponent } from './variants-flags/variants-flags.component';
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
          },
          {
            path: 'comments',
            component: VariantsCommentsComponent,
          },
          {
            path: 'flags',
            component: VariantsFlagsComponent
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
