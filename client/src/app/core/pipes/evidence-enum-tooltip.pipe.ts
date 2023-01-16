import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { getEvidenceEnumTooltip } from '../utilities/enum-tooltips/get-evidence-enum-tooltip';

@Pipe({
  name: 'enumTooltip',
  pure: true,
})
export class EvidenceEnumTooltipPipe implements PipeTransform {
  transform(
    // NOTE: #UPDATE had to switch to any here, EvidenceType and other enums are not being interpreted as 'symbol' now.
    // value?: string | symbol | number, // value of attribute
    value?: any, // value of attribute
    name?: string | symbol, // name of entity attribute
    // optional contextual type (evidence/assertionType)
    // contextType: Maybe<symbol> = undefined,
    contextType: Maybe<any> = undefined,
    // optional contextual entity ('Assertion' or 'EvidenceType')
    contextEntity: Maybe<string> = undefined
  ) {
    if (!name) return '';
    if (!value) return '';
    return getEvidenceEnumTooltip(name, value, contextType, contextEntity);
  }
}
