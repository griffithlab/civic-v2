import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GenesDetailView } from './genes-detail.view';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GenesDetailRoutingModule } from './genes-detail-routing.module';
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module';
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module';
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module';

@NgModule({
  declarations: [GenesDetailView],
  imports: [
    CommonModule,
    GenesDetailRoutingModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,
    CvcTabNavigationModule,
    CvcFlaggableModule,
    CvcContributorAvatarsModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule
  ]
})
export class GenesDetailModule { }
