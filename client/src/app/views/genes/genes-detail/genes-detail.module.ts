import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { CvcContributorAvatarsModule } from '@app/components/shared/contributor-avatars/contributor-avatars.module'
import { CvcEntitySubscriptionButtonModule } from '@app/components/shared/entity-subscription-button/entity-subscription-button.module'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { CvcTabNavigationModule } from '@app/components/shared/tab-navigation/tab-navigation.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { GenesDetailRoutingModule } from './genes-detail-routing.module'
import { GenesDetailView } from './genes-detail.view'

@NgModule({
  declarations: [GenesDetailView],
  imports: [
    CommonModule,
    GenesDetailRoutingModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTypographyModule,
    NzGridModule,
    CvcPipesModule,
    CvcTabNavigationModule,
    CvcFlaggableModule,
    CvcContributorAvatarsModule,
    CvcSectionNavigationModule,
    CvcEntitySubscriptionButtonModule,
    CvcEventFeedModule,
  ],
})
export class GenesDetailModule {}
