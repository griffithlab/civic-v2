import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core'
import { InputEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'

@Component({
  selector: 'cvc-attribute-tag',
  templateUrl: './attribute-tag.component.html',
  styleUrls: ['./attribute-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAttributeTagComponent {
  @Input() cvcAttrValue!: InputEnum
  @Input() cvcShowLabel: boolean = true
  @Input() cvcTooltip?: string
  @Input() showIcon: boolean = true
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcEmphasize?: string

  @Output() cvcOnClose: EventEmitter<MouseEvent>
  constructor() {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }
}
