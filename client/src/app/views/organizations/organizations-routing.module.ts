import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsAssertionsComponent } from './organizations-assertions/organizations-assertions.component';
import { OrganizationsDetailComponent } from './organizations-detail/organizations-detail.component';
import { OrganizationsEventsComponent } from './organizations-events/organizations-events.component';
import { OrganizationsEvidenceComponent } from './organizations-evidence/organizations-evidence.component';
import { OrganizationsMembersComponent } from './organizations-members/organizations-members.component';

import { OrganizationsComponent } from './organizations.component';

const routes: Routes = [
  {
    path: '',
    component: OrganizationsComponent,
    children: [
      //{ path: '', redirectTo: 'browse', pathMatch: 'full' },
      //{
      //  path: 'browse',
      //  component: OrganizationsBrowseComponent
      //},
      {
        path: ':organizationId',
        component: OrganizationsDetailComponent,
        children: [
          {path: '', redirectTo: 'members', pathMatch: 'full'},
          {
            path: 'members',
            component: OrganizationsMembersComponent
          },
          {
            path: 'evidence',
            component: OrganizationsEvidenceComponent,
          },
          {
            path: 'assertions',
            component: OrganizationsAssertionsComponent,
          },
          {
            path: 'activity',
            component: OrganizationsEventsComponent,
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationsRoutingModule { }
