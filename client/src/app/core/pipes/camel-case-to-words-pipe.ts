import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'camelToWords',
  pure: true,
  standalone: false,
})
export class CamelCaseToWordPipe implements PipeTransform {
  transform(word: string): string {
    if (word) {
      return word.replace(/([a-z])([A-Z])/g, '$1 $2')
    } else {
      return ''
    }
  }
}
