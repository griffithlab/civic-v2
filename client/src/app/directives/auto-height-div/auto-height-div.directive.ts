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
  set cvcAutoHeightDiv(v: string) {
    const value = parseInt(v, 0)
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
    const divParentHeight = div.parentElement.getBoundingClientRect().height

    if (div && div.getBoundingClientRect && div.getBoundingClientRect().top) {
      this.divTop = div.getBoundingClientRect().top
    }

    if (div) {
      if (this._target === 'parent') {
        div.style.height = divParentHeight
      } else if (this._target === 'viewport') {
        if (div.getBoundingClientRect && div.getBoundingClientRect().top) {
          this.divTop = div.getBoundingClientRect().top
        }
        const viewportOffset = this.divTop + this._offset
        div.style.height = `calc(100vh - ${viewportOffset}px)`
      }
      div.style['overflow-y'] = 'auto'
      this.cdr.detectChanges()
    }
  }

  ngOnDestroy(): void {
    this.onResized$.unsubscribe()
    this.resizeObserver.unobserve(this.el.nativeElement)
  }
}
