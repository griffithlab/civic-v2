import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  VariantType,
  VariantTypeDetailGQL,
  VariantTypeDetailQuery,
  VariantTypeDetailQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-variant-types-detail',
  templateUrl: './variant-types-detail.component.html',
  styleUrls: ['./variant-types-detail.component.less'],
  standalone: false,
})
export class VariantTypesDetailComponent implements OnDestroy {
  routeSub: Subscription
  variantTypeId?: number

  queryRef?: QueryRef<VariantTypeDetailQuery, VariantTypeDetailQueryVariables>

  loading$?: Observable<boolean>
  variantType$?: Observable<Maybe<VariantType>>

  constructor(
    private route: ActivatedRoute,
    private gql: VariantTypeDetailGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.variantTypeId = +params.variantTypeId

      this.queryRef = this.gql.watch({
        variantTypeId: this.variantTypeId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.variantType$ = observable.pipe(pluck('data', 'variantType'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}
