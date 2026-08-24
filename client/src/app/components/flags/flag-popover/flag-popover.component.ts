import { onlyCompleteData } from 'apollo-angular'
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core'
import {
  FlagPopoverFragment,
  FlagPopoverGQL,
} from './flag-popover.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-flag-popover',
  templateUrl: './flag-popover.component.html',
  styleUrls: ['./flag-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcFlagPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() flagId!: number
  @Output() contentRendered = new EventEmitter<void>()

  flag$?: Observable<Maybe<FlagPopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: FlagPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    if (this.flagId == undefined) {
      throw new Error('cvc-flag-popover requires valid flagId input.')
    }
    this.flag$ = this.gql
      .watch({ variables: { flagId: this.flagId } })
      .valueChanges.pipe(
        onlyCompleteData(),
        map(({ data }) => data.flag),
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
