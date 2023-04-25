import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Pipe({
  name: 'typenameToIcon',
  pure: true,
})
export class TypenameToIconPipe implements PipeTransform {
  transform(value: Maybe<string>): string {
    if (!value) return ''
    return `civic-${value.replace(/_/g, '').toLowerCase()}`
  }
}
