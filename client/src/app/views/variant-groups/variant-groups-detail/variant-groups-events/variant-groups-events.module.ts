import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantGroupsEventsPage } from './variant-groups-events.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [VariantGroupsEventsPage],
  imports: [CommonModule, CvcActivityFeed],
  exports: [VariantGroupsEventsPage],
})
export class VariantGroupsEventsModule {}
