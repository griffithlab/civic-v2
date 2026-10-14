import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-curation-view',
  templateUrl: './curation.view.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CurationView implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
