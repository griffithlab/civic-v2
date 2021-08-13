import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { CommunityMainComponent } from './community-main/community-main.component';
import { CommunityHomeModule } from './community-home/community-home.module';


@NgModule({
  declarations: [CommunityComponent, CommunityMainComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    CommunityHomeModule,
  ]
})
export class CommunityModule { }
