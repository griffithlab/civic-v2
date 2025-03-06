import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'typenameToRoute',
    pure: true,
    standalone: false
})
export class TypenameToRoutePipe implements PipeTransform {
  transform(n: string): string {
    switch (n) {
      case 'Gene':
        return 'genes'
      case 'Feature':
        return 'features'
      case 'Variant':
        return 'variants'
      case 'Assertion':
        return 'assertions'
      case 'EvidenceItem':
        return 'evidence'
      case 'Source':
        return 'sources'
      case 'SourceSuggestion':
        return 'source-suggestions'
      case 'Revision':
        return 'revisions'
      case 'MolecularProfile':
        return 'molecular-profiles'
      default:
        throw new Error('Not handling all typenames yet' + n)
    }
  }
}
