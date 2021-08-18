import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariantsReviseComponent } from './variants-revise.component';

const routes: Routes = [{ path: '', component: VariantsReviseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariantsReviseRoutingModule { }
