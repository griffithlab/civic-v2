import { Component, Input } from '@angular/core'

@Component({
  selector: 'cvc-empty-value',
  templateUrl: './empty-value.component.html',
  styleUrls: ['./empty-value.component.less'],
})
export class EmptyValueComponent {
  @Input() cvcEmptyType: 'not-applicable' | 'unspecified' | 'invalid' =
    'not-applicable'
  @Input() cvcDisplayMode: 'symbol' | 'description' = 'symbol'
}
