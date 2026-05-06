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
  VariantPopoverFieldsFragment,
  VariantPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-variant-popover',
  templateUrl: './variant-popover.component.html',
  styleUrls: ['./variant-popover.component.less'],
  standalone: false,
})
export class CvcVariantPopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() variantId!: number
  @Output() contentRendered = new EventEmitter<void>()

  variant$?: Observable<Maybe<VariantPopoverFieldsFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: VariantPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.variant$ = this.gql.fetch({ variantId: this.variantId }).pipe(
      map(({ data }) => data?.variant),
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
