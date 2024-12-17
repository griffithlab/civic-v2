import { Pipe, PipeTransform } from '@angular/core'
import { CvcInputEnum } from '@app/forms/forms.types'
import { AmpLevel, Maybe } from '@app/generated/civic.apollo'

export type AmpDisplayFormat = 'verbose' | 'compact'

@Pipe({
  name: 'formatAmp',
  pure: true,
  standalone: false,
})
export class AmpFormatPipe implements PipeTransform {
  transform(
    level: Maybe<AmpLevel> | CvcInputEnum,
    format: AmpDisplayFormat
  ): string {
    if (level) {
      if (format == 'verbose') {
        if (level === 'TIER_I_LEVEL_A') return 'Tier I - Level A'
        if (level === 'TIER_I_LEVEL_B') return 'Tier I - Level B'
        if (level === 'TIER_II_LEVEL_C') return 'Tier II - Level C'
        if (level === 'TIER_II_LEVEL_D') return 'Tier II - Level D'
        if (level === 'TIER_III') return 'Tier III'
        if (level === 'TIER_IV') return 'Tier IV'
        return 'Not Applicable'
      } else {
        return level
          .toUpperCase()
          .replace('TIER', '')
          .replace('LEVEL', '')
          .replace(/ /g, '')
          .replace(/_/g, '')
      }
    } else {
      return ''
    }
  }
}
