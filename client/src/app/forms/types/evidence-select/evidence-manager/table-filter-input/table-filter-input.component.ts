import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'cvc-table-filter-input',
    templateUrl: './table-filter-input.component.html',
    styleUrls: ['./table-filter-input.component.less'],
    standalone: false
})
export class TableFilterInputComponent {
  @Input() cvcModel: string | number | null = null
  @Output() cvcModelChange = new EventEmitter<string | number | null>()

  @Input() cvcInputType?: 'default' | 'numeric' = 'default'
  @Input() cvcPlaceholder?: string
}
