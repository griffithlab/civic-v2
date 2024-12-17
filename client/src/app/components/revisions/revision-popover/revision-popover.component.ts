import { Component, Input, OnInit } from '@angular/core'
import {
  RevisionPopoverFragment,
  RevisionPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { map, filter } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { Observable } from 'rxjs'

@Component({
  selector: 'cvc-revision-popover',
  templateUrl: './revision-popover.component.html',
  styleUrls: ['./revision-popover.component.less'],
  standalone: false,
})
export class CvcRevisionPopoverComponent implements OnInit {
  @Input() revisionId!: number

  revision$?: Observable<Maybe<RevisionPopoverFragment>>

  constructor(private gql: RevisionPopoverGQL) {}

  ngOnInit() {
    if (this.revisionId == undefined) {
      throw new Error('cvc-revision-popover requires valid revisionId input.')
    }
    this.revision$ = this.gql
      .watch({ revisionId: this.revisionId })
      .valueChanges.pipe(
        map(({ data }) => data?.revision),
        filter(isNonNulled)
      )
  }
}
