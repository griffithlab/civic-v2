import { Pipe, PipeTransform } from '@angular/core'
import { Maybe, EvidenceLevel } from '@app/generated/civic.apollo'
import { formatEvidenceLevelEnum } from '../utilities/enum-formatters/format-evidence-level-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name'

export type InputEnum = EvidenceLevel

@Pipe({
    name: 'evidenceLevelDisplay',
    pure: true,
    standalone: false
})
export class EvidenceLevelDisplayPipe implements PipeTransform {
  transform(
    value: Maybe<EvidenceLevel>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined) return ''
    if (context === 'display-string') {
      return formatEvidenceLevelEnum(value)
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }
}
