import { Pipe, PipeTransform } from '@angular/core';
import { EventAction } from '@app/generated/civic.apollo';

export type EventVerbiageContext = 'feed' | 'contributor-card'

@Pipe({
  name: 'eventVerbiage',
  pure: true
})
export class EventVerbiagePipe implements PipeTransform {
  transform(value: EventAction, context: EventVerbiageContext = 'contributor-card') : string {
    if (context === 'contributor-card') {
      return this.contributorVerbiage(value);
    } else {
      return this.eventFeedVerbiage(value)
    }
  }

  eventFeedVerbiage(a: EventAction): string {
    switch (a) {
      case (EventAction.Commented):
        return 'added comment'
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
        return 'submitted evidence item'
      case (EventAction.Accepted):
        return 'accepted evidence item'
      case (EventAction.Rejected):
        return 'rejected evidence item'
      default:
        throw new Error('Not handling all event action types yet')
    }

  }

  private contributorVerbiage(a: EventAction): string {
    switch (a) {
      case (EventAction.Commented):
        return 'commented on this entity'
      case (EventAction.RevisionSuggested):
        return 'suggested a revision to this entity'
      case (EventAction.RevisionAccepted):
        return 'accepted a revision on this entity'
      case (EventAction.RevisionRejected):
        return 'rejected a revision to this entity'
      case (EventAction.RevisionSuperseded):
        return 'accepted a superseding revision on this entity'
      case (EventAction.Flagged):
        return 'opened new flag on this entity'
      case (EventAction.FlagResolved):
        return 'resolved a flag on this entity'
      case (EventAction.AssertionSubmitted):
        return 'submitted this assertion'
      case (EventAction.AssertionAccepted):
        return 'accepted this assertion'
      case (EventAction.AssertionRejected):
        return 'rejected this assertion'
      case (EventAction.Submitted):
        return 'submitted this evidence item'
      case (EventAction.Accepted):
        return 'accepted this evidence item'
      case (EventAction.Rejected):
        return 'rejected this evidence item'
      default:
        throw new Error('Not handling all event action types yet')
    }

  }
}