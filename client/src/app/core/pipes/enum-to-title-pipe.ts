import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'enumToTitle',
  pure: true,
})
export class EnumToTitlePipe implements PipeTransform {
  transform(enum_text?: string): string {
    if (enum_text) {
      if (enum_text === 'POSITIVE') {
        return '+'
      }
      if (enum_text === 'NEGATIVE') {
        return '-'
      }

      let str = enum_text.toLowerCase().replace(/_/g, ' ').split(' ')
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
      }
      return str.join(' ')
    } else {
      return ''
    }
  }
}
