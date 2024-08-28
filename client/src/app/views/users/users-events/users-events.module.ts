import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersEventsComponent } from './users-events.component'
import { CvcActivityFeedModule } from '@app/components/activities/activity-feed/activity-feed.module'

@NgModule({
  declarations: [UsersEventsComponent],
  imports: [CommonModule, CvcActivityFeedModule],
})
export class UsersEventsModule {}
