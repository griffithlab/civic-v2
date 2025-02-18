import { Pipe, PipeTransform } from '@angular/core'
import { EvidenceLevel, Maybe } from '@app/generated/civic.apollo'
import {
  formatEvidenceEnum,
  InputEnum,
} from '../utilities/enum-formatters/format-evidence-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name' | 'short-string'

export const EvidenceLevelLabelMap = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'Validated association'],
  [EvidenceLevel.B, 'Clinical evidence'],
  [EvidenceLevel.C, 'Case study'],
  [EvidenceLevel.D, 'Preclinical evidence'],
  [EvidenceLevel.E, 'Inferential association'],
])
export const EvidenceRatingLabelMap = new Map<number, string>([
  [1, 'One Star'],
  [2, 'Two Stars'],
  [3, 'Three Stars'],
  [4, 'Four Stars'],
  [5, 'Five Stars'],
])
@Pipe({
  name: 'evidenceEnumDisplay',
  pure: true,
  standalone: false,
})
export class EvidenceEnumDisplayPipe implements PipeTransform {
  transform(
    value: Maybe<InputEnum | number>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined || value === null) return ''
    // if short string requested, and length is === 1, return string.
    // This is to return 1-5 numerals for ratings, and A-E chars for levels
    if (context === 'short-string' && value.toString().length === 1) {
      let label = typeof value === 'string' ? value : value.toString()
      return label
    }
    if (context === 'icon-name') {
      if (typeof value === 'number') {
        return `civic-rating${value}` // numbers will be evidence ratings
      } else if (value.length === 1) {
        // single char strings are evidence levels
        return `civic-level${value.toLowerCase()}`
      }
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
    // if number, evidence rating - convert to string, return
    if (typeof value === 'number') {
      const label = EvidenceRatingLabelMap.get(value)
      return label || value.toString()
    }
    // single character strings will be evidence levels, return level description
    if (value.length === 1) {
      const label = EvidenceLevelLabelMap.get(value as EvidenceLevel)
      return label || value
    }
    return formatEvidenceEnum(value)
  }
}
