import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersAssertionsComponent } from './users-assertions/users-assertions.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersEventsComponent } from './users-events/users-events.component';
import { UsersEvidenceComponent } from './users-evidence/users-evidence.component';
import { UsersHomePage } from './users-home/users-home.page';
import { UsersNotificationsComponent } from './users-notifications/users-notifications.component';
import { UsersSourceSuggestionsComponent } from './users-source-suggestions/users-source-suggestions.component';

import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: UsersHomePage,
        data: {
          displayName: 'Home'
        }
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
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
