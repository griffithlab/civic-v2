import { Component, Input, OnInit } from '@angular/core'
import {
  TherapyPopoverGQL,
  Maybe,
  TherapyPopover,
} from '@app/generated/civic.apollo'
import { filter, map } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'

@Component({
  selector: 'cvc-therapy-popover',
  templateUrl: './cvc-therapy-popover.component.html',
  styleUrls: ['./cvc-therapy-popover.component.less'],
  standalone: false,
})
export class CvcTherapyPopoverComponent implements OnInit {
  @Input() therapyId!: number

  therapy$?: Observable<Maybe<TherapyPopover>>

  constructor(private gql: TherapyPopoverGQL) {}

  ngOnInit() {
    if (this.therapyId == undefined) {
      throw new Error('cvc-therapy-popover requires valid therapyId input.')
    }
    this.therapy$ = this.gql
      .watch({ therapyId: this.therapyId })
      .valueChanges.pipe(
        map(({ data }) => data?.therapyPopover),
        filter(isNonNulled)
      )
  }
}
