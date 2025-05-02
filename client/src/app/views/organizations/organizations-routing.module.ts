import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { OrganizationsAssertionsComponent } from './organizations-assertions/organizations-assertions.component'
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component'
import { OrganizationsEventsComponent } from './organizations-events/organizations-events.component'
import { OrganizationsEvidenceComponent } from './organizations-evidence/organizations-evidence.component'
import { OrganizationsGroupsComponent } from './organizations-groups/organizations-groups.component'
import { OrganizationsHomePage } from './organizations-home/organizations-home.page'
import { OrganizationsMembersComponent } from './organizations-members/organizations-members.component'
import { OrganizationsSourceSuggestionsComponent } from './organizations-source-suggestions/organizations-source-suggestions.component'

import { OrganizationsComponent } from './organizations.component'
import { OrganizationsEndorsedAssertionsComponent } from './organization-endorsed-assertions/organizations-endorsed-assertions.component'

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: OrganizationsHomePage,
      },
      {
        path: ':organizationId',
        component: OrganizationsDetailComponent,
        data: {
          breadcrumb: 'DISPLAYNAME',
        },
        children: [
          { path: '', redirectTo: 'members', pathMatch: 'full' },
          {
            path: 'members',
            component: OrganizationsMembersComponent,
            data: {
              breadcrumb: 'Members',
            },
          },
          {
            path: 'groups',
            component: OrganizationsGroupsComponent,
            data: {
              breadcrumb: 'Child Organizations',
            },
          },
          {
            path: 'evidence',
            component: OrganizationsEvidenceComponent,
            data: {
              breadcrumb: 'Evidence',
            },
          },
          {
            path: 'assertions',
            component: OrganizationsAssertionsComponent,
            data: {
              breadcrumb: 'Assertions',
            },
          },
          {
            path: 'endorsed-assertions',
            component: OrganizationsEndorsedAssertionsComponent,
            data: {
              breadcrumb: 'Endorsed Assertions',
            },
          },
          {
            path: 'activity',
            component: OrganizationsEventsComponent,
            data: {
              breadcrumb: 'Activity',
            },
          },
          {
            path: 'source-suggestions',
            component: OrganizationsSourceSuggestionsComponent,
            data: {
              breadcrumb: 'Source Suggestions',
            },
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
export class OrganizationsRoutingModule {}
