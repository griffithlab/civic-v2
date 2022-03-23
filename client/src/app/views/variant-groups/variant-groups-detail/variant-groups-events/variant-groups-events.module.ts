import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsEventsPage } from './variant-groups-events.page';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';


@NgModule({
  declarations: [VariantGroupsEventsPage],
  imports: [
    CommonModule,
    CvcEventFeedModule
  ],
  exports: [VariantGroupsEventsPage]
})
export class VariantGroupsEventsModule { }
