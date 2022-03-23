import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceEventsPage } from './evidence-events.page';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';


@NgModule({
  declarations: [EvidenceEventsPage],
  imports: [
    CommonModule,
    CvcEventFeedModule
  ],
  exports: [EvidenceEventsPage]
})
export class EvidenceEventsModule { }
