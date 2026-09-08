import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-clinical-trials',
  templateUrl: './clinical-trials.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class ClinicalTrialsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
