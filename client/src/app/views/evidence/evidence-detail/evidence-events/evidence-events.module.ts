import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EvidenceEventsPage } from './evidence-events.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [EvidenceEventsPage],
  imports: [CommonModule, CvcActivityFeed],
  exports: [EvidenceEventsPage],
})
export class EvidenceEventsModule {}
