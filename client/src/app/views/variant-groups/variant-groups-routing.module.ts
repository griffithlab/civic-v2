import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantGroupsBrowseComponent } from './variant-groups-browse/variant-groups-browse.component';

import { VariantGroupsComponent } from './variant-groups.component';

const routes: Routes = [
  { 
    path: '', 
    component: VariantGroupsComponent ,
    children: [
      {
        path: '',
        redirectTo: 'browse',
        pathMatch: 'full'
      },
      {
        path: 'browse',
        component: VariantGroupsBrowseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantGroupsRoutingModule { }
