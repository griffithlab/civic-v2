import { Pipe, PipeTransform } from '@angular/core'
import { Maybe, TherapyInteraction } from '@app/generated/civic.apollo'
import { formatTherapyInteractionEnum } from '../utilities/enum-formatters/format-therapy-interaction-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name'

@Pipe({
    name: 'therapyInteractionEnumDisplay',
    pure: true,
    standalone: false
})
export class TherapyInteractionEnumDisplayPipe implements PipeTransform {
  transform(
    value: Maybe<TherapyInteraction>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined) return ''
    if (context === 'display-string') {
      return formatTherapyInteractionEnum(value)
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }
}
