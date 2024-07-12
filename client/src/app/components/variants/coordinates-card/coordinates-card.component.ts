import { Component, Input, OnInit } from '@angular/core'
import {
  CoordinateType,
  CoordinatesCardFieldsFragment,
  CoordinatesCardGQL,
  CoordinatesCardQuery,
  CoordinatesCardQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-coordinates-card',
  templateUrl: './coordinates-card.component.html',
  styleUrls: ['./coordinates-card.component.less'],
})
export class CvcCoordinatesCard implements OnInit {
  @Input() cvcVariantId?: number
  @Input() cvcCoordinates?: CoordinatesCardFieldsFragment
  @Input() displayTitle = true

  queryRef?: QueryRef<CoordinatesCardQuery, CoordinatesCardQueryVariables>
  loading$?: Observable<boolean>
  variant$?: Observable<Maybe<CoordinatesCardFieldsFragment>>

  coordinateTypes = CoordinateType

  constructor(private gql: CoordinatesCardGQL) {}

  ngOnInit(): void {
    if (!this.cvcCoordinates && !this.cvcVariantId) {
      throw new Error(
        'CvcCoordinatesCard requires valid cvcVariantId or cvcCoordinates Input, none provided.'
      )
    }

    if (!this.cvcCoordinates && this.cvcVariantId) {
      this.queryRef = this.gql.watch({ variantId: this.cvcVariantId })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), filter(isNonNulled))

      this.variant$ = observable.pipe(
        pluck('data', 'variant'),
        filter(isNonNulled)
      )
    }
  }
}
