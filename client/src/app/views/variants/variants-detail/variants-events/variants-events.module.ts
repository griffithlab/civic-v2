import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsEventsPage } from './variants-events.page'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'

@NgModule({
  declarations: [VariantsEventsPage],
  imports: [CommonModule, CvcEventFeedModule],
  exports: [VariantsEventsPage],
})
export class VariantsEventsModule {}
