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
  host: {
    '[class.full-width]': `cvcFullWidth === true`,
  }
})
export class CvcAttributeTagComponent {
  @Input() cvcAttrValue!: InputEnum
  @Input() cvcShowLabel: boolean | string = true
  @Input() cvcShowIcon: boolean | string = true
  @Input() cvcTooltip?: string
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcEmphasize?: string
  @Input() cvcIconColor: string = '#595959'
  @Input() cvcLabelColor: string = '#434343'
  @Input() cvcIconTheme: 'outline' | 'fill' | 'twotone' = 'outline'
  @Input() cvcFullWidth: boolean = false

  @Output() cvcOnClose: EventEmitter<MouseEvent>
  constructor() {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }
}
