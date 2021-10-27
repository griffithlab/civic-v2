import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdaVariantsView } from './fda-variants.view';

const routes: Routes = [
  { path: '', component: FdaVariantsView}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FdaVariantsRoutingModule { }
