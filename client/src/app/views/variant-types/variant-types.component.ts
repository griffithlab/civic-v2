import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-variant-types',
  templateUrl: './variant-types.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantTypesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
