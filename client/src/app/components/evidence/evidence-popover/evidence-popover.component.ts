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
import {
  EvidencePopoverFragment,
  EvidencePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-evidence-popover',
  templateUrl: './evidence-popover.component.html',
  styleUrls: ['./evidence-popover.component.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidencePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() evidenceId!: number
  @Output() contentRendered = new EventEmitter<void>()

  evidence$?: Observable<Maybe<EvidencePopoverFragment>>
  private resizeObserver: ResizeObserver
  constructor(
    private gql: EvidencePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.evidence$ = this.gql.fetch({ evidenceId: this.evidenceId }).pipe(
      map(({ data }) => data?.evidenceItem),
      filter(isNonNulled)
    )
  }

  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
