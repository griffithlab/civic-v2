import { Component, OnInit } from '@angular/core'
import { AssertionStatusFilter } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-pending-assertions-page',
    templateUrl: './pending-assertions.page.html',
    standalone: false
})
export class PendingAssertionsPage implements OnInit {
  status = AssertionStatusFilter.Submitted

  constructor() {}

  ngOnInit(): void {}
}
