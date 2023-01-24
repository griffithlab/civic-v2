import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsMembersComponent } from './organizations-members.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcUserCardModule } from '@app/components/users/user-card/user-card.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [OrganizationsMembersComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzSpaceModule,
    NzButtonModule,
    NzSpinModule,
    CvcUserCardModule,
  ]
})
export class OrganizationsMembersModule { }
