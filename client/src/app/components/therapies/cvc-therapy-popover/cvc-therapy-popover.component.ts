import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core'
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcTherapyPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() therapyId!: number
  @Output() contentRendered = new EventEmitter<void>()

  therapy$?: Observable<Maybe<TherapyPopover>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: TherapyPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.therapy$ = this.gql
      .watch({ therapyId: this.therapyId })
      .valueChanges.pipe(
        map(({ data }) => data?.therapyPopover),
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
