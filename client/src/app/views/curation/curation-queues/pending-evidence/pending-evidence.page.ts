import { Component, OnInit } from '@angular/core';
import { EvidenceStatus } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-pending-evidence-page',
  templateUrl: './pending-evidence.page.html',
  styleUrls: ['./pending-evidence.page.less']
})
export class PendingEvidencePage implements OnInit {
  status = EvidenceStatus.Submitted

  constructor() { }

  ngOnInit(): void {
  }

}
