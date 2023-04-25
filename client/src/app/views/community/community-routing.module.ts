import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CommunityHomePage } from './community-home/community-home.page'
import { CommunityComponent } from './community.component'

const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: CommunityHomePage,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityRoutingModule {}
