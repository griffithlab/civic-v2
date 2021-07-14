import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityMainComponent } from './community-main/community-main.component';
import { IconsProviderModule } from '@app/icons-provider.module';


@NgModule({
  declarations: [CommunityComponent, CommunityMainComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    IconsProviderModule
  ]
})
export class CommunityModule { }
