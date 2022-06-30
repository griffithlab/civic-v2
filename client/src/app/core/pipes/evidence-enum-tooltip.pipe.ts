import { Pipe, PipeTransform } from '@angular/core';
import { AssertionType, EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { InputEnum } from '../utilities/enum-formatters/format-evidence-enum';
import { getEvidenceEnumTooltip } from '../utilities/enum-tooltips/get-evidence-enum-tooltip';

@Pipe({
  name: 'evidenceEnumTooltip',
  pure: true
})
export class EvidenceEnumTooltipPipe implements PipeTransform {
  transform(
    value: Maybe<InputEnum>,
    context: Maybe<EvidenceType | AssertionType>
  ): string {
    return getEvidenceEnumTooltip(value, context)
  }
}
