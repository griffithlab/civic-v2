import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import {
  formatEvidenceEnum,
  InputEnum,
} from '../utilities/enum-formatters/format-evidence-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name'

@Pipe({
  name: 'evidenceEnumDisplay',
  pure: true,
})
export class EvidenceEnumDisplayPipe implements PipeTransform {
  transform(
    value: Maybe<InputEnum>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined || value === null ) return ''
    if (typeof value === 'number') return value
    if (context === 'display-string') {
      // return single character values w/o formatting,
      // handles rating ([1..5]), level ([A..B])
      if (value.length === 1) {
        return value
      }
      return formatEvidenceEnum(value)
      // return this.formatString(value)
    } else {
      if (value.toString().length === 1) {
        return 'tag'
      }
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }
}
