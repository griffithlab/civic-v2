import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
  OnInit,
  AfterViewInit
} from '@angular/core';
//
// From zorro-sharper: https://github.com/1-2-3/zorro-sharper/blob/master/README-en_US.md
//
// NOTE: cvcAutoHeight directives use the browser *viewport* to calculate their height, so that the components to which they're applied take up any space remaining to the bottom of the viewport - minus _offset
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[cvcAutoHeightCard]',
})
export class CvcAutoHeightCardDirective implements OnInit, AfterViewInit {
  // default offset
  private _offset = 30;

  @Input()
  set cvcAutoHeightCard(v: any) {
    const value = parseInt(v, 0);
    if (!isNaN(value) && value >= 0) {
      this._offset = value;
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { }

  /**
   * 响应浏览器窗体大小变化
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.doAutoSize();
  }

  ngAfterViewInit() {
    this.doAutoSize();
  }

  private doAutoSize() {
    setTimeout(() => {
      const card = this.el.nativeElement;
      const bodyDiv = card.querySelector('.ant-card-body');
      let bodyTop = 0;
      if (bodyDiv && bodyDiv.getBoundingClientRect && bodyDiv.getBoundingClientRect().top) {
        bodyTop = bodyDiv.getBoundingClientRect().top;
      }

      if (bodyDiv) {
        const topOffset = bodyTop + this._offset;
        bodyDiv.style.height = `calc(100vh - ${topOffset}px)`;
        bodyDiv.style['overflow-y'] = 'auto'; // 自动出竖向滚动条
      }
    }, 2);
  }

}
