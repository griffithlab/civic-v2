import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core'
import { EventFeedNodeFragment } from '@app/components/events/event-feed/event-feed.gql.generated'
import { EventAction, Maybe } from '@app/generated/civic.apollo.types'
import { EventDisplayOption } from '../event-feed/event-feed.component'

@Component({
  selector: 'cvc-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcEventTimelineComponent implements OnInit {
  @Input() events!: Maybe<EventFeedNodeFragment>[]
  @Input() tagDisplay: EventDisplayOption = 'displayAll'
  constructor() {}

  ngOnInit(): void {
    if (this.events === undefined) {
      throw new Error(
        'cvc-feed-item component requires array of EventFeedNodeFragment input.'
      )
    }
  }
}
