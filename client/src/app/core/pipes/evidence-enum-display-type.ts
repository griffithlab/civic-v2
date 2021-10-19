import { Pipe, PipeTransform } from '@angular/core';
import { Maybe, EvidenceClinicalSignificance, EvidenceDirection, EvidenceType, VariantOrigin } from '@app/generated/civic.apollo';
import { formatEvidenceEnum } from '../utilities/enum-formatters/format-evidence-enum';

export type EnumOutputStyle = 'display-string' | 'icon-name'

export type InputEnum = EvidenceClinicalSignificance | EvidenceDirection | EvidenceType  | VariantOrigin

@Pipe({
  name: 'evidenceEnumDisplay',
  pure: true
})
export class EvidenceEnumDisplayPipe implements PipeTransform {
  transform(value: Maybe<InputEnum>, context: EnumOutputStyle = 'display-string') : string {
    if(value === undefined) return ''
    if (context === 'display-string') {
      return formatEvidenceEnum(value);
      // return this.formatString(value)
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }

}
