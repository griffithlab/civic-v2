import { Pipe, PipeTransform } from '@angular/core'
import { EventAction } from '@app/generated/civic.apollo'

@Pipe({
    name: 'iconNameForEventAction',
    pure: true,
    standalone: false
})
export class IconNameForEventActionPipe implements PipeTransform {
  transform(a: EventAction): string {
    switch (a) {
      case EventAction.Commented:
        return 'civic-comment'
      case EventAction.CommentDeleted:
        return 'civic-comment'
      case EventAction.RevisionSuggested:
        return 'civic-revision'
      case EventAction.RevisionAccepted:
        return 'civic-revision'
      case EventAction.RevisionRejected:
        return 'civic-revision'
      case EventAction.RevisionSuperseded:
        return 'civic-revision'
      case EventAction.Flagged:
        return 'civic-flag'
      case EventAction.FlagResolved:
        return 'civic-flag'
      case EventAction.AssertionSubmitted:
        return 'civic-assertion'
      case EventAction.AssertionAccepted:
        return 'civic-assertion'
      case EventAction.AssertionRejected:
        return 'civic-assertion'
      case EventAction.Submitted:
        return 'civic-evidence'
      case EventAction.Accepted:
        return 'civic-evidence'
      case EventAction.Rejected:
        return 'civic-evidence'
      case EventAction.PublicationSuggested:
        return 'file-add'
      case EventAction.CuratedSourceSuggestion:
        return 'file-add'
      case EventAction.RejectedSourceSuggestion:
        return 'file-add'
      case EventAction.RequeuedSourceSuggestion:
        return 'file-add'
      case EventAction.Reverted:
        return 'civic-evidence'
      case EventAction.AssertionReverted:
        return 'civic-assertion'
      case EventAction.DeprecatedVariant:
        return 'civic-variant'
      case EventAction.DeprecatedFeature:
        return 'civic-feature'
      case EventAction.FeatureCreated:
        return 'civic-feature'
      case EventAction.DeprecatedMolecularProfile:
        return 'civic-molecularprofile'
      case EventAction.ComplexMolecularProfileCreated:
        return 'civic-molecularprofile'
      case EventAction.VariantCreated:
        return 'civic-variant'
      default:
        return a
    }
  }
}
