import { Component, Input, OnInit } from '@angular/core'
import {
  AssertionPopoverFragment,
  AssertionPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { AssertionState } from '@app/forms/states/assertion.state'

@Component({
    selector: 'cvc-assertion-popover',
    templateUrl: './assertion-popover.component.html',
    styleUrls: ['./assertion-popover.component.less'],
    standalone: false
})
export class CvcAssertionPopoverComponent implements OnInit {
  @Input() assertionId!: number

  assertion$?: Observable<Maybe<AssertionPopoverFragment>>


  assertionRules = new AssertionState()

  constructor(private gql: AssertionPopoverGQL) {}

  ngOnInit() {
    if (this.assertionId == undefined) {
      throw new Error('cvc-assertion-popover requires valid assertionId input.')
    }
    this.assertion$ = this.gql
      .watch({ assertionId: this.assertionId })
      .valueChanges.pipe(
        map((r) => r.data),
        filter(isNonNulled),
        map(({ assertion }) => assertion)
      )
  }
}
