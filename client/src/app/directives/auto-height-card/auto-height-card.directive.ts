import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  NgZone,
  OnDestroy
} from '@angular/core';
import { Subject } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

type AutoHeightTarget = 'parent' | 'viewport' | undefined;
type AutoHeightOffset = string | number | undefined;

export class ResizedEvent {
  public newRect: DOMRectReadOnly;
  public oldRect?: DOMRectReadOnly;
  public isFirst: boolean;

  public constructor(newRect: DOMRectReadOnly, oldRect: DOMRectReadOnly | undefined) {
    this.newRect = newRect;
    this.oldRect = oldRect;
    this.isFirst = oldRect == null;
  }
}

//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
// NOTE: significantly refactored to allow parent or viewport target for height calculation;
// switched from HostListener to element listeners for resize updates
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cvcAutoHeightCard]',
})
export class CvcAutoHeightCardDirective implements OnInit, OnDestroy {
  private _offset?: AutoHeightOffset = 0;
  private _target?: AutoHeightTarget = 'parent'

  @Input()
  set cvcAutoHeightCard(v: AutoHeightOffset) { if (v) this._offset = v }
  get cvcAutoHeightCard(): AutoHeightOffset { return this._offset }

  @Input()
  set cvcAutoHeightTarget(t: AutoHeightTarget) { this._target = t }
  get cvcAutoHeightTarget(): AutoHeightTarget { return this._target }

  private resizeObserver: ResizeObserver;
  private onResized$: Subject<ResizedEvent>;
  private oldRect?: DOMRectReadOnly;

  constructor(private el: ElementRef, private zone: NgZone) {
    this.onResized$ = new Subject();
    this.resizeObserver = new ResizeObserver((entries) => {
      this.zone.run(() => { this.onResize(entries) })
    });

    this.onResized$
      .pipe(throttleTime(100))
      .subscribe((_) => { this.doAutoSize() });
  }

  private onResize(entries: ResizeObserverEntry[]): void {
    const domSize = entries[0];
    const resizedEvent = new ResizedEvent(domSize.contentRect, this.oldRect);
    this.oldRect = domSize.contentRect;
    this.onResized$.next(resizedEvent);
  }
  /**
   * 响应浏览器窗体大小变化 ('Responding to browser form size changes')
   */
  // @HostListener('resize', ['$event'])
  // onResize() { this.doAutoSize() }

  ngOnInit(): void { this.resizeObserver.observe(this.el.nativeElement) }

  // ngAfterViewInit() {
  // this.doAutoSize()
  // }

  private doAutoSize() {
    // setTimeout(() => {
    const card = this.el.nativeElement;
    const cardParentHeight = card.parentElement.clientHeight;

    // calculate card header offset
    const headerDiv = card.querySelector('.ant-card-head');
    const headerDivHeight = headerDiv.clientHeight;

    const bodyDiv = card.querySelector('.ant-card-body');
    if (bodyDiv) {
      // set card body height
      if (this._target === 'parent') {
        const parentOffset = headerDivHeight;
        bodyDiv.style.height = `calc(${cardParentHeight - parentOffset}px)`;
      } else if (this._target === 'viewport') {
        // calculate card body's viewport offset, height
        let bodyTop = 0
        if (bodyDiv.getBoundingClientRect
          && bodyDiv.getBoundingClientRect().top) {
          bodyTop = bodyDiv.getBoundingClientRect().top;
        }
        const viewportOffset = bodyTop + headerDivHeight + this._offset;
        bodyDiv.style.height = `calc(100vh - ${viewportOffset}px)`;
      }
      bodyDiv.style['overflow-y'] = 'auto'; // 自动出竖向滚动条 ('Automatic vertical scroll bar')
    } else {
      console.warn(`auto-height-card could not find reference to ant-card-body div.`)
    }
    // this.cdr.detectChanges();
    // }, 2);
  }
  ngOnDestroy(): void {
    this.onResized$.unsubscribe()
    this.resizeObserver.unobserve(this.el.nativeElement);
  }
}
