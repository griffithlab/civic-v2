import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { Maybe, PageInfo } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { NzTableComponent } from 'ng-zorro-antd/table'
import { asyncScheduler, Observable } from 'rxjs'
import {
  debounceTime,
  filter,
  first,
  map,
  pairwise,
  tap,
  throttleTime,
} from 'rxjs/operators'

export type ScrollEvent = 'scroll' | 'stop' | 'bottom'
export type ScrollFetch = { first?: number; after?: string }

@UntilDestroy()
@Directive({
    selector: '[cvcTableScroller]',
    standalone: false
})
export class TableScrollerDirective implements AfterViewInit {
  @Output() cvcTableScrollerOnScroll = new EventEmitter<ScrollEvent>()
  @Output() cvcTableScrollerOnFetch = new EventEmitter<ScrollFetch>()

  // TargetHeight defines the height from the end of the viewport's
  // currently rendered rows that a 'bottom' scroll event will be emitted
  @Input() cvcTableScrollerTargetHeight: number = 140
  @Input() cvcTableScrollerQueryRef: Maybe<QueryRef<any, any>>
  @Input() cvcTableScrollerPageInfo: Maybe<PageInfo>
  @Input() cvcTableScrollerFetchCount: Maybe<number> = 50

  // call viewport scrollToIndex with provided index value
  @Input()
  set cvcTableScrollerToIndex(n: number) {
    if (n !== undefined) this.scrollToIndex(n)
  }

  @Input()
  set cvcTableScrollerToOffset(o: number) {
    if (o !== undefined) this.scrollToIndex(o)
  }
  // OnLoadMore events will only be sent in onLoadThrottleTime ms intervals
  private onLoadThrottleTime: number = 500

  // OnScrolled will emit true every onScrollThrottleTime ms while scrolling
  private onScrollThrottleTime: number = 250
  // OnScrolled will emit false onScrollDebounceTime ms after final throttled scroll event
  private onScrollDebounceTime: number = 300

  private viewport?: CdkVirtualScrollViewport

  // observable of all scroll events from viewport
  private scrolled$?: Observable<Event>

  // observable of all rowsRendered events from viewport
  private rendered$?: Observable<any>

  constructor(private host: NzTableComponent<any>) {}

  ngAfterViewInit() {
    if (this.host && this.host.cdkVirtualScrollViewport) {
      this.viewport = this.host.cdkVirtualScrollViewport
      this.scrolled$ = this.viewport.elementScrolled()
      this.rendered$ = this.viewport.renderedRangeStream
    } else {
      throw new Error(
        'cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.'
      )
    }

    // after initial rows rendered, force viewport size update
    // NOTE: upon initial render, the viewport computes its size. However, it often
    // fails to correctly calculate the dimensions of its container, most likely due
    // to the operation of several cvcAutoHeight directives in parent containers.
    // The cvcAutoHeight directives (probably) perform their adjustments after the viewport
    // calculates its size, so we end up with a big table w/ just a few rows displayed.
    // This fix calls viewport's check size function once, after initial rows have been rendered,
    // causing the viewport to resize to fit the its new container dimensions.
    this.rendered$
      .pipe(first())
      .subscribe(() => this.viewport!.checkViewportSize())

    // emit 'scroll' event when scroll starts, 'stop' scrollStopDebounce ms after last event
    this.scrolled$
      .pipe(
        // emits once at initial scroll event, once every throttleTime ms until no events,
        // then a final event
        throttleTime(this.onScrollThrottleTime, asyncScheduler, {
          leading: true,
          trailing: true,
        }),
        tap((_) => this.cvcTableScrollerOnScroll.next('scroll')),
        // wait debounceTime ms after last 'scroll' event to emit
        debounceTime(this.onScrollDebounceTime),
        untilDestroyed(this)
      )
      .subscribe((_) => {
        this.cvcTableScrollerOnScroll.next('stop')
      })

    // emit load more events from OnLoadMore
    this.scrolled$
      .pipe(
        // for each scroll event, map to distance between viewport bottom
        // and scroll content bottom
        map((_: Event) => {
          return this.viewport!.measureScrollOffset('bottom')
        }),
        // pair with previous offset to detect up/down scroll
        pairwise(),
        // pass only down scroll && bottom offsets within target height
        filter(([offset1, offset2]) => {
          return (
            offset2 < offset1 && offset2 < this.cvcTableScrollerTargetHeight
          )
        }),
        // throttle events to prevent spamming OnLoadMore events
        throttleTime(this.onLoadThrottleTime),
        untilDestroyed(this)
      )
      .subscribe((_) => {
        this.cvcTableScrollerOnScroll.next('bottom')
        try {
          this.loadMore(this.cvcTableScrollerPageInfo)
        } catch (e) {
          console.error(e)
        }
      })
  }

  loadMore(pi: Maybe<PageInfo>) {
    const queryRef = this.cvcTableScrollerQueryRef
    if (!pi && queryRef)
      throw new Error(
        `table-scroll directive requires PageInfo to use provided QueryRef.`
      )
    if (pi && !queryRef)
      throw new Error(
        `table-scroll directive requires valid QueryRef when PageInfo provided.`
      )
    if (pi && queryRef) {
      const [fetchCount, hasNextPage, endCursor] = [
        this.cvcTableScrollerFetchCount,
        pi.hasNextPage,
        pi.endCursor,
      ]
      if (fetchCount && endCursor) {
        if (hasNextPage) {
          this.cvcTableScrollerOnFetch.next({
            first: fetchCount,
            after: endCursor,
          })
        } else {
          return
        }
      } else {
        throw new Error(`table-scroll PageInfo invalid.`)
      }
    }
  }

  scrollToIndex(index: number): void {
    const [host, viewport] = [this.host, this.host.cdkVirtualScrollViewport]
    if (host && viewport) {
      viewport.scrollToIndex(index)
    } else {
      throw new Error(`table-scroll scrollToIndex() cannot find host viewport.`)
    }
  }

  scrollToOffset(offset: number): void {
    const [host, viewport] = [this.host, this.host.cdkVirtualScrollViewport]
    if (host && viewport) {
      viewport.scrollToOffset(offset)
    } else {
      throw new Error(
        `table-scroll scrollToOffset() cannot find host viewport.`
      )
    }
  }
}
