import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersHomePage } from './users-home/users-home.page'

import { UsersComponent } from './users.component'

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { displayName: 'Contributors' },
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: UsersHomePage,
        data: {
          displayName: 'Home',
        },
      },
      {
        path: ':userId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/users/users-detail/users-detail.module').then(
                (m) => m.UsersDetailModule
              ),
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
