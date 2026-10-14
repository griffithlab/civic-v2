import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { OrganizationsEventsComponent } from './organizations-events.component'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [OrganizationsEventsComponent],
  imports: [CommonModule, CvcActivityFeed],
})
export class OrganizationsEventsModule {}
