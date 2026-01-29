import { NgModule } from '@angular/core'

import { WelcomeRoutingModule } from './welcome-routing.module'

import { WelcomeComponent } from './welcome.component'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { FormsModule } from '@angular/forms'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcSiteStatsCardModule } from '@app/components/shared/site-stats-card/site-stats-card.module'
import { CvcHomepageEventFeedModule } from '@app/components/events/homepage-event-feed/homepage-event-feed.module'
import { NewsItemListComponent } from './news-item-list/news-item-list.component'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzPipesModule } from 'ng-zorro-antd/pipes'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcWelcomeBannerComponent } from '@app/views/welcome/banners/welcome-banner/welcome-banner.component'
import { CvcDiscoverBannerComponent } from '@app/views/welcome/banners/discover-banner/discover-banner.component'
import { CvcLicenseBannerComponent } from '@app/views/welcome/banners/license-banner/license-banner.component'
import { CvcContributeBannerComponent } from '@app/views/welcome/banners/contribute-banner/contribute-banner.component'
import { CvcEditorBannerComponent } from '@app/views/welcome/banners/editor-banner/editor-banner.component'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzGridModule,
    NzCarouselModule,
    NzCardModule,
    NzCheckboxModule,
    NzListModule,
    NzRadioModule,
    NzStatisticModule,
    NzTypographyModule,
    NzEmptyModule,
    NzPipesModule,
    NzPopoverModule,
    NzDividerModule,
    NzIconModule,
    NzSelectModule,
    NzSkeletonModule,
    WelcomeRoutingModule,
    CvcAutoHeightDivModule,
    CvcAutoHeightCardModule,
    CvcSiteStatsCardModule,
    CvcHomepageEventFeedModule,
    CvcActivityFeed,
    CvcWelcomeBannerComponent,
    CvcDiscoverBannerComponent,
    CvcLicenseBannerComponent,
    CvcContributeBannerComponent,
    CvcEditorBannerComponent,
  ],
  declarations: [WelcomeComponent, NewsItemListComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
