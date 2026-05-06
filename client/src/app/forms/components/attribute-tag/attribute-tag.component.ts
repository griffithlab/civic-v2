import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  TemplateRef,
} from '@angular/core'
import { EnumOutputStyle } from '@app/core/pipes/evidence-enum-display-type'
import { CvcInputEnum } from '@app/forms/forms.types'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-attribute-tag',
    templateUrl: './attribute-tag.component.html',
    styleUrls: ['./attribute-tag.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.full-width]': `cvcFullWidth === true`,
    },
    standalone: false
})
export class CvcAttributeTagComponent implements OnChanges {
  @Input() cvcAttrValue: Maybe<CvcInputEnum>
  @Input() cvcShowLabel: boolean | EnumOutputStyle = 'display-string'
  @Input() cvcShowIcon: boolean | string = true
  @Input() cvcZoomIcon: boolean = false
  @Input() cvcTooltip?: string
  @Input() cvcContext:
    | 'default'
    | 'select-item'
    | 'multi-select-item'
    | 'menu-item'
    | 'compact' = 'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcChecked: boolean = false
  @Input() cvcEmphasize?: string
  @Input() cvcIconColor: string = '#797979'
  @Input() cvcLabelColor: string = '#434343'
  @Input() cvcIconTheme: 'outline' | 'fill' | 'twotone' = 'outline'
  @Input() cvcFullWidth: boolean = false

  @Output() cvcOnClose: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>()
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcContext) {
      switch (changes.cvcContext.currentValue) {
        case 'compact':
          this.cvcShowIcon = true
          this.cvcShowLabel = false
          this.cvcZoomIcon = true
      }
    }
  }
}
