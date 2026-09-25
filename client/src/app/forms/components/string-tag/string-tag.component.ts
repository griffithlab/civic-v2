import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core'
import { EntityTagPopoverInput } from '../entity-tag-popover/entity-tag-popover.component'

@Component({
  selector: 'cvc-string-tag',
  templateUrl: './string-tag.component.html',
  styleUrls: ['./string-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcStringTagComponent {
  @Input() cvcLabel?: string
  @Input() cvcEmphasize?: string
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Output() cvcOnClose: EventEmitter<MouseEvent>

  constructor() {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }
}
