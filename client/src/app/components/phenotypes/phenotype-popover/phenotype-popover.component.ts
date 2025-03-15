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
  PhenotypePopover,
  PhenotypePopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-phenotype-popover',
  templateUrl: './phenotype-popover.component.html',
  styleUrls: ['./phenotype-popover.component.less'],
  standalone: false,
})
export class CvcPhenotypePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() phenotypeId!: number
  @Output() contentRendered = new EventEmitter<void>()

  phenotype$?: Observable<Maybe<PhenotypePopover>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: PhenotypePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.phenotype$ = this.gql
      .watch({ phenotypeId: this.phenotypeId })
      .valueChanges.pipe(
        map(({ data }) => data?.phenotypePopover),
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
