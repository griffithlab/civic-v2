import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsEventsPage } from './variants-events.page'
import { CvcActivityFeedCard } from '@app/components/activities/activity-feed/activity-feed-card/activity-feed-card.component'

@NgModule({
  declarations: [VariantsEventsPage],
  imports: [CommonModule, CvcActivityFeedCard],
  exports: [VariantsEventsPage],
})
export class VariantsEventsModule {}
