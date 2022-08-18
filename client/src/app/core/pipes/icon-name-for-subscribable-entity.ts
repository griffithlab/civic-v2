import { Pipe, PipeTransform } from '@angular/core';
import { SubscribableEntities } from '@app/generated/civic.apollo';

@Pipe({
  name: 'iconNameForSubscribableEntity',
  pure: true,
})
export class IconNameForSubscribableEntity implements PipeTransform {
  transform(e: SubscribableEntities | string): string {
    switch (e) {
      case 'ASSERTION':
      case 'Assertion':
      case SubscribableEntities.Assertion:
        return 'civic-assertion';
      case 'EVIDENCE_ITEM':
      case 'EvidenceItem':
      case SubscribableEntities.EvidenceItem:
        return 'civic-evidence';
      case 'GENE':
      case 'Gene':
      case SubscribableEntities.Gene:
        return 'civic-gene';
      case SubscribableEntities.Revision:
      case 'REVISION':
      case 'Revision':
        return 'civic-revision';
      case SubscribableEntities.Variant:
      case 'VARIANT':
      case 'Variant':
        return 'civic-variant';
      case SubscribableEntities.VariantGroup:
      case 'VARIANT_GROUP':
      case 'VariantGroup':
        return 'civic-variant-group';
      case SubscribableEntities.MolecularProfile:
      case 'MOLECULAR_PROFILE':
      case 'MolecularProfile':
        return 'civic-molecularprofile';
      default:
        console.log('String No icon name found for ' + e);
        return 'border-outer';
    }
  }
}
