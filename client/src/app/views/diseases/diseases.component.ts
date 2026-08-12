import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class DiseasesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
