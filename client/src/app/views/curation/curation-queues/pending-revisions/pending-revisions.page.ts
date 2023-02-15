import { Component, OnInit } from '@angular/core';
import { EvidenceStatusFilter } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-pending-revisions-page',
  templateUrl: './pending-revisions.page.html',
  styleUrls: ['./pending-revisions.page.less']
})
export class PendingRevisionsPage implements OnInit {
  //status = EvidenceStatusFilter.Submitted

  constructor() { }

  ngOnInit(): void {
  }

}
