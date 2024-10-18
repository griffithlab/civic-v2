import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeaturesEventsPage } from './features-events.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [FeaturesEventsPage],
  imports: [CommonModule, CvcActivityFeed],
  exports: [FeaturesEventsPage],
})
export class FeaturesEventsModule {}
