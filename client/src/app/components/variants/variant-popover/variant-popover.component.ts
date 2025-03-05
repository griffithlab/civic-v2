import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import {
  Maybe,
  VariantPopoverFieldsFragment,
  VariantPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, finalize, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-variant-popover',
  templateUrl: './variant-popover.component.html',
  styleUrls: ['./variant-popover.component.less'],
  standalone: false,
})
export class CvcVariantPopoverComponent implements OnInit, AfterViewChecked {
  @Input() variantId!: number
  @Output() contentRendered = new EventEmitter<void>()

  variant$?: Observable<Maybe<VariantPopoverFieldsFragment>>
  queryFinished = false

  constructor(private gql: VariantPopoverGQL) {}

  ngOnInit() {
    if (this.variantId === undefined) {
      throw new Error(
        'Must pass a variant ID into the variant popover component.'
      )
    }

    this.variant$ = this.gql.fetch({ variantId: this.variantId }).pipe(
      map(({ data }) => data?.variant),
      filter(isNonNulled),
      finalize(() => {
        this.queryFinished = true
      })
    )
  }

  ngAfterViewChecked() {
    if (this.queryFinished) {
      this.contentRendered.emit()
    }
  }
}
