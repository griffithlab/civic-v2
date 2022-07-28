import { Component, Input, OnInit } from '@angular/core';
import { CoordinatesCardFieldsFragment, CoordinatesCardGQL, CoordinatesCardQuery, CoordinatesCardQueryVariables, Maybe, Variant } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { filter, pluck } from 'rxjs/operators';

@Component({
  selector: 'cvc-coordinates-card',
  templateUrl: './coordinates-card.component.html',
  styleUrls: ['./coordinates-card.component.less']
})
export class CvcCoordinatesCard implements OnInit {
  @Input() cvcVariantId!: number

  queryRef!: QueryRef<CoordinatesCardQuery, CoordinatesCardQueryVariables>;
  loading$!: Observable<boolean>;
  variant$!: Observable<Maybe<CoordinatesCardFieldsFragment>>;

  constructor(private gql: CoordinatesCardGQL) {}

  ngOnInit(): void {
    if (!this.cvcVariantId) {
      throw new Error('CvcCoordinatesCard requires valid cvcVariantId Input, none provided.')
    }

    this.queryRef = this.gql.watch({ variantId: this.cvcVariantId });

    let observable = this.queryRef.valueChanges;

    this.loading$ = observable
      .pipe(pluck('loading'),
            filter(isNonNulled))

    this.variant$ = observable
      .pipe(pluck('data', 'variant'),
            filter(isNonNulled))

  }

}
