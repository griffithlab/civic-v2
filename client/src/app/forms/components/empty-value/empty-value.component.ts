import { Component, Input } from '@angular/core'

export type CvcEmptyValueCategory = 'not-applicable' | 'unspecified' | 'invalid'

@Component({
  selector: 'cvc-empty-value',
  templateUrl: './empty-value.component.html',
  styleUrls: ['./empty-value.component.less'],
  standalone: false,
})
export class EmptyValueComponent {
  @Input() cvcEmptyCategory: CvcEmptyValueCategory = 'not-applicable'
  @Input() cvcDisplayMode: 'default' | 'small' = 'default'
}
