import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core'

@Component({
  selector: 'cvc-table-filter-input',
  templateUrl: './table-filter-input.component.html',
  styleUrls: ['./table-filter-input.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TableFilterInputComponent {
  @Input() cvcModel: string | number | null = null
  @Output() cvcModelChange = new EventEmitter<string | number | null>()

  @Input() cvcInputType?: 'default' | 'numeric' = 'default'
  @Input() cvcPlaceholder?: string
}
