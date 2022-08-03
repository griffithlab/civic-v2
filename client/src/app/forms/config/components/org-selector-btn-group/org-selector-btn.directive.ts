import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { from, Observable } from 'rxjs';
import { tag } from 'rxjs-spy/cjs/operators/tag';
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators';

export interface ButtonMutation {
  type: any
  change: any
}
@UntilDestroy()
@Directive({
  selector: 'button[cvcOrgSelectorBtn]',
})
export class CvcOrgSelectorBtnDirective implements AfterViewInit, OnDestroy {
  @Output()
  public domChange = new EventEmitter();

  private changes: MutationObserver;
  private mutation$!: Observable<MutationRecord>
  private disabledChange$!: Observable<ButtonMutation>

  public initialClass!: string
  constructor(private el: ElementRef) {
    // observe DOM mutations on attributes defined in attributeFilter
    // TODO: handle classList updates to coordinate nz-button types, styles.
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      from(mutations)
        .pipe(
          // filter(mr => mr.attributeName === 'disabled'),
          map((mr: MutationRecord) => {
            const t = mr.target as HTMLInputElement
            if (mr.attributeName === 'disabled') {
              return {
                type: 'disabled',
                change: t.disabled,
                key: `${mr.attributeName}:${t.disabled}`
              }
            } else if (mr.attributeName === 'class') {
              return {
                type: 'class',
                change: t.classList.value,
                key: `${mr.attributeName}:${t.classList.value}`}
            } else {
              return {
                type: mr.attributeName,
                change: 'unknown change type',
                key: `${mr.attributeName}:unknown-change-type`
              }
            }
          }),
          distinctUntilKeyChanged('key'),
          tag('org-selector-btn.directive from(mutation)'),
          untilDestroyed(this)
        )
        .subscribe(mutation => {
          this.domChange.emit(mutation)
        });
    });

    this.changes.observe(this.el.nativeElement, {
      attributeFilter: [
        'class',
        'disabled',
      ],
      attributes: true,
      childList: false,
      subtree: false
    });

  }

  ngAfterViewInit(): void {
    console.log(`directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`)
    this.initialClass = this.el.nativeElement.classList.value;
  }
  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}
