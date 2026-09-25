import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Maybe, Phenotype } from '@app/generated/civic.apollo.types'
import {
  PhenotypeDetailGQL,
  PhenotypeDetailQuery,
  PhenotypeDetailQueryVariables,
} from './phenotypes-detail.query.gql.generated'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-phenotypes-detail',
  templateUrl: './phenotypes-detail.component.html',
  styleUrls: ['./phenotypes-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class PhenotypesDetailComponent implements OnDestroy {
  routeSub: Subscription
  phenotypeId?: number

  queryRef?: QueryRef<PhenotypeDetailQuery, PhenotypeDetailQueryVariables>

  loading$?: Observable<boolean>
  phenotype$?: Observable<Maybe<Phenotype>>

  constructor(
    private route: ActivatedRoute,
    private gql: PhenotypeDetailGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.phenotypeId = +params.phenotypeId

      this.queryRef = this.gql.watch({
        variables: {
          phenotypeId: this.phenotypeId,
        },
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.phenotype$ = observable.pipe(pluck('data', 'phenotype'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
