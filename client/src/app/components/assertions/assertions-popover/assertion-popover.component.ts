import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
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
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-assertion-popover',
  templateUrl: './assertion-popover.component.html',
  styleUrls: ['./assertion-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcAssertionPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() assertionId!: number
  @Output() contentRendered = new EventEmitter<void>()

  assertion$?: Observable<Maybe<AssertionPopoverFragment>>

  assertionRules = new AssertionState()
  private resizeObserver: ResizeObserver

  constructor(
    private gql: AssertionPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.assertion$ = this.gql.fetch({ assertionId: this.assertionId }).pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ assertion }) => assertion)
    )
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
