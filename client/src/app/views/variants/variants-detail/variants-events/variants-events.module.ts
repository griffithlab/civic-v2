import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantsEventsPage } from './variants-events.page'
import { CvcActivityFeedComponent } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [VariantsEventsPage],
  imports: [CommonModule, CvcActivityFeedComponent],
  exports: [VariantsEventsPage],
})
export class VariantsEventsModule {}
