import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[autofocus]',
})
export class CvcAutofocusDirective {
  @Input() autofocus: 'click' | 'focus' = 'focus';
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    if (this.autofocus == 'click') {
      this.host.nativeElement.click();
    } else {
      this.host.nativeElement.focus();
    }
  }
}
