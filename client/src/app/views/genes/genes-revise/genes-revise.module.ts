import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesReviseView } from './genes-revise.view';
import { RouterModule } from '@angular/router';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GenesReviseRoutingModule } from './genes-revise-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';

@NgModule({
  declarations: [GenesReviseView],
  imports: [
    CommonModule,
    GenesReviseRoutingModule,
    RouterModule,
    CvcSectionNavigationModule,
    NzPageHeaderModule,
    NzIconModule,
    ReactiveComponentModule,
    NzGridModule,
    CvcLoginPromptModule
  ]
})
export class GenesReviseModule { }
