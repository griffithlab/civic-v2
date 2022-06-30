import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InputEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EnumTooltipContext } from '@app/core/utilities/enum-tooltips/get-evidence-enum-tooltip';

export type AttributeTagInput = [InputEnum, EnumTooltipContext]

@Component({
  selector: 'cvc-attribute-tag',
  templateUrl: './attribute-tag.component.html',
  styleUrls: ['./attribute-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAttributeTagComponent {
  _attribute!: InputEnum
  _context!: EnumTooltipContext
  @Input() cvcAttribute!: AttributeTagInput;
  @Input() cvcShowLabel: boolean = true
  @Input() cvcShowTooltip: boolean = true
  constructor() { }

}
