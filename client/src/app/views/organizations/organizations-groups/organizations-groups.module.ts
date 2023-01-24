import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsGroupsComponent } from './organizations-groups.component';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcOrganizationCardModule } from '@app/components/organizations/organization-card/organization-card.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [OrganizationsGroupsComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSpaceModule,
    NzGridModule,
    NzSpinModule,
    CvcOrganizationCardModule,
  ]
})
export class OrganizationsGroupsModule { }
