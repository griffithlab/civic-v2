import { Component, Input, OnInit } from '@angular/core'
import {
  FlagPopoverFragment,
  FlagPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-flag-popover',
  templateUrl: './flag-popover.component.html',
  styleUrls: ['./flag-popover.component.less'],
  standalone: false,
})
export class CvcFlagPopoverComponent implements OnInit {
  @Input() flagId!: number

  flag$?: Observable<Maybe<FlagPopoverFragment>>

  constructor(private gql: FlagPopoverGQL) {}

  ngOnInit() {
    if (this.flagId == undefined) {
      throw new Error('cvc-flag-popover requires valid flagId input.')
    }
    this.flag$ = this.gql.watch({ flagId: this.flagId }).valueChanges.pipe(
      map(({ data }) => data?.flag),
      filter(isNonNulled)
    )
  }
}
