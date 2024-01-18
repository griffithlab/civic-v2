import { NgModule } from '@angular/core'

import { WelcomeRoutingModule } from './welcome-routing.module'

import { WelcomeComponent } from './welcome.component'
import { NzCarouselModule } from 'ng-zorro-antd/carousel'
import { NzStatisticModule } from 'ng-zorro-antd/statistic'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { FormsModule } from '@angular/forms'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcSiteStatsCardModule } from '@app/components/shared/site-stats-card/site-stats-card.module'
import { CvcHomepageEventFeedModule } from '@app/components/events/homepage-event-feed/homepage-event-feed.module'
import { NewsItemListComponent } from './news-item-list/news-item-list.component'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzPipesModule } from 'ng-zorro-antd/pipes'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

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
    NzListModule,
    NzRadioModule,
    NzSpaceModule,
    NzStatisticModule,
    NzTypographyModule,
    NzEmptyModule,
    NzPipesModule,
    NzDividerModule,
    NzIconModule,
    WelcomeRoutingModule,
    CvcSiteStatsCardModule,
    CvcHomepageEventFeedModule,
    CvcActivityFeed,
    NgxJsonViewerModule,
  ],
  declarations: [WelcomeComponent, NewsItemListComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
