import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'truncate',
  pure: true
})
export class TruncatePipe implements PipeTransform {
  constructor() { }

  transform(value: string, length: number = 25): string {
    if (value.length > length) {
      let shortenedString = value.slice(0, length)
      var lastIndex = shortenedString.lastIndexOf(' ');
      return shortenedString.slice(0, lastIndex + 1) + '...'
    }
    else {
      return value
    }
  }
}