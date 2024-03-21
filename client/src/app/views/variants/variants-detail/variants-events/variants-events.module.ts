import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsEventsPage } from './variants-events.page'
import { CvcActivityFeedModule } from '@app/components/activities/activity-feed/activity-feed.module'

@NgModule({
  declarations: [VariantsEventsPage],
  imports: [CommonModule, CvcActivityFeedModule],
  exports: [VariantsEventsPage],
})
export class VariantsEventsModule {}
