import { Pipe, PipeTransform } from '@angular/core'
import { Maybe, SourceSuggestionStatus } from '@app/generated/civic.apollo'
import { formatSourceSuggestionStatusEnum } from '../utilities/enum-formatters/format-source-suggestion-status-enum'

export type EnumOutputStyle = 'display-string' | 'icon-name'

@Pipe({
  name: 'sourceSuggestionStatusEnumDisplay',
  pure: true,
  standalone: false,
})
export class SourceSuggestionStatusEnumDisplay implements PipeTransform {
  transform(
    value: Maybe<SourceSuggestionStatus>,
    context: EnumOutputStyle = 'display-string'
  ): string {
    if (value === undefined) return ''
    if (context === 'display-string') {
      return formatSourceSuggestionStatusEnum(value)
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }
}
