import { Component, OnInit } from '@angular/core';
import { EvidenceStatus } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-pending-assertions-page',
  templateUrl: './pending-assertions.page.html',
  styleUrls: ['./pending-assertions.page.less']
})
export class PendingAssertionsPage implements OnInit {
  status = EvidenceStatus.Submitted

  constructor() { }

  ngOnInit(): void {
  }

}
