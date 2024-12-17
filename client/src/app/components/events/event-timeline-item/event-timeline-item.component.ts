import { Component, OnInit, Input } from '@angular/core'
import { EventFeedNodeFragment } from '@app/generated/civic.apollo'
import { EventDisplayOption } from '../event-feed/event-feed.component'

@Component({
  selector: 'cvc-event-timeline-item',
  templateUrl: './event-timeline-item.component.html',
  standalone: false,
})
export class CvcEventTimelineItemComponent implements OnInit {
  @Input() event!: EventFeedNodeFragment
  @Input() tagDisplay: EventDisplayOption = 'displayAll'
  constructor() {}

  ngOnInit(): void {
    if (this.event === undefined) {
      throw new Error(
        'cvc-timeline-item component requires an EventFeedNodeFragment input.'
      )
    }
  }
}
