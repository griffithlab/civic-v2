import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-pending-sources-page',
  templateUrl: './pending-sources.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PendingSourcesPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
