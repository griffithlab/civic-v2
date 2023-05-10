import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'
import { CurationTimelinePage } from './curation-timeline.page'
import { CvcActivityFeedModule } from '@app/components/activities/activity-feed/activity-feed.module'

@NgModule({
  declarations: [CurationTimelinePage],
  imports: [
    CommonModule,
    NzGridModule,
    NzCardModule,
    CvcEventFeedModule,
    CvcActivityFeedModule
  ],
})
export class CurationTimelineModule {}
