import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-assertions',
  templateUrl: './assertions.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AssertionsView {
  constructor() {}
}
