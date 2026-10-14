import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { EvidenceStatusFilter } from '@app/generated/civic.apollo.types'

@Component({
  selector: 'cvc-pending-assertions-page',
  templateUrl: './pending-assertions.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PendingAssertionsPage implements OnInit {
  status = EvidenceStatusFilter.Submitted

  constructor() {}

  ngOnInit(): void {}
}
