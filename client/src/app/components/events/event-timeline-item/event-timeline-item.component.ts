import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core'
import { EventFeedNodeFragment } from '@app/components/events/event-feed/event-feed.gql.generated'
import { EventDisplayOption } from '../event-feed/event-feed.component'

@Component({
  selector: 'cvc-event-timeline-item',
  templateUrl: './event-timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
