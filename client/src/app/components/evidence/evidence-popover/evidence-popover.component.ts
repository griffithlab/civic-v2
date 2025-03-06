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
import { map, filter, finalize, tap, take, delay } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs'
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
  updatePosition$ = new Subject<void>()
  queryFinished = false

  constructor(private gql: EvidencePopoverGQL) {
    this.updatePosition$
      .pipe(
        take(3), // popover content settles after 2-3 updates
        tap(() => {
          this.contentRendered.emit()
        })
      )
      .subscribe()
  }

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
      this.updatePosition$.next()
    }
  }
}
