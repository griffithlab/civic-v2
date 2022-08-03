import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface ButtonMutation {
  type: 'disabled' | 'classList'
  change: boolean | DOMTokenList
}
@UntilDestroy()
@Directive({
  selector: 'button[cvcOrgSelectorBtn]',
})
export class CvcOrgSelectorBtnDirective implements OnDestroy {
  @Output()
  public domChange = new EventEmitter();

  private changes: MutationObserver;
  private mutation$!: Observable<MutationRecord>
  private disabledChange$!: Observable<ButtonMutation>

  constructor(private el: ElementRef) {
    // observe DOM mutations on attributes defined in attributeFilter
    // TODO: handle classList updates to coordinate nz-button types, styles.
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      this.mutation$ = from(mutations)

      this.disabledChange$ = this.mutation$
        .pipe(filter(mr => mr.attributeName === 'disabled'),
          map(mr => {
            const t = mr.target as HTMLInputElement
            return { type: 'disabled', change: t.disabled }
          }));

      this.disabledChange$
        .pipe(untilDestroyed(this))
        .subscribe((m: ButtonMutation) => {
          this.domChange.emit(m)
        })
    });

    this.changes.observe(this.el.nativeElement, {
      attributeFilter: ['disabled'],
      attributes: true,
      childList: false,
      subtree: false
    });

  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
