import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  MolecularProfileSummaryQuery,
  MolecularProfileSummaryQueryVariables,
  SubscribableInput,
  SubscribableEntities,
  MolecularProfileSummaryFieldsFragment,
  MolecularProfileSummaryGQL,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable } from 'rxjs'

@Component({
    selector: 'cvc-molecular-profiles-summary',
    templateUrl: './molecular-profiles-summary.page.html',
    styleUrls: ['./molecular-profiles-summary.page.less'],
    standalone: false
})
export class MolecularProfilesSummaryPage {
  @Input() molecularProfileId: Maybe<number>

  queryRef: QueryRef<
    MolecularProfileSummaryQuery,
    MolecularProfileSummaryQueryVariables
  >
  loading$: Observable<boolean>
  molecularProfile$: Observable<Maybe<MolecularProfileSummaryFieldsFragment>>

  subscribable: SubscribableInput

  constructor(
    private gql: MolecularProfileSummaryGQL,
    private route: ActivatedRoute
  ) {
    var queryMpId: number
    if (this.molecularProfileId) {
      queryMpId = this.molecularProfileId
    } else {
      queryMpId = +this.route.snapshot.params['molecularProfileId']
    }

    if (queryMpId == undefined) {
      throw new Error(
        'Must pass in a molecular profile ID as an input or via the route.'
      )
    }

    this.queryRef = this.gql.watch({ mpId: queryMpId })

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.molecularProfile$ = observable.pipe(pluck('data', 'molecularProfile'))

    this.subscribable = {
      entityType: SubscribableEntities.MolecularProfile,
      id: queryMpId,
    }
  }
}
