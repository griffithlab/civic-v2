import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'cvc-assertions-approvals',
  templateUrl: './assertions-approvals.page.html',
  styleUrls: ['./assertions-approvals.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class AssertionsApprovalsPage {
  assertionId: number

  constructor(private route: ActivatedRoute) {
    this.assertionId = +this.route.snapshot.params['assertionId']
  }
}
