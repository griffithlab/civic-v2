import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { UsersAssertionsComponent } from '../users-assertions/users-assertions.component'
import { UsersEventsComponent } from '../users-events/users-events.component'
import { UsersEvidenceComponent } from '../users-evidence/users-evidence.component'
import { UsersNotificationsComponent } from '../users-notifications/users-notifications.component'
import { UsersSourceSuggestionsComponent } from '../users-source-suggestions/users-source-suggestions.component'
import { UsersDetailComponent } from './users-detail.component'

const routes: Routes = [
  {
    path: '',
    component: UsersDetailComponent,
    // setting 'DISPLAYNAME' here will cause breadcrumb & title generation logic
    // to use a provided displayName instead of breadcrumb string
    data: { breadcrumb: 'DISPLAYNAME' },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'activity' },
      {
        path: 'evidence',
        component: UsersEvidenceComponent,
        data: {
          breadcrumb: 'Evidence',
        },
      },
      {
        path: 'assertions',
        component: UsersAssertionsComponent,
        data: {
          breadcrumb: 'Assertions',
        },
      },
      {
        path: 'activity',
        component: UsersEventsComponent,
        data: {
          breadcrumb: 'Activity',
        },
      },
      {
        path: 'source-suggestions',
        component: UsersSourceSuggestionsComponent,
        data: {
          breadcrumb: 'Source Suggestions',
        },
      },
      {
        path: 'notifications',
        component: UsersNotificationsComponent,
        data: {
          breadcrumb: 'Notifications',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersDetailRoutingModule {}
