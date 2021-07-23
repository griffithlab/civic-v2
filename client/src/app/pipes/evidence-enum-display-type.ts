import { Pipe, PipeTransform } from '@angular/core';
import { EventAction, EvidenceClinicalSignificance, EvidenceDirection, EvidenceType, VariantOrigin } from '@app/generated/civic.apollo';

export type EnumOutputStyle = 'display-string' | 'icon-name'

export type InputEnum = EvidenceClinicalSignificance | EvidenceDirection | EvidenceType  | VariantOrigin

@Pipe({
  name: 'evidenceEnumDisplay',
  pure: true
})
export class EvidenceEnumDisplayPipe implements PipeTransform {
  transform(value: InputEnum, context: EnumOutputStyle = 'display-string') : string {
    if (context === 'display-string') {
      return this.formatString(value)
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`
    }
  }

  formatString(enumValue: string): string {
    let str: string[]
    if(enumValue === 'NA') {
      str = ['N/A']
    } else if (enumValue === 'SENSITIVITYRESPONSE') {
      str = ['Sensitivity', '/', 'Response']
    } else {
      str = enumValue.toLowerCase()
        .replace(/_/g, ' ')
        .split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
    }
    return str.join(' ');
  }
}