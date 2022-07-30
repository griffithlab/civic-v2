import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MolecularProfilesReviseView } from './molecular-profiles-revise.view';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MolecularProfilesReviseRoutingModule } from './molecular-profiles-routing.module';


@NgModule({
  declarations: [MolecularProfilesReviseView],
  imports: [
    CommonModule,
    MolecularProfilesReviseRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    ReactiveComponentModule,
    NzGridModule
  ]
})
export class MolecularProfilesReviseModule { }
