import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  VariantGroupPopoverFieldsFragment,
  VariantGroupPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-variant-group-popover',
  templateUrl: './variant-group-popover.component.html',
  styleUrls: ['./variant-group-popover.component.less'],
  standalone: false,
})
export class CvcVariantGroupPopoverComponent implements OnInit {
  @Input() variantGroupId!: number

  variantGroup$?: Observable<Maybe<VariantGroupPopoverFieldsFragment>>

  constructor(private gql: VariantGroupPopoverGQL) {}

  ngOnInit(): void {
    if (this.variantGroupId === undefined) {
      throw new Error(
        'Must pass a variant group ID into the variant group popover component.'
      )
    }

    this.variantGroup$ = this.gql
      .watch({ variantGroupId: this.variantGroupId })
      .valueChanges.pipe(
        map(({ data }) => data?.variantGroup),
        filter(isNonNulled)
      )
  }
}
