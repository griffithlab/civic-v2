import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionsEventsPage } from './assertions-events.page';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';

@NgModule({
  declarations: [AssertionsEventsPage],
  imports: [CommonModule, CvcEventFeedModule],
  exports: [AssertionsEventsPage],
})
export class AssertionsEventsModule {}
