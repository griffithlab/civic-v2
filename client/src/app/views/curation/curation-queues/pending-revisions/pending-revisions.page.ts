import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  selector: 'cvc-pending-revisions-page',
  templateUrl: './pending-revisions.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PendingRevisionsPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
