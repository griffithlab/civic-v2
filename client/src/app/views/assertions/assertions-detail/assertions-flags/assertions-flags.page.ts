import { Component, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  FlaggableEntities,
  FlaggableInput,
} from '@app/generated/civic.apollo.types'
import { AssertionDetailGQL } from '@app/views/assertions/assertions-detail/assertions-detail.query.gql.generated'

@Component({
  selector: 'cvc-assertions-flags',
  templateUrl: './assertions-flags.page.html',
  styleUrls: ['./assertions-flags.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
      .fetch({
        variables: { assertionId: this.assertionId },
        fetchPolicy: 'network-only',
      })
      .subscribe()
  }
}
