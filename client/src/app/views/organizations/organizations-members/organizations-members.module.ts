import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsMembersComponent } from './organizations-members.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcUserCardModule } from '@app/components/users/user-card/user-card.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [OrganizationsMembersComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    CvcUserCardModule,
  ]
})
export class OrganizationsMembersModule { }
