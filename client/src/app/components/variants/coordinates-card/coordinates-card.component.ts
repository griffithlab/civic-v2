import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  VariantCoordinateType,
  CoordinatesCardFieldsFragment,
  CoordinatesCardGQL,
  CoordinatesCardQuery,
  CoordinatesCardQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { onlyCompleteData, QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-coordinates-card',
  templateUrl: './coordinates-card.component.html',
  styleUrls: ['./coordinates-card.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcCoordinatesCard implements OnInit {
  @Input() cvcVariantId?: number
  @Input() cvcCoordinates?: CoordinatesCardFieldsFragment
  @Input() displayTitle = true

  queryRef?: QueryRef<CoordinatesCardQuery, CoordinatesCardQueryVariables>
  loading$?: Observable<boolean>
  variant$?: Observable<Maybe<CoordinatesCardFieldsFragment>>

  coordinateTypes = VariantCoordinateType

  constructor(private gql: CoordinatesCardGQL) {}

  ngOnInit(): void {
    if (!this.cvcCoordinates && !this.cvcVariantId) {
      throw new Error(
        'CvcCoordinatesCard requires valid cvcVariantId or cvcCoordinates Input, none provided.'
      )
    }

    if (!this.cvcCoordinates && this.cvcVariantId) {
      this.queryRef = this.gql.watch({
        variables: { variantId: this.cvcVariantId },
      })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(
        map(({ loading }) => loading),
        filter(isNonNulled)
      )

      this.variant$ = observable.pipe(
        onlyCompleteData(),
        map(({ data }) => data.variant),
        filter(isNonNulled)
      )
    }
  }
}
