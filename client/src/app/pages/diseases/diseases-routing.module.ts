import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseasesComponent } from './diseases.component';

const routes: Routes = [{ path: '', component: DiseasesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiseasesRoutingModule { }
