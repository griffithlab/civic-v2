import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-variants',
  templateUrl: './variants.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class VariantsView {
  constructor() {}
}
