import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MolecularProfilesEventsPage } from './molecular-profiles-events.page'
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module'

@NgModule({
  declarations: [MolecularProfilesEventsPage],
  imports: [CommonModule, CvcEventFeedModule],
  exports: [MolecularProfilesEventsPage],
})
export class MolecularProfilesEventsModule {}
