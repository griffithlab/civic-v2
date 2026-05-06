import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AssertionsEventsPage } from './assertions-events.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [AssertionsEventsPage],
  imports: [CommonModule, CvcActivityFeed],
  exports: [AssertionsEventsPage],
})
export class AssertionsEventsModule {}
