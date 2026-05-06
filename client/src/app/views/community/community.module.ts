import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CommunityRoutingModule } from './community-routing.module'
import { CommunityComponent } from './community.component'
import { CommunityHomeModule } from './community-home/community-home.module'
import { CommunityMainModule } from './community-main/community-main.module'

@NgModule({
  declarations: [CommunityComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    CommunityHomeModule,
    CommunityMainModule,
  ],
})
export class CommunityModule {}
