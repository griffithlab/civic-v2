import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

export interface ButtonMutation {
  type: 'disabled' | 'classList'
  change: boolean | DOMTokenList
}

@Directive({
  selector: 'button[cvcOrgSelectorBtn]',
})
export class CvcOrgSelectorBtnDirective implements OnDestroy {
  @Output()
  public domChange = new EventEmitter();

  private changes: MutationObserver;
  private mutation$!: Observable<MutationRecord>
  private disabledChange$!: Observable<ButtonMutation>

  private destroy$ = new Subject()

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
        .pipe(takeUntil(this.destroy$))
        .subscribe((m: ButtonMutation) => {
          this.domChange.emit(m)
        })
    });

    this.changes.observe(this.el.nativeElement, {
      attributeFilter: ['disabled'],
      // attributes: true,
      childList: false,
      subtree: false
    });

  }

  ngOnDestroy(): void {
    this.changes.disconnect();
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}
