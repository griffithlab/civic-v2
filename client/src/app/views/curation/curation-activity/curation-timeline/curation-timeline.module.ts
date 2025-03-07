import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CurationTimelinePage } from './curation-timeline.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'

@NgModule({
  declarations: [CurationTimelinePage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    CvcAutoHeightDivModule,
    CvcActivityFeed,
  ],
})
export class CurationTimelineModule {}
