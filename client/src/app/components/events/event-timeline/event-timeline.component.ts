import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core'
import { EventTimelineNodeFragment } from '@app/components/events/event-timeline/event-timeline.fragments.gql.generated'
import { EventAction, Maybe } from '@app/generated/civic.apollo.types'
import { EventDisplayOption } from './event-timeline.types'

@Component({
  selector: 'cvc-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcEventTimelineComponent implements OnInit {
  @Input() events!: Maybe<EventTimelineNodeFragment>[]
  @Input() tagDisplay: EventDisplayOption = 'displayAll'
  constructor() {}

  ngOnInit(): void {
    if (this.events === undefined) {
      throw new Error(
        'cvc-event-timeline component requires array of EventTimelineNodeFragment input.'
      )
    }
  }
}
