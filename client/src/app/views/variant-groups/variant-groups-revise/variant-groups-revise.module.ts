import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { VariantGroupsReviseRoutingModule } from './variant-groups-revise-routing.module';
import { VariantGroupsReviseView } from './variant-groups-revise.view';

@NgModule({
  declarations: [VariantGroupsReviseView],
  imports: [
    CommonModule,
    VariantGroupsReviseRoutingModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    ReactiveComponentModule,
    NzGridModule
  ]
})
export class VariantGroupsReviseModule { }
