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
  attribute!: InputEnum
  context!: EnumTooltipContext
  entity!: EnumTooltipEntity
  @Input()
  set cvcAttribute(attribute: InputEnum) {
    if (!attribute) { throw new Error(`cvc-attribute-tag's cvcAttribute Input requires valid InputEnum, none provided.`) }
    else { this.attribute = attribute }
  }
  @Input()
  set cvcAttributeContext(context: EnumTooltipContext) {
     this.context = context
  }
  @Input()
  set cvcAttributeEntity(entity: EnumTooltipEntity) {
    if (!entity) { throw new Error(`cvc-entity-tag's cvcAttributeEntity Input requires valid EnumTooltipEntity, none provided.`) }
    else { this.entity = entity }
  }

  @Input() cvcShowLabel: boolean = true
  @Input() cvcShowTooltip: boolean = true
  constructor() { }

}
