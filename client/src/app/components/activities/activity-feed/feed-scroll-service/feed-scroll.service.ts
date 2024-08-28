import { Injectable, NgZone } from '@angular/core'
import { SignalStateService } from '@app/components/activities/activity-feed/feed-scroll-service/signal-state.service'
import {
  combineLatest,
  distinctUntilChanged,
  map,
  Subject,
  switchMap,
  timer,
} from 'rxjs'
import { shareReplay, startWith, throttleTime } from 'rxjs/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { CvcActivityFeedComponent } from '@app/components/activities/activity-feed/activity-feed.component'
import { Routines } from 'ngx-ui-scroll'
import { tag } from 'rxjs-spy/operators'

export interface ScrollerState {
  isScrolling: boolean
  atBeginning: boolean
  atEnd: boolean
}

export function configureScrollerRoutines(
  context: CvcActivityFeedComponent,
  state: ScrollerStateService
) {
  return class extends Routines {
    onScroll(handler: EventListener): () => void {
      console.log('**** configuring scroller Routines')
      // for every scroll event, emit the event & update position, size info
      this.viewport.addEventListener('scroll', (ev: Event) => {
        state.onScrollEvent$.next(ev)
        state.onScrollPosition$.next(super.getScrollPosition())
        state.onScrollerSize$.next(super.getScrollerSize())
        state.onViewportSize$.next(super.getViewportSize())
      })

      // emit initial values
      state.onViewportSize$.next(super.getViewportSize())
      state.onScrollPosition$.next(super.getScrollPosition())
      state.onScrollerSize$.next(super.getScrollerSize())

      // return original onScroll handler
      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable({ providedIn: 'any' })
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  onScrollEvent$: Subject<Event>
  onScrollPosition$: Subject<number>
  onScrollerSize$: Subject<number>
  onViewportSize$: Subject<number>

  constructor(private zone: NgZone) {
    super()

    this.onScrollEvent$ = new Subject<Event>()
    this.onScrollPosition$ = new Subject<number>()
    this.onScrollerSize$ = new Subject<number>()
    this.onViewportSize$ = new Subject<number>()

    // initial defaults
    this.set('atBeginning', false)
    this.set('atEnd', false)
    this.set('isScrolling', false)

    // set isScrolling true on scroll event, then false after 400ms of no events
    this.onScrollEvent$
      .pipe(
        // emit the first scroll event immediately (leading: true), then throttle
        throttleTime(200, undefined, { leading: true, trailing: false }),
        // after the first event, switch to a new observable
        switchMap(() => {
          // inner observable emits true immediately (for the first event),
          // then emits false after timer completes
          return timer(300).pipe(
            map(() => false),
            startWith(true)
          )
        }),
        distinctUntilChanged(), // omit true events that make it past throttle time
        shareReplay(1),
        untilDestroyed(this)
      )
      .subscribe((scrolling) => {
        this.zone.run(() => {
          this.set('isScrolling', scrolling)
        })
      })

    combineLatest([
      this.onViewportSize$,
      this.onScrollerSize$,
      this.onScrollPosition$,
    ])
      .pipe(
        distinctUntilChanged(
          ([v1, v2, v3], [v4, v5, v6]) => v1 === v4 && v2 === v5 && v3 === v6
        ),
        shareReplay(1),
        untilDestroyed(this)
      )
      .subscribe(([viewportSize, scrollerSize, scrollPosition]) => {
        this.zone.run(() => {})
      })
  }
}
