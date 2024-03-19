import { computed, Injectable, Signal, signal } from '@angular/core'
import { SignalStateService } from '@app/components/activities/activity-feed/feed-scroll-service/signal-state.service'
import { asyncScheduler, of, Subject, switchMap, timer } from 'rxjs'
import { throttleTime } from 'rxjs/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { Routines } from 'ngx-ui-scroll'
import { tag } from 'rxjs-spy/operators'

export interface ScrollerState {
  isScrolling: boolean
  atBeginning: boolean
  atEnd: boolean
}

export function configureScrollerRoutines(context: CvcActivityFeed) {
  return class extends Routines {
    onScroll(handler: EventListener): () => void {
      console.log('onScroll initialized')
      this.viewport.addEventListener('scroll', () =>
        context.scrollerState.isScrolling$.next(true)
      )
      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable()
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  isScrolling$: Subject<boolean>
  bof$: Subject<boolean>
  eof$: Subject<boolean>

  constructor() {
    super()

    this.setIsScrolling(false)
    this.setAtBeginning(false)
    this.setAtEnd(false)
    this.bof$ = new Subject<boolean>()
    this.eof$ = new Subject<boolean>()
    this.isScrolling$ = new Subject<boolean>()

    this.bof$.pipe(untilDestroyed(this)).subscribe((bof) => {
      this.set('atBeginning', bof)
    })

    this.eof$.pipe(untilDestroyed(this)).subscribe((eof) => {
      this.set('atEnd', eof)
    })

    // vscroll's adapter doesn't emit scrolling events, instead
    // providing a stream of isLoading events that indicate when
    // it is creating/destroying items. it's a decent proxy for
    // scrolling, after transforming its true/false pairs into
    // a throttled stream that emits true at the beginning and
    // false at the end.
    this.isScrolling$
      .pipe(
        // emit loading events only every 500ms,
        // transmitting the leading event
        throttleTime(500, asyncScheduler, { leading: true, trailing: true }),
        // if the value is false, wait 500ms
        // and emit false if no other events emitted
        switchMap((value) =>
          value ? of(value) : timer(500).pipe(switchMap(() => of(false)))
        ),
        tag('isScrolling$'),
        untilDestroyed(this)
      )
      .subscribe((scrolling) => {
        this.set('isScrolling', scrolling)
      })
  }

  setIsScrolling(scrolling: boolean) {
    this.set('isScrolling', scrolling)
  }

  setAtBeginning(atBeginning: boolean) {
    this.set('atBeginning', atBeginning)
  }

  setAtEnd(atEnd: boolean) {
    this.set('atEnd', atEnd)
  }

  setIsLoading(loading: boolean) {
    this.isScrolling$.next(loading)
  }
}
// // scrolling.service.ts
// import { Injectable, Signal } from '@angular/core'
// import {
//   asyncScheduler,
//   BehaviorSubject,
//   combineLatestWith,
//   debounceTime,
//   distinctUntilChanged,
//   filter,
//   fromEvent,
//   map,
//   merge,
//   Observable,
//   of,
//   Subject,
//   switchMap,
//   tap,
//   timer,
//   withLatestFrom,
// } from 'rxjs'
// import { ActivityInterfaceEdge, Maybe } from '@app/generated/civic.apollo'
// import { IAdapter } from 'ngx-ui-scroll'
// import { combineLatest } from 'rxjs/internal/operators/combineLatest'
// import { pairwise, shareReplay, throttleTime } from 'rxjs/operators'
// import { tag } from 'rxjs-spy/operators'
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
// import { isNonNulled } from 'rxjs-etc'
//
// export type FeedScrollStatus = 'started' | 'stopped' | 'top' | 'bottom'
// export type VScrollEvent = 'loading' | 'bof' | 'eof'
//
// @UntilDestroy()
// @Injectable()
// export class FeedScrollService {
//   private status$!: Observable<FeedScrollStatus>
//   isScrolling$: Subject<boolean>
//   isAtTop$: Subject<boolean>
//   isAtBottom$: Subject<boolean>
//   constructor() {
//     this.isScrolling$ = new BehaviorSubject<boolean>(false)
//     this.isAtTop$ = new BehaviorSubject<boolean>(false)
//     this.isAtBottom$ = new BehaviorSubject<boolean>(false)
//   }
//
//   configure(adapter: IAdapter<any>): void {
//     this.status$ = merge(
//       adapter.isLoading$.pipe(map((event) => ({ type: 'loading', event }))),
//       adapter.bof$.pipe(map((event) => ({ type: 'bof', event }))),
//       adapter.eof$.pipe(map((event) => ({ type: 'eof', event })))
//     ).pipe(
//       map(({ type, event }) => {
//         if (type === 'loading' && event === true) {
//           return 'started'
//         }
//         if (type === 'loading' && event === false) {
//           return 'stopped'
//         }
//         if (type === 'bof') {
//           return 'top'
//         }
//         if (type === 'eof') {
//           return 'bottom'
//         }
//         return 'stopped'
//       }),
//       shareReplay(1)
//     )
//
//     // isScrolling$
//     this.status$
//       .pipe(
//         map((status) => {
//           if (!(status === 'started' || status === 'stopped')) {
//             return
//           } else {
//             return status
//           }
//         }),
//         filter(isNonNulled),
//         map((status) => status === 'started'),
//         throttleTime(500, asyncScheduler, { leading: true, trailing: true }),
//         switchMap((value) =>
//           value ? of(value) : timer(500).pipe(switchMap(() => of(false)))
//         ),
//         tap((status) => this.isScrolling$.next(status)),
//         untilDestroyed(this)
//       )
//       .subscribe()
//
//     // isAtTop$
//     this.status$
//       .pipe(
//         filter((status) => status === 'top' || status === 'bottom'),
//         map((status) => status === 'top'),
//         tap((isAtTop) => {
//           this.isAtTop$.next(isAtTop)
//           this.isAtBottom$.next(!isAtTop)
//         }),
//         tag('scroll-service isAtTop$'),
//         shareReplay(1),
//         untilDestroyed(this)
//       )
//       .subscribe()
//
//     // isAtBottom$
//     this.status$
//       .pipe(
//         filter((status) => status === 'bottom'),
//         map((status) => status === 'bottom'),
//         tap((isAtBottom) => {
//           this.isAtTop$.next(!isAtBottom)
//           this.isAtBottom$.next(isAtBottom)
//         }),
//         tag('scroll-service isAtBottom$'),
//         shareReplay(1),
//         untilDestroyed(this)
//       )
//       .subscribe()
//   }
// }
