import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  TherapyDetailQuery,
  TherapyDetailQueryVariables,
  Therapy,
  TherapyDetailGQL,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Maybe } from 'graphql/jsutils/Maybe'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-therapies-detail',
    templateUrl: './therapies-detail.component.html',
    styleUrls: ['./therapies-detail.component.less'],
    standalone: false
})
export class TherapiesDetailComponent implements OnDestroy {
  therapyId?: number
  routeSub: Subscription
  queryRef?: QueryRef<TherapyDetailQuery, TherapyDetailQueryVariables>
  loading$?: Observable<boolean>
  therapy$?: Observable<Maybe<Therapy>>

  constructor(private route: ActivatedRoute, private gql: TherapyDetailGQL) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.therapyId = +params.therapyId

      this.queryRef = this.gql.watch({ therapyId: this.therapyId })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.therapy$ = observable.pipe(pluck('data', 'therapy'))
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
