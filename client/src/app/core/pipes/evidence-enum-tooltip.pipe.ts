import { Pipe, PipeTransform } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { InputEnum } from '../utilities/enum-formatters/format-evidence-enum';
import { EnumTooltipContext, EnumTooltipEntity, getEvidenceEnumTooltip } from '../utilities/enum-tooltips/get-evidence-enum-tooltip';

@Pipe({
  name: 'evidenceEnumTooltip',
  pure: true
})
export class EvidenceEnumTooltipPipe implements PipeTransform {
  transform(
    value: Maybe<InputEnum>,
    context: Maybe<EnumTooltipContext>,
    entity: Maybe<EnumTooltipEntity>): string {
    return getEvidenceEnumTooltip(value, context, entity)
  }
}
