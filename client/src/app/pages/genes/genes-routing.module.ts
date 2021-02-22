import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenesComponent } from './genes.component';

const routes: Routes = [{ path: '', component: GenesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenesRoutingModule { }
