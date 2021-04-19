import {
  Directive,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: 'button[cvcOrgSelectorBtn]',
})
export class OrgSelectorBtnDirective implements OnDestroy {
  public disabled!: boolean;
  private observer: MutationObserver;

  constructor(private el: ElementRef) {
    this.observer = new MutationObserver(([record]) =>
      this.disabled = (record.target as HTMLInputElement).disabled);
    this.observer.observe(this.el.nativeElement, {
      attributeFilter: ['disabled'],
      childList: false,
      subtree: false
    });
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }
}
