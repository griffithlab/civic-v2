import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariantGroupsAddRoutingModule } from './variant-groups-add-routing.module';
import { VariantGroupsAddView } from './variant-groups-add.view';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [
    VariantGroupsAddView
  ],
  imports: [
    CommonModule,
    VariantGroupsAddRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    NzGridModule,
    ReactiveComponentModule
  ]
})
export class VariantGroupsAddModule { }
