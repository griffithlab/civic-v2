import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsBrowseComponent } from './variants-browse/variants-browse.component';

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
      }
    ]
  }
];
    
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantsRoutingModule { }
