import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ElementRef,
} from '@angular/core'
import {
  Maybe,
  VariantGroupPopoverFieldsFragment,
  VariantGroupPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-variant-group-popover',
  templateUrl: './variant-group-popover.component.html',
  styleUrls: ['./variant-group-popover.component.less'],
  standalone: false,
})
export class CvcVariantGroupPopoverComponent implements OnInit {
  @Input() variantGroupId!: number
  @Output() contentRendered = new EventEmitter<void>()

  variantGroup$?: Observable<Maybe<VariantGroupPopoverFieldsFragment>>

  private resizeObserver: ResizeObserver
  constructor(
    private gql: VariantGroupPopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit(): void {
    this.variantGroup$ = this.gql
      .watch({ variantGroupId: this.variantGroupId })
      .valueChanges.pipe(
        map(({ data }) => data?.variantGroup),
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
