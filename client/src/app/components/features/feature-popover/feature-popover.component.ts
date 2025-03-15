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
  FeaturePopoverFragment,
  FeaturePopoverGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'cvc-feature-popover',
  templateUrl: './feature-popover.component.html',
  styleUrls: ['./feature-popover.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFeaturePopoverComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() featureId!: number
  @Output() contentRendered = new EventEmitter<void>()

  feature$?: Observable<Maybe<FeaturePopoverFragment>>
  private resizeObserver: ResizeObserver

  constructor(
    private gql: FeaturePopoverGQL,
    private elementRef: ElementRef
  ) {
    this.resizeObserver = new ResizeObserver(() => {
      this.contentRendered.emit()
    })
  }

  ngOnInit() {
    this.feature$ = this.gql
      .watch({ featureId: this.featureId })
      .valueChanges.pipe(
        map(({ data }) => data?.feature),
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
