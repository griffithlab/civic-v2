import { Pipe, PipeTransform } from '@angular/core';
import { Maybe, DrugInteraction } from '@app/generated/civic.apollo';
import { formatDrugInteractionEnum } from '../utilities/enum-formatters/format-drug-interaction-enum';

export type EnumOutputStyle = 'display-string' | 'icon-name'

@Pipe({
  name: 'drugInteractionEnumDisplay',
  pure: true
})
export class DrugInteractionEnumDisplayPipe implements PipeTransform {
  transform(value: Maybe<DrugInteraction>, context: EnumOutputStyle = 'display-string') : string {
    if(value === undefined) return ''
    if (context === 'display-string') {
      return formatDrugInteractionEnum(value);
    } else {
      return `civic-${value.replace(/_/g, '').toLowerCase()}`;
    }
  }
}
