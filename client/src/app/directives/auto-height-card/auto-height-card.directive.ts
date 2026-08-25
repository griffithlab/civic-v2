import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  NgZone,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core'
import { fromEvent, Subject, Subscription } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

type AutoHeightTarget = 'parent' | 'viewport' | 'ancestor' | undefined
type AutoHeightOffset = string | number | undefined

//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
// NOTE: significantly refactored to allow parent or viewport target for height calculation;
// switched from HostListener to element listeners for resize updates
@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[cvcAutoHeightCard]',
    standalone: false
})
export class CvcAutoHeightCardDirective implements OnInit, OnDestroy {
  // optional offset value, if provided will be added to height calculation
  private _offset?: AutoHeightOffset = 0
  // if 'parent' will use card's parent container for height calculation
  // if 'viewport', will use browser window for height calculation
  // if 'ancestor', will fill the nearest ancestor matching _ancestorSelector
  private _target?: AutoHeightTarget = 'parent'
  // CSS selector for the ancestor to fill when _target === 'ancestor'
  private _ancestorSelector?: string

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

  @Input()
  set cvcAutoHeightAncestor(selector: string) {
    this._ancestorSelector = selector
  }
  get cvcAutoHeightAncestor(): string | undefined {
    return this._ancestorSelector
  }

  private resizeObserver: ResizeObserver
  private onResized$: Subject<boolean>
  private windowResizeSub: Subscription

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

    // catch top-edge shifts that the ResizeObserver can't see (e.g. a sibling
    // resizing pushes this card down); callers broadcast a window resize.
    this.windowResizeSub = fromEvent(window, 'resize').subscribe(() =>
      this.onResized$.next(true)
    )

    this.onResized$.pipe(throttleTime(10)).subscribe((_) => {
      this.doAutoSize()
    })
  }

  ngOnInit(): void {
    this.resizeObserver.observe(this.el.nativeElement)
    // in ancestor mode the card's own box doesn't change when the ancestor is
    // resized (e.g. a parent resizer), so observe the ancestor too
    if (this._target === 'ancestor' && this._ancestorSelector) {
      const ancestor = this.el.nativeElement.closest(this._ancestorSelector)
      if (ancestor) this.resizeObserver.observe(ancestor)
    }
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
      } else if (this._target === 'ancestor') {
        // fill the nearest matching ancestor: body height = ancestor height
        // minus the card's head and actions (the offset trims for borders).
        if (!this._ancestorSelector) return
        const ancestor = card.closest(this._ancestorSelector)
        if (!ancestor) {
          console.warn(
            `auto-height-card could not find ancestor matching "${this._ancestorSelector}".`
          )
          return
        }
        const actionsDiv = card.querySelector('.ant-card-actions')
        const actionsHeight = actionsDiv ? actionsDiv.clientHeight : 0
        const available =
          ancestor.clientHeight -
          headerDivHeight -
          actionsHeight -
          Number(this._offset)
        bodyDiv.style.height = `${available}px`
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
    this.windowResizeSub.unsubscribe()
    this.onResized$.unsubscribe()
    this.resizeObserver.disconnect()
  }
}
