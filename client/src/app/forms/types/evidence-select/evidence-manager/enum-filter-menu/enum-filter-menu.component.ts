import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { Maybe } from 'graphql/jsutils/Maybe'
import { NzTableFilterList } from 'ng-zorro-antd/table'
import { CvcFilterChange } from '../evidence-manager.types'

@Component({
  selector: 'cvc-enum-filter-menu',
  templateUrl: './enum-filter-menu.component.html',
  styleUrls: ['./enum-filter-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class EnumFilterMenuComponent {
  @Input() cvcColumnKey!: string
  @Input() cvcFilterOptions!: NzTableFilterList
  @Input() cvcOption: Maybe<CvcFilterChange>
  @Output() cvcOptionChange = new EventEmitter<CvcFilterChange>()
}
