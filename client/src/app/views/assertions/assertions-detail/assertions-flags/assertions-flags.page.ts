import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  AssertionDetailGQL,
  FlaggableEntities,
  FlaggableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-assertions-flags',
  templateUrl: './assertions-flags.page.html',
  styleUrls: ['./assertions-flags.page.less'],
  standalone: false,
})
export class AssertionsFlagsPage {
  flaggable: FlaggableInput
  assertionId: number

  constructor(
    private route: ActivatedRoute,
    private gql: AssertionDetailGQL
  ) {
    this.assertionId = +this.route.snapshot.params['assertionId']

    this.flaggable = {
      entityType: FlaggableEntities.Assertion,
      id: this.assertionId,
    }
  }

  refreshAssertion() {
    this.gql
      .fetch({ assertionId: this.assertionId }, { fetchPolicy: 'network-only' })
      .subscribe()
  }
}
