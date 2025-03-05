import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import {
  EvidencePopoverFragment,
  EvidencePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { map, filter, finalize } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'

@Component({
  selector: 'cvc-evidence-popover',
  templateUrl: './evidence-popover.component.html',
  styleUrls: ['./evidence-popover.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidencePopoverComponent implements OnInit {
  @Input() evidenceId!: number
  @Output() contentRendered = new EventEmitter<void>()

  evidence$?: Observable<Maybe<EvidencePopoverFragment>>
  queryFinished = false

  constructor(private gql: EvidencePopoverGQL) {}

  ngOnInit() {
    if (this.evidenceId == undefined) {
      throw new Error('cvc-evidence-popover requires valid evidenceId input.')
    }

    this.evidence$ = this.gql.fetch({ evidenceId: this.evidenceId }).pipe(
      map(({ data }) => data?.evidenceItem),
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
