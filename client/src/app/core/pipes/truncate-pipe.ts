import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'truncate',
    pure: true,
    standalone: false
})
export class TruncatePipe implements PipeTransform {
  constructor() {}

  transform(value: string, length: number = 25): string {
    if (value.length > length) {
      let shortenedString = value.slice(0, length)
      var lastIndex = shortenedString.lastIndexOf(' ')
      return shortenedString.slice(0, lastIndex) + '…'
    } else {
      return value
    }
  }
}
