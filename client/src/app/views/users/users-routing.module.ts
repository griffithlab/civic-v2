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
       component: UsersHomePage
      },
      {
        path: ':userId',
        component: UsersDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME'
        },
        children: [
        //  {path: '', redirectTo: 'badges', pathMatch: 'full'},
        //  {
        //    path: 'badges',
        //    component: UsersBadgesComponent
        //  },
          {
            path: 'evidence',
            component: UsersEvidenceComponent,
            data: {
              breadcrumb: 'Evidence'
            }
          },
          {
            path: 'assertions',
            component: UsersAssertionsComponent,
            data: {
              breadcrumb: 'Assertions'
            }
          },
          {
            path: 'activity',
            component: UsersEventsComponent,
            data: {
              breadcrumb: 'Activity'
            }
          },
          {
            path: 'source-suggestions',
            component: UsersSourceSuggestionsComponent,
            data: {
              breadcrumb: 'Source Suggestions'
            }
          },
          {
            path: 'notifications',
            component: UsersNotificationsComponent,
            data: {
              breadcrumb: 'Notifications'
            }
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
