import { Component, Input, OnInit } from '@angular/core'
import {
  Maybe,
  SourcePopoverFragment,
  SourcePopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-source-popover',
  templateUrl: './source-popover.component.html',
  styleUrls: ['./source-popover.component.less'],
  standalone: false,
})
export class CvcSourcePopoverComponent implements OnInit {
  @Input() sourceId!: number

  source$?: Observable<Maybe<SourcePopoverFragment>>

  constructor(private gql: SourcePopoverGQL) {}

  ngOnInit() {
    if (this.sourceId == undefined) {
      throw new Error('cvc-source-popover requires valid sourceId input.')
    }
    this.source$ = this.gql
      .watch({ sourceId: this.sourceId })
      .valueChanges.pipe(
        map(({ data }) => data?.sourcePopover),
        filter(isNonNulled)
      )
  }
}
