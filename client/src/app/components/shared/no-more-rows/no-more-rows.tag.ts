import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { BehaviorSubject, interval } from 'rxjs'
import { first } from 'rxjs/operators'

@Component({
  selector: 'cvc-no-more-rows',
  templateUrl: './no-more-rows.tag.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NoMoreRowsTag {
  @Input()
  set cvcShowTag(h: Maybe<boolean>) {
    if (h === undefined) return
    if (h) this.showTag()
  }

  showTag$: BehaviorSubject<boolean>

  constructor(private cdr: ChangeDetectorRef) {
    this.showTag$ = new BehaviorSubject<boolean>(false)
  }

  showTag() {
    if (this.showTag$.getValue() === false) {
      this.showTag$.next(true)
      interval(3000)
        .pipe(first())
        .subscribe(() => {
          this.showTag$.next(false)
          this.cdr.detectChanges()
        })
    }
  }
}
