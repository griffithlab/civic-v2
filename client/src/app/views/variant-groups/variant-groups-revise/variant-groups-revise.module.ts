import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsReviseRoutingModule } from './variant-groups-revise-routing.module';
import { VariantGroupsReviseView } from './variant-groups-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';


@NgModule({
  declarations: [
    VariantGroupsReviseView
  ],
  imports: [
    CommonModule,
    VariantGroupsReviseRoutingModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    ReactiveComponentModule,
    NzGridModule
  ]
})
export class VariantGroupsReviseModule { }
