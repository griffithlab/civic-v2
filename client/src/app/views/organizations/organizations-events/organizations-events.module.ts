import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrganizationsEventsComponent } from './organizations-events.component'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'
import { CvcActivityFeedModule } from '@app/components/activities/activity-feed/activity-feed.module'

@NgModule({
  declarations: [OrganizationsEventsComponent],
  imports: [CommonModule, CvcEventFeedModule, CvcActivityFeedModule],
})
export class OrganizationsEventsModule {}
