import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesEventsPage } from './genes-events.page';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';


@NgModule({
  declarations: [GenesEventsPage],
  imports: [
    CommonModule,
    CvcEventFeedModule
  ],
  exports: [GenesEventsPage]
})
export class GenesEventsModule { }
