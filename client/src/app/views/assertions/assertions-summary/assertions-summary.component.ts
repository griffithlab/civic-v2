import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AssertionSummaryGQL, Maybe, AssertionSummaryQuery, AssertionSummaryQueryVariables, AssertionSummaryFieldsFragment, SubscribableInput, SubscribableEntities } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { pluck, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'cvc-assertion-summary',
  templateUrl: './assertions-summary.component.html',
  styleUrls: ['./assertions-summary.component.less']
})
export class AssertionsSummaryComponent {
  @Input() assertionId: Maybe<number>

  queryRef: QueryRef<AssertionSummaryQuery, AssertionSummaryQueryVariables>
  loading$: Observable<boolean>
  assertion$: Observable<Maybe<AssertionSummaryFieldsFragment>>

  subscribable: SubscribableInput

  constructor(
    private gql: AssertionSummaryGQL,
    private route: ActivatedRoute) {

    var queryAssertionId: number
    if (this.assertionId) {
      queryAssertionId = this.assertionId
    } else  {
      queryAssertionId = +this.route.snapshot.params['assertionId'];
    }

    if (queryAssertionId == undefined) {
      throw new Error("Must pass in an assertion ID as an input or via the route.")
    }

    this.queryRef = this.gql.watch({assertionId: queryAssertionId});

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(
      pluck('loading'),
      startWith(true)
    )

    this.assertion$ = observable.pipe(
      pluck('data', 'assertion')
    )
    
    this.subscribable = {
      entityType: SubscribableEntities.Assertion,
      id: queryAssertionId
    }
  }
}