import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersEventsComponent } from './users-events.component'
import { CvcActivityFeedComponent } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [UsersEventsComponent],
  imports: [CommonModule, CvcActivityFeedComponent],
})
export class UsersEventsModule {}
