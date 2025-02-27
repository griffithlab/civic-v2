import { Component, Input, OnInit } from '@angular/core'
import {
  EvidencePopoverFragment,
  EvidencePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { map, filter } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'

@Component({
    selector: 'cvc-evidence-popover',
    templateUrl: './evidence-popover.component.html',
    styleUrls: ['./evidence-popover.component.less'],
    standalone: false
})
export class CvcEvidencePopoverComponent implements OnInit {
  @Input() evidenceId!: number

  evidence$?: Observable<Maybe<EvidencePopoverFragment>>

  constructor(private gql: EvidencePopoverGQL) {}

  ngOnInit() {
    if (this.evidenceId == undefined) {
      throw new Error('cvc-evidence-popover requires valid evidenceId input.')
    }

    this.evidence$ = this.gql
      .watch({ evidenceId: this.evidenceId })
      .valueChanges.pipe(
        map(({ data }) => data?.evidenceItem),
        filter(isNonNulled)
      )
  }
}
