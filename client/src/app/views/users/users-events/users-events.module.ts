import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcEventFeedModule } from '@app/components/events/event-feed/event-feed.module';
import { UsersEventsComponent } from './users-events.component';

@NgModule({
  declarations: [UsersEventsComponent],
  imports: [
    CommonModule,
    CvcEventFeedModule,
  ]
})
export class UsersEventsModule { }
