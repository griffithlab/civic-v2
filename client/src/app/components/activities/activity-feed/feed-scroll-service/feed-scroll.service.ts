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
      this.viewport.addEventListener('scroll', (ev: Event) => {
        context.scrollerState.onScrollEvent$.next(ev)
        context.scrollerState.onScrollPosition$.next(super.getScrollPosition())
        context.scrollerState.onScrollerSize$.next(super.getScrollerSize())
        context.scrollerState.onViewportSize$.next(super.getViewportSize())
      })
      // emit initial values
      context.scrollerState.onViewportSize$.next(super.getViewportSize())
      context.scrollerState.onScrollPosition$.next(super.getScrollPosition())
      context.scrollerState.onScrollerSize$.next(super.getScrollerSize())
      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable()
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  onScrollEvent$: Subject<Event>
  onScrollPosition$: Subject<number>
  onScrollerSize$: Subject<number>
  onViewportSize$: Subject<number>

  bof$: Subject<boolean>
  eof$: Subject<boolean>

  constructor(private zone: NgZone) {
    super()

    this.setIsScrolling(false)
    this.setAtBeginning(false)
    this.setAtEnd(false)
    this.bof$ = new Subject<boolean>()
    this.eof$ = new Subject<boolean>()
    this.onScrollEvent$ = new Subject<Event>()
    this.onScrollPosition$ = new Subject<number>()
    this.onScrollerSize$ = new Subject<number>()
    this.onViewportSize$ = new Subject<number>()

    this.onScrollPosition$.pipe(tag('service scroll position')).subscribe()
    this.onScrollerSize$.pipe(tag('service scroller size')).subscribe()
    this.onViewportSize$.pipe(tag('service viewport size')).subscribe()

    this.onScrollEvent$
      .pipe(
        // emit the first scroll event immediately, then ignore for 250ms
        throttleTime(250, undefined, { leading: true, trailing: false }),
        // after the first event, switch to a new observable
        switchMap(() => {
          // inner observable emits true immediately (for the first event),
          // then waits for 500ms of no events to emit false
          return timer(300).pipe(
            map(() => false),
            // start with true so that we emit true immediately for the first event after the switchMap
            startWith(true)
          )
        }),
        distinctUntilChanged(),
        shareReplay(1),
        untilDestroyed(this)
      )
      .subscribe((scrolling) => {
        this.setIsScrolling(scrolling)
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
        tag('ScrollService combineLatest'),
        untilDestroyed(this)
      )
      .subscribe()

    this.bof$
      .pipe(
        // tag('service bof'),
        untilDestroyed(this)
      )
      .subscribe((bof) => {
        console.log('setAtBeginning', bof)
        this.setAtBeginning(bof)
      })

    this.eof$
      .pipe(
        // tag('service eof'),
        untilDestroyed(this)
      )
      .subscribe((eof) => {
        console.log('setAtBeginning', eof)
        this.setAtEnd(eof)
      })
  }

  setIsScrolling(scrolling: boolean) {
    this.zone.run(() => {
      this.set('isScrolling', scrolling)
    })
  }

  setAtBeginning(atBeginning: boolean) {
    this.zone.run(() => {
      this.set('atBeginning', atBeginning)
    })
  }

  setAtEnd(atEnd: boolean) {
    this.zone.run(() => {
      this.set('atEnd', atEnd)
    })
  }
}
