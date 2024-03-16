// scrolling.service.ts
import { Injectable, Signal } from '@angular/core'
import {
  asyncScheduler,
  BehaviorSubject,
  combineLatestWith,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  tap,
  timer,
  withLatestFrom,
} from 'rxjs'
import { ActivityInterfaceEdge, Maybe } from '@app/generated/civic.apollo'
import { IAdapter } from 'ngx-ui-scroll'
import { combineLatest } from 'rxjs/internal/operators/combineLatest'
import { pairwise, shareReplay, throttleTime } from 'rxjs/operators'
import { tag } from 'rxjs-spy/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { isNonNulled } from 'rxjs-etc'

export type FeedScrollStatus = 'started' | 'stopped' | 'top' | 'bottom'
export type VScrollEvent = 'loading' | 'bof' | 'eof'

@UntilDestroy()
@Injectable()
export class FeedScrollService {
  private status$!: Observable<FeedScrollStatus>
  isScrolling$: Subject<boolean>
  isAtTop$: Subject<boolean>
  isAtBottom$: Subject<boolean>
  constructor() {
    this.isScrolling$ = new BehaviorSubject<boolean>(false)
    this.isAtTop$ = new BehaviorSubject<boolean>(false)
    this.isAtBottom$ = new BehaviorSubject<boolean>(false)
  }

  configure(adapter: IAdapter<any>): void {
    this.status$ = merge(
      adapter.isLoading$.pipe(map((event) => ({ type: 'loading', event }))),
      adapter.bof$.pipe(map((event) => ({ type: 'bof', event }))),
      adapter.eof$.pipe(map((event) => ({ type: 'eof', event })))
    ).pipe(
      map(({ type, event }) => {
        if (type === 'loading' && event === true) {
          return 'started'
        }
        if (type === 'loading' && event === false) {
          return 'stopped'
        }
        if (type === 'bof') {
          return 'top'
        }
        if (type === 'eof') {
          return 'bottom'
        }
        return 'stopped'
      }),
      shareReplay(1)
    )

    // isScrolling$
    this.status$
      .pipe(
        map((status) => {
          if (!(status === 'started' || status === 'stopped')) {
            return
          } else {
            return status
          }
        }),
        filter(isNonNulled),
        map((status) => status === 'started'),
        throttleTime(500, asyncScheduler, { leading: true, trailing: true }),
        switchMap((value) =>
          value ? of(value) : timer(500).pipe(switchMap(() => of(false)))
        ),
        tap((status) => this.isScrolling$.next(status)),
        untilDestroyed(this)
      )
      .subscribe()

    // isAtTop$
    this.status$
      .pipe(
        filter((status) => status === 'top' || status === 'bottom'),
        map((status) => status === 'top'),
        tap((isAtTop) => {
          this.isAtTop$.next(isAtTop)
          this.isAtBottom$.next(!isAtTop)
        }),
        tag('scroll-service isAtTop$'),
        shareReplay(1),
        untilDestroyed(this)
      )
      .subscribe()

    // isAtBottom$
    this.status$
      .pipe(
        filter((status) => status === 'bottom'),
        map((status) => status === 'bottom'),
        tap((isAtBottom) => {
          this.isAtTop$.next(!isAtBottom)
          this.isAtBottom$.next(isAtBottom)
        }),
        tag('scroll-service isAtBottom$'),
        shareReplay(1),
        untilDestroyed(this)
      )
      .subscribe()
  }
}
// this.scrollStatus$ = merge(
//       this.scrollAdapter.isLoading$.pipe(
//           map((event) => ({ type: 'loading', event }))
//         ),
//       this.scrollAdapter.bof$.pipe(map((event) => ({ type: 'bof', event }))),
//       this.scrollAdapter.eof$.pipe(map((event) => ({ type: 'eof', event })))
//     ).pipe(
//       map(({ type, event }) => {
//           if (type === 'loading' && event === true) {
//               return 'started'
//               }
//           if (type === 'loading' && event === false) {
//               return 'stopped'
//               }
//           if (type === 'bof') {
//               return 'top'
//               }
//           if (type === 'eof') {
//               return 'bottom'
//               }
//           return 'stopped'
//           }),
//       shareReplay(1)
//       // tag('scroll-service status$')
//     )
//
//   this.scrollStatus$
//     .pipe(
//       map((status) => {
//           if (!(status === 'started' || status === 'stopped')) {
//               return
//             } else {
//               return status
//               }
//         }),
//       filter(isNonNulled),
//       map((status) => status === 'started'),
//       throttleTime(500, asyncScheduler, { leading: true, trailing: true }),
//       distinctUntilChanged(),
//       tag('scroll-service isScrolling$'),
//       untilDestroyed(this)
//     )
//   .subscribe((isScrolling) => {
//       console.log('setting $isScrolling: ', isScrolling)
//       this.$isScrolling.update((isScrolling) => isScrolling)
//     })
