import { Component, OnInit } from '@angular/core'
import { EvidenceStatusFilter } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-pending-assertions-page',
    templateUrl: './pending-assertions.page.html',
    standalone: false
})
export class PendingAssertionsPage implements OnInit {
  status = EvidenceStatusFilter.Submitted

  constructor() {}

  ngOnInit(): void {}
}
