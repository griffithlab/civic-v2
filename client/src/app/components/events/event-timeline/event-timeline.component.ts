import { Component, OnInit, Input } from '@angular/core';
import {
  EventAction,
  EventFeedNodeFragment,
} from '@app/generated/civic.apollo';
import { EventDisplayOption } from '../event-feed/event-feed.component';

@Component({
  selector: 'cvc-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.less']
})
export class CvcEventTimelineComponent implements OnInit {
  @Input() events?: EventFeedNodeFragment[];
  @Input() tagDisplay: EventDisplayOption = "displayAll"
  constructor() { }

  ngOnInit(): void {
    if (this.events === undefined) {
      throw new Error('cvc-feed-item component requires array of EventFeedNodeFragment input.')
    }
  }
}
