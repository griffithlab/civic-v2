import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { EvidenceStatusFilter } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-pending-evidence-page',
  templateUrl: './pending-evidence.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PendingEvidencePage implements OnInit {
  status = EvidenceStatusFilter.Submitted

  constructor() {}

  ngOnInit(): void {}
}
