import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FdaVariantsGuard } from './fda-variants.guard';
import { FdaVariantsView } from './fda-variants.view';

const routes: Routes = [
  {
    path: '',
    component: FdaVariantsView,
    canDeactivate: [FdaVariantsGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FdaVariantsRoutingModule { }
