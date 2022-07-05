import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EnumTooltipContext, EnumTooltipEntity } from '@app/core/utilities/enum-tooltips/get-evidence-enum-tooltip';

export type AttributeTagInput = [InputEnum, EnumTooltipContext, EnumTooltipEntity]

@Component({
  selector: 'cvc-attribute-tag',
  templateUrl: './attribute-tag.component.html',
  styleUrls: ['./attribute-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAttributeTagComponent {
  @Input() cvcAttrName!: InputEnum
  @Input() cvcAttrEntity!: EnumTooltipEntity

  @Input() cvcShowLabel: boolean = true
  @Input() cvcShowTooltip: boolean = true
  constructor() { }

}
