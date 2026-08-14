import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Maybe, VariantType } from '@app/generated/civic.apollo.types'
import {
  VariantTypeDetailGQL,
  VariantTypeDetailQuery,
  VariantTypeDetailQueryVariables,
} from './variant-types-detail.query.gql.generated'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-variant-types-detail',
  templateUrl: './variant-types-detail.component.html',
  styleUrls: ['./variant-types-detail.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
        variables: {
          variantTypeId: this.variantTypeId,
        },
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
