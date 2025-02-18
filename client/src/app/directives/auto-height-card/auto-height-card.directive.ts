import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  NgZone,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core'
import { Subject } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

type AutoHeightTarget = 'parent' | 'viewport' | undefined
type AutoHeightOffset = string | number | undefined

//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
// NOTE: significantly refactored to allow parent or viewport target for height calculation;
// switched from HostListener to element listeners for resize updates
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cvcAutoHeightCard]',
  standalone: false,
})
export class CvcAutoHeightCardDirective implements OnInit, OnDestroy {
  // optional offset value, if provided will be added to height calculation
  private _offset?: AutoHeightOffset = 0
  // if 'parent' will use card's parent container for height calculation
  // if 'viewport', will use browser window for height calculation
  private _target?: AutoHeightTarget = 'parent'

  @Input()
  set cvcAutoHeightCard(v: AutoHeightOffset) {
    if (v) this._offset = v
  }
  get cvcAutoHeightCard(): AutoHeightOffset {
    return this._offset
  }

  @Input()
  set cvcAutoHeightTarget(t: AutoHeightTarget) {
    this._target = t
  }
  get cvcAutoHeightTarget(): AutoHeightTarget {
    return this._target
  }

  private resizeObserver: ResizeObserver
  private onResized$: Subject<boolean>

  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    this.onResized$ = new Subject()
    this.resizeObserver = new ResizeObserver((_) => {
      this.zone.run(() => {
        this.onResized$.next(true)
      })
    })

    this.onResized$.pipe(throttleTime(10)).subscribe((_) => {
      this.doAutoSize()
    })
  }

  ngOnInit(): void {
    this.resizeObserver.observe(this.el.nativeElement)
  }

  private doAutoSize() {
    const card = this.el.nativeElement
    const cardParentHeight = card.parentElement.clientHeight

    // calculate card header offset
    const headerDiv = card.querySelector('.ant-card-head')
    const headerDivHeight = headerDiv.clientHeight

    const bodyDiv = card.querySelector('.ant-card-body')
    if (bodyDiv) {
      // set card bodyDiv height
      if (this._target === 'parent') {
        const parentOffset = headerDivHeight
        bodyDiv.style.height = `calc(${cardParentHeight - parentOffset}px)`
      } else if (this._target === 'viewport') {
        // calculate card body's viewport offset, height
        let bodyTop = 0
        if (
          bodyDiv.getBoundingClientRect &&
          bodyDiv.getBoundingClientRect().top
        ) {
          bodyTop = bodyDiv.getBoundingClientRect().top
        }
        const viewportOffset = bodyTop + headerDivHeight + this._offset
        bodyDiv.style.height = `calc(100vh - ${viewportOffset}px)`
      }
      bodyDiv.style['overflow-y'] = 'auto' // provides vertical scrollbars if overflow
    } else {
      console.warn(
        `auto-height-card could not find reference to ant-card-body div.`
      )
    }
    this.cdr.detectChanges()
  }

  ngOnDestroy(): void {
    this.onResized$.unsubscribe()
    this.resizeObserver.unobserve(this.el.nativeElement)
  }
}
