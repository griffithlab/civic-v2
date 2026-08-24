import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-releases',
  templateUrl: './releases.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ReleasesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
