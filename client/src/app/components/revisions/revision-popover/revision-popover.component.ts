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
export class CvcRevisionPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() revisionId!: number
  @Output() contentRendered = new EventEmitter<void>()

  revision$?: Observable<Maybe<RevisionPopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: RevisionPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

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
  ngAfterViewInit() {
    this.resizeObserver.observe(this.elementRef.nativeElement)
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect()
  }
}
