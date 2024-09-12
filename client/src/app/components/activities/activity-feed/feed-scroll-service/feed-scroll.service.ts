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
import { FeedItemToggle } from '@app/components/activities/activity-feed/feed-item/feed-item.component'

export interface ScrollerState {
  isScrolling: boolean
  isAtTop: boolean
  isAtBottom: boolean
  toggledItems: Set<number>
}

// configure ngx-ui-scroll's event listners
export function configureScrollerRoutines(
  context: CvcActivityFeed,
  state: ScrollerStateService
) {
  return class extends Routines {
    onScroll(handler: EventListener): () => void {
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

      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable({ providedIn: 'any' })
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  onScrollEvent$: Subject<Event>
  onToggleItem$: Subject<FeedItemToggle>
  onScrollPosition$: Subject<number>
  onScrollerSize$: Subject<number>
  onViewportSize$: Subject<number>

  constructor(private zone: NgZone) {
    super()

    this.onScrollEvent$ = new Subject<Event>()
    this.onToggleItem$ = new Subject<FeedItemToggle>()
    this.onScrollPosition$ = new Subject<number>()
    this.onScrollerSize$ = new Subject<number>()
    this.onViewportSize$ = new Subject<number>()

    // initial defaults
    this.set('isScrolling', false)
    this.set('toggledItems', new Set())
    this.set('isAtTop', true)
    this.set('isAtBottom', true)

    // convert scroll event stream to throttled, distinct boolean state updates
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
        const isAtTop = scrollPosition <= 0
        const isAtBottom = scrollPosition + viewportSize >= scrollerSize
        // if(scrollPosition === 0) then at top
        // if(scrollerSize - viewportSize === scrollPosition) then at bottom
        this.zone.run(() => {
          this.set('isAtTop', isAtTop)
          this.set('isAtBottom', isAtBottom)
        })
      })

    // update state toggledItems on toggle events
    this.onToggleItem$
      .pipe(untilDestroyed(this))
      .subscribe((item: FeedItemToggle) => {
        this.zone.run(() => {
          const toggledItems = this.state().toggledItems
          if (item.showDetails === true) {
            if (!toggledItems.has(item.id)) {
              toggledItems.add(item.id)
              this.set('toggledItems', toggledItems)
            }
          } else {
            if (toggledItems.has(item.id)) {
              toggledItems.delete(item.id)
              this.set('toggledItems', toggledItems)
            }
          }
        })
      })
  }
}
