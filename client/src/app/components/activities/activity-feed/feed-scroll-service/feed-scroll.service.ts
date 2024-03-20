import { computed, Injectable, NgZone, Signal, signal } from '@angular/core'
import { SignalStateService } from '@app/components/activities/activity-feed/feed-scroll-service/signal-state.service'
import {
  asyncScheduler,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  of,
  scan,
  Subject,
  switchMap,
  tap,
  timer,
} from 'rxjs'
import { pairwise, shareReplay, startWith, throttleTime } from 'rxjs/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { Routines } from 'ngx-ui-scroll'
import { tag } from 'rxjs-spy/operators'
import { toSignal } from '@angular/core/rxjs-interop'

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
      })
      return super.onScroll(handler)
    }
  }
}

@UntilDestroy()
@Injectable()
export class ScrollerStateService extends SignalStateService<ScrollerState> {
  onScrollEvent$: Subject<Event>
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

    this.bof$.pipe(untilDestroyed(this)).subscribe((bof) => {
      this.set('atBeginning', bof)
    })

    this.eof$.pipe(untilDestroyed(this)).subscribe((eof) => {
      this.set('atEnd', eof)
    })

    this.onScrollEvent$
      .pipe(
        // emit the first scroll event immediately, then ignore for 250ms
        throttleTime(250, undefined, { leading: true, trailing: false }),
        // after the first event, switch to a new observable
        switchMap(() => {
          // inner observable emits true immediately (for the first event),
          // then waits for 500ms of no events to emit false
          return timer(500).pipe(
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
        this.zone.run(() => {
          this.setIsScrolling(scrolling)
        })
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
}
