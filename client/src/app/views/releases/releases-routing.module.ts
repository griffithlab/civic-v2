import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReleasesMainComponent } from './releases-main/releases-main.component';
import { ReleasesComponent } from './releases.component';

const routes: Routes = [
  {
    path: '',
    component: ReleasesComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: ReleasesMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReleasesRoutingModule { }
