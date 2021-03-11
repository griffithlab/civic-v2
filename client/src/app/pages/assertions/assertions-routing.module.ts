import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssertionsComponent } from './assertions.component';

const routes: Routes = [{ path: '', component: AssertionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssertionsRoutingModule { }
