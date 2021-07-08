import { Component, OnInit, Input } from '@angular/core';
import {
  EventAction,
  EventFeedNodeFragment,
  SubscribableEntities
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-event-timeline',
  templateUrl: './event-timeline.component.html',
  styleUrls: ['./event-timeline.component.less']
})
export class EventTimelineComponent implements OnInit {
  @Input() events?: EventFeedNodeFragment[];
  constructor() { }

  ngOnInit(): void {
    if (this.events === undefined) {
      throw new Error('cvc-feed-item component requires array of EventFeedNodeFragment input.')
    }
  }

  iconColorForEventAction(a: EventAction): string {
    // returns status colors for entities that have statuses
    switch (a) {
      case (EventAction.RevisionSuggested):
        return 'orange'
      case (EventAction.RevisionAccepted):
        return 'green'
      case (EventAction.RevisionRejected):
        return 'red'
      case (EventAction.RevisionSuperseded):
        return 'grey'
      case (EventAction.Flagged):
        return 'red'
      case (EventAction.FlagResolved):
        return 'green'
      case (EventAction.AssertionSubmitted):
        return 'orange'
      case (EventAction.AssertionAccepted):
        return 'green'
      case (EventAction.AssertionRejected):
        return 'red'
      case (EventAction.Submitted):
        return 'orange'
      case (EventAction.Accepted):
        return 'green'
      case (EventAction.Rejected):
        return 'red'
      default:
        return 'default'
    }
  }

  iconNameForEventAction(a: EventAction): string {
    switch (a) {
      case (EventAction.Commented):
        return 'civic-comment'
      case (EventAction.RevisionSuggested):
        return 'civic-revision'
      case (EventAction.RevisionAccepted):
        return 'civic-revision'
      case (EventAction.RevisionRejected):
        return 'civic-revision'
      case (EventAction.RevisionSuperseded):
        return 'clear'
      case (EventAction.Flagged):
        return 'flag'
      case (EventAction.FlagResolved):
        return 'flag'
      case (EventAction.AssertionSubmitted):
        return 'plus'
      case (EventAction.AssertionAccepted):
        return 'check-circle'
      case (EventAction.AssertionRejected):
        return 'close-circle'
      case (EventAction.Submitted):
        return 'plus'
      case (EventAction.Accepted):
        return 'check-circle'
      case (EventAction.Rejected):
        return 'close-circle'
      default:
        throw new Error('Not handling all event action types yet')

    }
  }

  verbiageForEvent(e: EventFeedNodeFragment): string {
    switch (e.action) {
      case (EventAction.Commented):
        return 'commented on'
      case (EventAction.RevisionSuggested):
        return 'suggested revision'
      case (EventAction.RevisionAccepted):
        return 'accepted revision'
      case (EventAction.RevisionRejected):
        return 'rejected revision'
      case (EventAction.RevisionSuperseded):
        return 'accepted superseding revision'
      case (EventAction.Flagged):
        return 'opened new flag'
      case (EventAction.FlagResolved):
        return 'resolved flag'
      case (EventAction.AssertionSubmitted):
        return 'submitted assertion'
      case (EventAction.AssertionAccepted):
        return 'accepted assertion'
      case (EventAction.AssertionRejected):
        return 'rejected assertion'
      case (EventAction.Submitted):
        return 'submited evidence item'
      case (EventAction.Accepted):
        return 'accepted evience item'
      case (EventAction.Rejected):
        return 'rejected evidence item'
      default:
        throw new Error('Not handling all event action types yet')
    }
  }

  prepositionForSubject(e: EventFeedNodeFragment): string {
    switch (e.action) {
      case (EventAction.Commented):
        return 'commented on'
      case (EventAction.RevisionSuggested):
        return 'to'
      case (EventAction.RevisionAccepted):
        return 'to'
      case (EventAction.RevisionRejected):
        return 'to'
      case (EventAction.RevisionSuperseded):
        return 'to'
      case (EventAction.Flagged):
        return 'on'
      case (EventAction.FlagResolved):
        return 'on'
      default:
        throw new Error('Not handling all event action types yet')
    }
  }

  commentForFlagEvent(e: EventFeedNodeFragment): string {
    switch (e.originatingObject?.__typename) {
      case ('Flag'):
        if (e.action === EventAction.FlagResolved) {
          if (e.originatingObject.resolutionComment) {
            return e.originatingObject.resolutionComment?.comment
          }
          else {
            return ""
          }
        } else if (e.action === EventAction.Flagged) {
          return e.originatingObject.openComment.comment
        }
        else {
          throw new Error('Event action does not match originating object type')
        }
      default:
        throw new Error('Not handling all event originating object type yet')
    }
  }
}
