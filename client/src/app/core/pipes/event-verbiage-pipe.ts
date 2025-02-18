import { Pipe, PipeTransform } from '@angular/core'
import { EventAction, Maybe } from '@app/generated/civic.apollo'

export type EventVerbiageContext = 'feed' | 'contributor-card' | 'action-filter'

@Pipe({
  name: 'eventVerbiage',
  pure: true,
  standalone: false,
})
export class EventVerbiagePipe implements PipeTransform {
  transform(
    value: EventAction,
    context: EventVerbiageContext = 'contributor-card',
    count: number = 0
  ): string {
    if (context === 'contributor-card') {
      return this.contributorVerbiage(value, count)
    } else if (context === 'action-filter') {
      return this.actionFilterVerbiage(value)
    } else {
      return this.eventFeedVerbiage(value)
    }
  }

  eventFeedVerbiage(a: EventAction): string {
    switch (a) {
      case EventAction.Commented:
        return 'added comment'
      case EventAction.RevisionSuggested:
        return 'suggested revision'
      case EventAction.RevisionAccepted:
        return 'accepted revision'
      case EventAction.RevisionRejected:
        return 'rejected revision'
      case EventAction.RevisionSuperseded:
        return 'closed revision'
      case EventAction.Flagged:
        return 'opened new flag'
      case EventAction.FlagResolved:
        return 'resolved flag'
      case EventAction.AssertionSubmitted:
        return 'submitted assertion'
      case EventAction.AssertionAccepted:
        return 'accepted assertion'
      case EventAction.AssertionRejected:
        return 'rejected assertion'
      case EventAction.Submitted:
        return 'submitted evidence item'
      case EventAction.Accepted:
        return 'accepted evidence item'
      case EventAction.Rejected:
        return 'rejected evidence item'
      case EventAction.PublicationSuggested:
        return 'created source suggestion'
      case EventAction.CuratedSourceSuggestion:
        return 'finished curating source suggestion'
      case EventAction.RejectedSourceSuggestion:
        return 'rejected source suggestion'
      case EventAction.RequeuedSourceSuggestion:
        return 'requeued source suggestion'
      case EventAction.Reverted:
        return 'reverted evidence item'
      case EventAction.AssertionReverted:
        return 'reverted assertion'
      case EventAction.DeprecatedVariant:
        return 'deprecated variant'
      case EventAction.DeprecatedFeature:
        return 'deprecated feature'
      case EventAction.DeprecatedMolecularProfile:
        return 'deprecated molecular profile'
      case EventAction.VariantCreated:
        return 'created variant'
      case EventAction.FeatureCreated:
        return 'created feature'
      case EventAction.ComplexMolecularProfileCreated:
        return 'created complex molecular profile'
      case EventAction.CommentDeleted:
        return 'deleted comment'
      default:
        return a
    }
  }

  actionFilterVerbiage(a: EventAction): string {
    switch (a) {
      case EventAction.Commented:
        return 'commented'
      case EventAction.RevisionSuggested:
        return 'revision suggested'
      case EventAction.RevisionAccepted:
        return 'revision accepted'
      case EventAction.RevisionRejected:
        return 'revision rejected'
      case EventAction.RevisionSuperseded:
        return 'revision closed'
      case EventAction.Flagged:
        return 'flag opened'
      case EventAction.FlagResolved:
        return 'flag resolved'
      case EventAction.AssertionSubmitted:
        return 'assertion submitted'
      case EventAction.AssertionAccepted:
        return 'assertion accepted'
      case EventAction.AssertionRejected:
        return 'assertion rejected'
      case EventAction.Submitted:
        return 'evidence item submitted'
      case EventAction.Accepted:
        return 'evidence item accepted'
      case EventAction.Rejected:
        return 'evidence item rejected'
      case EventAction.PublicationSuggested:
        return 'source suggestion created'
      case EventAction.CuratedSourceSuggestion:
        return 'source suggestion curated'
      case EventAction.RejectedSourceSuggestion:
        return 'source suggestion rejected'
      case EventAction.RequeuedSourceSuggestion:
        return 'source suggestion requeued'
      case EventAction.Reverted:
        return 'evidence item reverted'
      case EventAction.AssertionReverted:
        return 'assertion reverted'
      case EventAction.DeprecatedVariant:
        return 'variant deprecated'
      case EventAction.DeprecatedMolecularProfile:
        return 'molecular profile deprecated'
      case EventAction.VariantCreated:
        return 'variant created'
      case EventAction.ComplexMolecularProfileCreated:
        return 'complex molecular profile created'
      case EventAction.CommentDeleted:
        return 'comment deleted'
      default:
        return a
    }
  }

  private contributorVerbiage(a: EventAction, count: Maybe<number>): string {
    switch (a) {
      case EventAction.Commented:
        return count == 1
          ? 'left a comment on this entity'
          : `left ${count} comments on this entity`
      case EventAction.RevisionSuggested:
        return count == 1
          ? 'suggested a revision to this entity'
          : `suggested ${count} revisions on this entity`
      case EventAction.RevisionAccepted:
        return count == 1
          ? 'accepted a revision to this entity'
          : `accepted ${count} revisions on this entity`
      case EventAction.RevisionRejected:
        return count == 1
          ? 'rejected a revision to this entity'
          : `rejected ${count} revisions on this entity`
      case EventAction.RevisionSuperseded:
        return count == 1
          ? 'closed a revision to this entity'
          : `closed ${count} revisions on this entity`
      case EventAction.Flagged:
        return count == 1
          ? 'opened new flag on this entity'
          : `opened ${count} new flags on this entity`
      case EventAction.FlagResolved:
        return count == 1
          ? 'resolved a flag on this entity'
          : `resolved ${count} flags on this entity`
      case EventAction.AssertionSubmitted:
        return 'submitted this assertion'
      case EventAction.AssertionAccepted:
        return 'accepted this assertion'
      case EventAction.AssertionRejected:
        return 'rejected this assertion'
      case EventAction.Submitted:
        return 'submitted this evidence item'
      case EventAction.Accepted:
        return 'accepted this evidence item'
      case EventAction.Rejected:
        return 'rejected this evidence item'
      case EventAction.PublicationSuggested:
        return ''
      case EventAction.CuratedSourceSuggestion:
        return 'finished curating this source suggestion'
      case EventAction.RejectedSourceSuggestion:
        return 'rejected this source suggestion'
      case EventAction.RequeuedSourceSuggestion:
        return 'requeued this source suggestion'
      case EventAction.AssertionReverted:
        return 'reverted this assertion'
      case EventAction.Reverted:
        return 'reverted this evidence item'
      case EventAction.DeprecatedVariant:
        return 'deprecated this variant'
      case EventAction.DeprecatedMolecularProfile:
        return 'deprecated this molecular profile'
      case EventAction.DeprecatedFeature:
        return 'deprecated this feature'
      case EventAction.FeatureCreated:
        return 'created this feature'
      case EventAction.VariantCreated:
        return 'created this variant'
      case EventAction.ComplexMolecularProfileCreated:
        return 'created this complex molecular profile'
      default:
        return a
    }
  }
}
