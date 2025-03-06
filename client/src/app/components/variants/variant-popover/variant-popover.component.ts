import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  VariantPopoverFieldsFragment,
  VariantPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'cvc-variant-popover',
    templateUrl: './variant-popover.component.html',
    styleUrls: ['./variant-popover.component.less'],
    standalone: false
})
export class CvcVariantPopoverComponent implements OnInit {
  @Input() variantId!: number

  variant$?: Observable<Maybe<VariantPopoverFieldsFragment>>

  constructor(private gql: VariantPopoverGQL) {}

  ngOnInit() {
    if (this.variantId === undefined) {
      throw new Error(
        'Must pass a variant ID into the variant popover component.'
      )
    }

    this.variant$ = this.gql
      .watch({ variantId: this.variantId })
      .valueChanges.pipe(
        map(({ data }) => data?.variant),
        filter(isNonNulled)
      )
  }
}
