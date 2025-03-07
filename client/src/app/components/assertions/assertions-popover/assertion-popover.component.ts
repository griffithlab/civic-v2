import {
  AfterViewChecked,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { AssertionState } from '@app/forms/states/assertion.state'
import {
  AssertionPopoverFragment,
  AssertionPopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, finalize, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-assertion-popover',
  templateUrl: './assertion-popover.component.html',
  styleUrls: ['./assertion-popover.component.less'],
  standalone: false,
})
export class CvcAssertionPopoverComponent implements OnInit, AfterViewChecked {
  @Input() assertionId!: number
  @Output() contentRendered = new EventEmitter<void>()

  assertion$?: Observable<Maybe<AssertionPopoverFragment>>
  queryFinished = false

  assertionRules = new AssertionState()

  constructor(private gql: AssertionPopoverGQL) {}

  ngOnInit() {
    if (this.assertionId == undefined) {
      throw new Error('cvc-assertion-popover requires valid assertionId input.')
    }
    this.assertion$ = this.gql.fetch({ assertionId: this.assertionId }).pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ assertion }) => assertion),
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
