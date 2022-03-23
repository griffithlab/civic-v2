import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsDetailRoutingModule } from './variant-groups-detail-routing.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';
import { VariantGroupsDetailView } from './variant-groups-detail.view';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';

@NgModule({
  declarations: [VariantGroupsDetailView],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    VariantGroupsDetailRoutingModule,
    NzGridModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzSpaceModule,
    CvcFlaggableModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcTabNavigationModule,
    CvcContributorAvatarsModule,
  ]
})
export class VariantGroupsDetailModule { }
