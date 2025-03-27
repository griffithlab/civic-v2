import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
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
export class CvcSourcePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() sourceId!: number
  @Output() contentRendered = new EventEmitter<void>()

  source$?: Observable<Maybe<SourcePopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: SourcePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.source$ = this.gql
      .watch({ sourceId: this.sourceId })
      .valueChanges.pipe(
        map(({ data }) => data?.sourcePopover),
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
