import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MolecularProfilesEventsPage } from './molecular-profiles-events.page'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'

@NgModule({
  declarations: [MolecularProfilesEventsPage],
  imports: [CommonModule, CvcActivityFeed],
  exports: [MolecularProfilesEventsPage],
})
export class MolecularProfilesEventsModule {}
