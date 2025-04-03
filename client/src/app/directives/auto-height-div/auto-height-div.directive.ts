import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  AfterViewInit,
  DoCheck,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

import { Subject } from 'rxjs'
import { throttleTime } from 'rxjs/operators'

export type AutoHeightTarget = Maybe<
  'parent' | 'viewport' | ElementRef | HTMLElement
>

//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
// NOTE: significantly refactored to allow parent or viewport target for height calculation;
// switched from HostListener to element listeners for resize updates
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cvcAutoHeightDiv]',
  standalone: false,
})
export class CvcAutoHeightDivDirective implements OnInit {
  // optional offset value, if provided will be added to height calculation
  private _offset: number = 0
  // if 'parent' will use card's parent container for height calculation
  // if 'viewport', will use browser window for height calculation
  private _target?: AutoHeightTarget = 'parent'
  divTop = 0

  @Input()
  set cvcAutoHeightDiv(v: string | number) {
    const value = typeof v === 'string' ? parseInt(v, 0) : v
    if (!isNaN(value) && value >= 0) {
      this._offset = value
    }
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
      this.resizeToFitContent()
    })
  }

  ngOnInit(): void {
    this.resizeObserver.observe(this.el.nativeElement)
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.resizeToFitContent()
    })
  }

  private resizeToFitContent() {
    const div = this.el.nativeElement

    if (div && div.getBoundingClientRect && div.getBoundingClientRect().top) {
      this.divTop = div.getBoundingClientRect().top
    }

    if (div) {
      if (this._target === 'parent') {
        const divParentHeight = div.parentElement.getBoundingClientRect().height
        div.style.height = `${divParentHeight}px`
      } else if (this._target === 'viewport') {
        if (div.getBoundingClientRect && div.getBoundingClientRect().top) {
          this.divTop = div.getBoundingClientRect().top
        }
        const viewportOffset = this.divTop + this._offset
        div.style.height = `calc(100vh - ${viewportOffset}px)`
      } else if (this.isElementRef(this._target)) {
        const divConainerHeight =
          this._target.nativeElement.getBoundingClientRect().height
        div.style.height = `${divConainerHeight + this._offset}px`
      } else if (this.isHTMLElement(this._target)) {
        const divConainerHeight = this._target.getBoundingClientRect().height
        div.style.height = `${divConainerHeight + this._offset}px`
      } else {
        console.warn(
          'Invalid target type for cvcAutoHeightDiv, setting to default minHeight of 350px',
          this._target
        )
        div.style.minHeight = '350px'
      }
      div.style['overflow-y'] = 'auto'
      this.cdr.detectChanges()
    }
  }

  private isElementRef(value: any): value is ElementRef {
    return value && typeof value === 'object' && 'nativeElement' in value
  }

  private isHTMLElement(value: any): value is HTMLElement {
    return value instanceof HTMLElement
  }
  ngOnDestroy(): void {
    this.onResized$.unsubscribe()
    this.resizeObserver.unobserve(this.el.nativeElement)
  }
}
