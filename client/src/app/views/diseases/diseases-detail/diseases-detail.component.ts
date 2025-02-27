import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Disease,
  DiseaseDetailGQL,
  DiseaseDetailQuery,
  DiseaseDetailQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-diseases-detail',
    templateUrl: './diseases-detail.component.html',
    styleUrls: ['./diseases-detail.component.less'],
    standalone: false
})
export class DiseasesDetailComponent implements OnDestroy {
  routeSub: Subscription
  diseaseId?: number

  queryRef?: QueryRef<DiseaseDetailQuery, DiseaseDetailQueryVariables>

  loading$?: Observable<boolean>
  disease$?: Observable<Maybe<Disease>>

  constructor(private route: ActivatedRoute, private gql: DiseaseDetailGQL) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.diseaseId = +params.diseaseId

      this.queryRef = this.gql.watch({
        diseaseId: this.diseaseId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.disease$ = observable.pipe(pluck('data', 'disease'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
