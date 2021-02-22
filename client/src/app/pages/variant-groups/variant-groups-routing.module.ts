import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariantGroupsComponent } from './variant-groups.component';

const routes: Routes = [{ path: '', component: VariantGroupsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantGroupsRoutingModule { }
