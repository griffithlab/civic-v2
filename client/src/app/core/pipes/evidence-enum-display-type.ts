import { Pipe, PipeTransform } from '@angular/core'
import { EvidenceLevel, Maybe } from '@app/generated/civic.apollo'
import {
  formatEvidenceEnum,
  InputEnum,
} from '../utilities/enum-formatters/format-evidence-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name'

export const EvidenceLevelLabelMap = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'Validated association'],
  [EvidenceLevel.B, 'Clinical evidence'],
  [EvidenceLevel.C, 'Case study'],
  [EvidenceLevel.D, 'Preclinical evidence'],
  [EvidenceLevel.E, 'Inferential association'],
])
@Pipe({
  name: 'evidenceEnumDisplay',
  pure: true,
})
export class EvidenceEnumDisplayPipe implements PipeTransform {
  transform(
    value: Maybe<InputEnum | number>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined || value === null) return ''
    if (context === 'display-string') {
      // if number, evidence rating - convert to string, return
      if (typeof value === 'number') return value.toString()
      // single character strings will be evidence levels, return level description
      if (value.length === 1) {
        const label = EvidenceLevelLabelMap.get(value as EvidenceLevel)
        return label || value
      }
      return formatEvidenceEnum(value)
    } else {
      if (typeof value === 'number') {
        return 'star' // numbers will be evidence ratings
      } else if(value.length === 1) { // single char strings are evidence levels
        return `civic-level${value.toLowerCase()}`
      }
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }
}
