
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typenameToRoute',
  pure: true
})
export class TypenameToRoutePipe implements PipeTransform {
  transform(n: string) : string {
    switch (n) {
      case ('Gene'):
        return 'genes'
      case ('Variant'):
        return 'variants'
      case ('Assertion'):
        return 'assertions'
      case ('EvidenceItem'):
        return 'evidence'
      case ('Source'):
        return 'sources'
      case ('SourceSuggestion'):
        return 'source-suggestions'
      default:
        throw new Error('Not handling all typenames yet' + n)
    }
  }
}