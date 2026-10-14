import { onlyCompleteData } from 'apollo-angular'
import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  VariantTypePopoverFragment,
  VariantTypePopoverGQL,
} from './variant-type-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'

@Component({
  selector: 'cvc-variant-type-popover',
  templateUrl: './variant-type-popover.component.html',
  styleUrls: ['./variant-type-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcVariantTypePopoverComponent implements OnInit {
  @Input() variantTypeId!: number

  variantType$?: Observable<Maybe<VariantTypePopoverFragment>>

  constructor(private gql: VariantTypePopoverGQL) {}

  ngOnInit() {
    if (this.variantTypeId == undefined) {
      throw new Error(
        'cvc-variant-type-popover requires valid variantTypeId input.'
      )
    }
    this.variantType$ = this.gql
      .watch({ variables: { variantTypeId: this.variantTypeId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.variantTypePopover),
        filter(isNonNulled)
      )
  }
}
