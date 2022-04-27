import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EvidenceSummaryGQL, Maybe, EvidenceSummaryQuery, EvidenceSummaryQueryVariables, EvidenceSummaryFieldsFragment, SubscribableInput, SubscribableEntities } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { pluck, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'cvc-evidence-summary',
  templateUrl: './evidence-summary.page.html',
  styleUrls: ['./evidence-summary.page.less']
})
export class EvidenceSummaryPage {
  @Input() evidenceId: Maybe<number>

  queryRef: QueryRef<EvidenceSummaryQuery, EvidenceSummaryQueryVariables>
  loading$: Observable<boolean>
  evidence$: Observable<Maybe<EvidenceSummaryFieldsFragment>>
  fieldsWithNewRevisions$: Observable<String[]>

  subscribable: SubscribableInput

  constructor(
    private gql: EvidenceSummaryGQL,
    private route: ActivatedRoute) {

    var queryEvidenceId: number
    if (this.evidenceId) {
      queryEvidenceId = this.evidenceId
    } else  {
      queryEvidenceId = +this.route.snapshot.params['evidenceId'];
    }

    if (queryEvidenceId == undefined) {
      throw new Error("Must pass in an evidence ID as an input or via the route.")
    }

    this.queryRef = this.gql.watch({evidenceId: queryEvidenceId});

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(
      pluck('loading'),
      startWith(true)
    )

    this.evidence$ = observable.pipe(
      pluck('data', 'evidenceItem')
    )

    this.fieldsWithNewRevisions$ = observable.pipe(
      pluck('data', 'evidenceItem', 'fieldsWithNewRevisions')
    )

    this.subscribable = {
      entityType: SubscribableEntities.EvidenceItem,
      id: queryEvidenceId
    }
  }
}
