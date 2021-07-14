import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityMainComponent } from './community-main/community-main.component';
import { CommunityComponent } from './community.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: CommunityMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
