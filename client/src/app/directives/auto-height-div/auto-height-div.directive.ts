import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnInit,
  AfterViewInit,
  DoCheck,
} from '@angular/core';
//
//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
//
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cvcAutoHeightDiv]',
})
export class CvcAutoHeightDivDirective
  implements OnInit, AfterViewInit, DoCheck
{
  private _offset = 27;
  private divTop = 0;

  @Input()
  set cvcAutoHeightDiv(v: any) {
    const value = parseInt(v, 0);
    if (!isNaN(value) && value >= 0) {
      this._offset = value;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  ngDoCheck(): void {
    const div = this.el.nativeElement;
    if (div && div.getBoundingClientRect && div.getBoundingClientRect().top) {
      const currentDivTop = div.getBoundingClientRect().top;

      if (this.divTop !== currentDivTop) {
        this.resizeToFitContent();
      }
    }
  }

  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.resizeToFitContent();
    });
  }

  private resizeToFitContent() {
    const div = this.el.nativeElement;
    this.divTop = 0;
    if (div && div.getBoundingClientRect && div.getBoundingClientRect().top) {
      this.divTop = div.getBoundingClientRect().top;
    }

    if (div) {
      const topOffset = this.divTop + this._offset;
      div.style.height = `calc(100vh - ${topOffset}px)`;
      div.style['overflow-y'] = 'auto';
    }
  }
}
