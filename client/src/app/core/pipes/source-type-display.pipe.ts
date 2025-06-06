import { Pipe, PipeTransform } from '@angular/core'
import { SourceSource } from '@app/generated/civic.apollo'
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import { Maybe } from 'graphql/jsutils/Maybe'

@Pipe({
    name: 'sourceTypeDisplay',
    pure: true,
    standalone: false
})
export class SourceTypeDisplayPipe implements PipeTransform {
  transform(value: Maybe<SourceSource>): string {
    if (!value) return ''
    return formatSourceTypeEnum(value)
  }
}
