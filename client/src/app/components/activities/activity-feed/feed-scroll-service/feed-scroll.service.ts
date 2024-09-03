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
import { FeedItemToggle } from '@app/components/activities/activity-feed/feed-item/feed-item.component'

export interface ScrollerState {
  isScrolling: boolean
  toggledItems: Set<number>
}

// configure ngx-ui-scroll's event listners
export function configureScrollerRoutines(
  context: CvcActivityFeedComponent,
  state: ScrollerStateService
) {
  return class extends Routines {
    onScroll(handler: EventListener): () => void {
      this.viewport.addEventListener('scroll', (ev: Event) => {
        state.onScrollEvent$.next(ev)
      })
      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable({ providedIn: 'any' })
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  onScrollEvent$: Subject<Event>
  onToggleItem$: Subject<FeedItemToggle>

  constructor(private zone: NgZone) {
    super()

    this.onScrollEvent$ = new Subject<Event>()
    this.onToggleItem$ = new Subject<FeedItemToggle>()

    // initial defaults
    this.set('isScrolling', false)
    this.set('toggledItems', new Set())

    // convert scroll event stream to throttled boolean state updates
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
    this.onToggleItem$
      .pipe(tag('feed-scroll.service onToggleItem$'),untilDestroyed(this))
      .subscribe((item: FeedItemToggle) => {
        this.zone.run(() => {
          const toggledItems = this.state().toggledItems
          if (toggledItems.has(item.id)) {
            toggledItems.delete(item.id)
          } else {
            toggledItems.add(item.id)
          }
          this.set('toggledItems', toggledItems)
        })
      })
  }
}
