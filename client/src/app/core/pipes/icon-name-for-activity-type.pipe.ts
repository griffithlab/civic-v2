import { Pipe, PipeTransform } from '@angular/core'
import { ActivityTypeInput } from '@app/generated/civic.apollo'

@Pipe({
  name: 'iconNameForActivityTypeInput',
  pure: true,
})
export class IconNameForActivityTypeInputPipe implements PipeTransform {
  private iconMap: { [key in ActivityTypeInput]?: string } = {
    [ActivityTypeInput.Comment]: 'civic-comment',
    [ActivityTypeInput.SuggestRevision]: 'civic-revision',
    [ActivityTypeInput.AcceptRevisions]: 'civic-revision',
    [ActivityTypeInput.RejectRevisions]: 'civic-revision',
    [ActivityTypeInput.FlagEntity]: 'civic-flag',
    [ActivityTypeInput.ResolveFlag]: 'civic-flag',
    [ActivityTypeInput.SubmitAssertion]: 'civic-assertion',
    [ActivityTypeInput.ModerateAssertion]: 'civic-assertion',
    [ActivityTypeInput.SubmitEvidenceItem]: 'civic-evidence',
    [ActivityTypeInput.ModerateEvidenceItem]: 'civic-evidence',
    [ActivityTypeInput.SuggestSource]: 'civic-source',
    [ActivityTypeInput.UpdateSourceSuggestion]: 'civic-source',
    [ActivityTypeInput.CreateComplexMolecularProfile]: 'civic-molecularprofile',
    [ActivityTypeInput.DeprecateComplexMolecularProfile]:
      'civic-molecularprofile',
    [ActivityTypeInput.CreateVariant]: 'civic-variant',
    [ActivityTypeInput.DeprecateVariant]: 'civic-variant',
    [ActivityTypeInput.CreateFeature]: 'civic-gene',
    [ActivityTypeInput.DeprecateFeature]: 'civic-gene',
  }

  transform(activityType: ActivityTypeInput): string {
    return this.iconMap[activityType] ?? 'question-circle'
  }
}
