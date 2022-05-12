import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'cvc-no-more-rows',
  templateUrl: './no-more-rows.tag.html',
  styleUrls: ['./no-more-rows.tag.less']
})
export class NoMoreRowsTag implements OnInit {
  @Input() cvcShowTag!: boolean
  set triggerDispay(h: boolean) { if (h) this.showTag() }

  showTag$: BehaviorSubject<boolean>

  constructor() {
    this.showTag$ = new BehaviorSubject<boolean>(false)
  }

  showTag() {
    if (this.showTag$.getValue() === false) {
      this.showTag$.next(true);
      interval(3000)
        .pipe(first())
        .subscribe(() => this.showTag$.next(false))
    }
  }

  ngOnInit() {

  }

}
