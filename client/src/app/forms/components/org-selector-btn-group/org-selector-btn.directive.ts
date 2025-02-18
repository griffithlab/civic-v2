import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { from, Observable } from 'rxjs'
import { distinctUntilKeyChanged, filter, map } from 'rxjs/operators'

export interface ButtonMutation {
  type: 'disabled' | 'class' | 'hidden'
  change: boolean | string
  key: string
}
@UntilDestroy()
@Directive({
  selector: 'button[cvcOrgSelectorBtn]',
  standalone: false,
})
export class CvcOrgSelectorBtnDirective implements AfterViewInit, OnDestroy {
  @Output()
  public domChange = new EventEmitter()

  private changes: MutationObserver
  private mutation$!: Observable<MutationRecord>
  private disabledChange$!: Observable<ButtonMutation>

  public initialClass!: string
  constructor(private el: ElementRef) {
    // observe DOM mutations on attributes defined in attributeFilter
    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      from(mutations)
        .pipe(
          // filter(mr => mr.attributeName === 'disabled'),
          map((mr: MutationRecord) => {
            const t = mr.target as HTMLInputElement
            if (mr.attributeName === 'class') {
              return {
                type: 'class',
                change: t.classList.value,
                key: `${mr.attributeName}:${t.classList.value}`,
              }
            } else if (mr.attributeName === 'disabled') {
              return {
                type: 'disabled',
                change: t.disabled,
                key: `${mr.attributeName}:${t.disabled}`,
              }
            } else if (mr.attributeName === 'hidden') {
              return {
                type: 'hidden',
                change: t.hidden,
                key: `${mr.attributeName}:${t.hidden}`,
              }
            } else {
              return {
                type: mr.attributeName,
                change: 'unknown change type',
                key: `${mr.attributeName}:unknown-change-type`,
              }
            }
          }),
          distinctUntilKeyChanged('key'),
          untilDestroyed(this)
        )
        .subscribe((mutation) => {
          this.domChange.emit(mutation)
        })
    })

    this.changes.observe(this.el.nativeElement, {
      attributeFilter: ['class', 'disabled', 'hidden'],
      attributes: true,
      childList: false,
      subtree: false,
    })
  }

  ngAfterViewInit(): void {
    console.log(
      `directive ngAfterViewInit classList.value: ${this.el.nativeElement.classList.value}`
    )
    this.initialClass = this.el.nativeElement.classList.value
  }
  ngOnDestroy(): void {
    this.changes.disconnect()
  }
}
