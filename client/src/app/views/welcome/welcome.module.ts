import { NgModule } from '@angular/core'

import { WelcomeRoutingModule } from './welcome-routing.module'

import { WelcomeComponent } from './welcome.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcSiteStatsCardModule } from '@app/components/shared/site-stats-card/site-stats-card.module'
import { HomepageNewsItemsComponent } from './news-item-list/news-item-list.component'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcWelcomeBannerComponent } from '@app/views/welcome/banners/welcome-banner/welcome-banner.component'
import { CvcDiscoverBannerComponent } from '@app/views/welcome/banners/discover-banner/discover-banner.component'
import { CvcLicenseBannerComponent } from '@app/views/welcome/banners/license-banner/license-banner.component'
import { CvcContributeBannerComponent } from '@app/views/welcome/banners/contribute-banner/contribute-banner.component'
import { CvcEditorBannerComponent } from '@app/views/welcome/banners/editor-banner/editor-banner.component'
import { CvcAiBannerComponent } from '@app/views/welcome/banners/ai-banner/ai-banner.component'
import { NewsItemListComponent } from '@app/components/news/news-item-list/news-item-list.component'

@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzTypographyModule,
    WelcomeRoutingModule,
    CvcAutoHeightDivModule,
    CvcSiteStatsCardModule,
    CvcActivityFeed,
    NewsItemListComponent,
    CvcWelcomeBannerComponent,
    CvcDiscoverBannerComponent,
    CvcLicenseBannerComponent,
    CvcContributeBannerComponent,
    CvcEditorBannerComponent,
    CvcAiBannerComponent,
  ],
  declarations: [WelcomeComponent, HomepageNewsItemsComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
