import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagsHomePage } from './flags-home/flags-home.page';
import { FlagsComponent } from './flags.component';

const routes: Routes = [
  {
    path: '', component: FlagsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: FlagsHomePage
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlagsRoutingModule {}
