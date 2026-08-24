import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-features',
  templateUrl: './features.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class FeaturesView {
  constructor() {}
}
