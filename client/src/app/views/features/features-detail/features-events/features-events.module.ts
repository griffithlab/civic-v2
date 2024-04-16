import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeaturesEventsPage } from './features-events.page'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'

@NgModule({
  declarations: [FeaturesEventsPage],
  imports: [CommonModule, CvcEventFeedModule],
  exports: [FeaturesEventsPage],
})
export class FeaturesEventsModule {}
