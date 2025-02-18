import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Pipe({
  name: 'ifEmpty',
  pure: true,
  standalone: false,
})
export class IfEmptyPipe implements PipeTransform {
  transform(input: any, defaultValue: string): string {
    if (input === undefined || input === null || input === '') {
      return defaultValue
    }

    return input
  }
}
