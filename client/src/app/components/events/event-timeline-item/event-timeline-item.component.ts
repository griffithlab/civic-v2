import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core'
import { EventTimelineNodeFragment } from '@app/components/events/event-timeline/event-timeline.fragments.gql.generated'
import { EventDisplayOption } from '../event-timeline/event-timeline.types'

@Component({
  selector: 'cvc-event-timeline-item',
  templateUrl: './event-timeline-item.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcEventTimelineItemComponent implements OnInit {
  @Input() event!: EventTimelineNodeFragment
  @Input() tagDisplay: EventDisplayOption = 'displayAll'
  constructor() {}

  ngOnInit(): void {
    if (this.event === undefined) {
      throw new Error(
        'cvc-timeline-item component requires an EventTimelineNodeFragment input.'
      )
    }
  }
}
