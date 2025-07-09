import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { AbstractControl } from '@angular/forms'
import { Maybe } from '@app/generated/civic.apollo'
import { UntilDestroy } from '@ngneat/until-destroy'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { combineLatestArray } from 'rxjs-etc'

@UntilDestroy({ arrayName: 'subscriptions' })
@Component({
  selector: 'cvc-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcFormDebugComponent implements OnInit {
  @Input() cvcForm: Maybe<AbstractControl>
  @Input() cvcModel: Maybe<any>

  watchModel: Maybe<any>
  subscriptions!: Subscription[]
  valueChange$!: BehaviorSubject<any>
  statusChange$!: BehaviorSubject<any>
  formChange$!: Observable<any>

  selectedIndex = 0

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // console.log('form-debug-panel onInit() called.')
    if (!this.cvcForm)
      throw new Error(`cvc-form-debug requires valid cvcForm Input.`)

    this.valueChange$ = new BehaviorSubject(this.cvcForm.value)
    this.statusChange$ = new BehaviorSubject(this.cvcForm.status)

    this.formChange$ = combineLatestArray<any>([
      this.statusChange$,
      this.valueChange$,
    ])

    this.watchModel = this.cvcModel
    this.subscriptions = [
      this.cvcForm.valueChanges.subscribe((v) => {
        this.watchModel = { ...this.cvcModel }
        this.valueChange$.next(v)
      }),
      this.cvcForm.statusChanges.subscribe((s) => {
        this.statusChange$.next(s)
      }),
      this.formChange$.subscribe((_) => {
        this.cdr.detectChanges()
      }),
    ]
  }
}
