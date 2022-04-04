import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDetailComponent } from './users-detail.component';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { RouterModule } from '@angular/router';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';
import { CvcAvatarUploaderModule } from '@app/components/shared/avatar-uploader/avatar-uploader.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CvcUserProfileFormModule } from '@app/forms/user-profile/user-profile.module';
import { CvcUserCoiFormModule } from '@app/forms/user-coi/user-coi.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcStatsCardModule } from '@app/components/shared/stats-card/stats-card.module';
import { UsersDetailRoutingModule } from './users-detail-routing.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [UsersDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    UsersDetailRoutingModule,
    ReactiveComponentModule,
    NzAlertModule,
    NzGridModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzDescriptionsModule,
    NzCardModule,
    NzDividerModule,
    NzModalModule,
    NzStatisticModule,
    NzIconModule,
    NzTypographyModule,
    NzButtonModule,
    CvcUserCoiFormModule,
    CvcUserProfileFormModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcTabNavigationModule,
    CvcUserAvatarModule,
    CvcAvatarUploaderModule,
    CvcOrganizationTagModule,
    CvcStatsCardModule
  ]
})
export class UsersDetailModule { }
