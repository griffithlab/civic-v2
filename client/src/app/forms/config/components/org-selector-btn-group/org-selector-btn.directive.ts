import {
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';
import { from, Observable, merge, Observer, Subject } from 'rxjs';
import { tag } from 'rxjs-spy/cjs/operators';
import { map, filter, takeUntil, distinctUntilChanged } from 'rxjs/operators';

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

  public disabled!: boolean;
  private observer: MutationObserver;
  private changes: MutationObserver;
  private mutation$!: Observable<MutationRecord>
  private disabledChange$!: Observable<ButtonMutation>
  private classChange$!: Observable<ButtonMutation>

  private destroy$ = new Subject()

  constructor(private el: ElementRef) {
    this.observer = new MutationObserver(([record]) => {
      return this.disabled = (record.target as HTMLInputElement).disabled
    });
    this.observer.observe(this.el.nativeElement, {
      attributeFilter: ['disabled', 'class'],
      childList: false,
      subtree: false
    });

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      this.mutation$ = from(mutations)
        // .pipe(tag('org-selector-btn from(mutations)'))

      this.disabledChange$ = this.mutation$
        .pipe(filter(mr => mr.attributeName === 'disabled'),
          map(mr => {
            const t = mr.target as HTMLInputElement
            return { type: 'disabled', change: t.disabled }
          }));

      merge(this.disabledChange$, this.classChange$)
        .pipe(takeUntil(this.destroy$))
        .subscribe((m: ButtonMutation) => {
          this.domChange.emit(m)
        })

      // const isClassChanged = (prev: MutationRecord, current: MutationRecord) => {
      //   const t1 = prev.target as HTMLInputElement
      //   const t2 = current.target as HTMLInputElement
      //   return t1.classList.value === t2.classList.value
      // }

      // this.classChange$ = this.mutation$
      //   .pipe(filter(mr => mr.attributeName === 'class'),
      //     // distinctUntilChanged(isClassChanged),
      //     map(mr => {
      //       const t = mr.target as HTMLInputElement
      //       return { type: 'classList', change: t.classList }
      //     }));

        // from(mutations)
      // map((r: MutationRecord) => {
      //   const attr = r.attributeName
      //   if (attr === 'class') {
      //     const t = r.target as HtmlInputElement
      //     return
      //   } else { return r }
      // })
      // mutations.forEach((record: MutationRecord) => {
      //   const target = record.target as HTMLInputElement
      //   const attr = record.attributeName
      //   let mutation: ButtonMutation = {}
      //   if (target && attr) {
      //     if (attr === 'disabled') {
      //       mutation.disabled = target.disabled
      //     }
      //     if (attr === 'class') {
      //       mutation.classList = target.classList
      //     }
      //     this.domChange.emit(mutation)
      //   }
      // });
    });
    this.changes.observe(el.nativeElement, {
      attributeFilter: ['disabled'],
      // attributes: true,
      childList: false,
      subtree: false
    });

  }

  ngOnDestroy(): void {
    this.observer.disconnect();
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}
