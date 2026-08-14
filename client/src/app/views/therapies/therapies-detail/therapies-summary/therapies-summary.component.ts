import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  TherapiesSummaryQuery,
  TherapiesSummaryQueryVariables,
  TherapiesSummaryFieldsFragment,
  TherapiesSummaryGQL,
} from './therapies-summary.query.gql.generated'
import { QueryRef } from 'apollo-angular'
import { Maybe } from 'graphql/jsutils/Maybe'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-therapies-summary',
  templateUrl: './therapies-summary.component.html',
  styleUrls: ['./therapies-summary.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class TherapiesSummaryComponent implements OnDestroy {
  routeSub: Subscription
  therapyId?: number

  queryRef?: QueryRef<TherapiesSummaryQuery, TherapiesSummaryQueryVariables>

  loading$?: Observable<boolean>
  therapy$?: Observable<Maybe<TherapiesSummaryFieldsFragment>>

  constructor(
    private route: ActivatedRoute,
    private gql: TherapiesSummaryGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.therapyId = +params.therapyId

      this.queryRef = this.gql.watch({
        variables: { therapyId: this.therapyId },
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.therapy$ = observable.pipe(pluck('data', 'therapy'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
