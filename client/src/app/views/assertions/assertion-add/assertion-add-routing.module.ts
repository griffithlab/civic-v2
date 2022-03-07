import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssertionAddComponent } from './assertion-add.component';

const routes: Routes = [{ path: '', component: AssertionAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionAddRoutingModule { }
