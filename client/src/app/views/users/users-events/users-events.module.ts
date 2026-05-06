import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersEventsComponent } from './users-events.component'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [UsersEventsComponent],
  imports: [CommonModule, CvcActivityFeed],
})
export class UsersEventsModule {}
