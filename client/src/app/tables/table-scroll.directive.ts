import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'
import {
  DestroyRef,
  Directive,
  effect,
  inject,
  input,
  output,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Maybe, PageInfo } from '@app/generated/civic.apollo.types'
import { NzTableComponent } from 'ng-zorro-antd/table'
import { asyncScheduler } from 'rxjs'
import {
  debounceTime,
  filter,
  map,
  take,
  tap,
  throttleTime,
} from 'rxjs/operators'

/** phase of a scroll gesture; hosts use it to suspend expensive cell content */
export type CvcScrollEvent = 'scroll' | 'stop' | 'bottom'

/** a request for the next page, in relay terms */
export type CvcScrollFetch = { first: number; after: string }

/** distance from the end of the rendered rows at which to ask for more */
const DEFAULT_TARGET_HEIGHT = 140
/** at most one fetch request per this interval */
const LOAD_THROTTLE_MS = 500
/** 'scroll' repeats at this interval while a gesture continues */
const SCROLL_THROTTLE_MS = 250
/** 'stop' fires this long after the last throttled scroll */
const SCROLL_DEBOUNCE_MS = 300

/**
 * Emits scroll phase and next-page requests for a virtual-scrolled nz-table.
 *
 * Replaces the two byte-identical `table-scroller.directive.ts` copies in the
 * managers. It reports rather than acts: the host owns the QueryRef and decides
 * what a fetch request means, which is what lets one query pipeline serialise
 * refetches and fetchMores instead of racing them. (The older app-wide
 * `cvcTableScroll` calls `fetchMore` itself; it stays until the browse tables
 * move onto this table, at which point it goes too.)
 *
 * Two behaviours differ deliberately from the directives it replaces:
 *
 * 1. Bottom detection reads the current offset instead of comparing successive
 *    offsets with `pairwise()`. The old form required two distinct decreasing
 *    readings, so dragging the scrollbar to the end in one motion produced a
 *    single event and silently fetched nothing.
 * 2. A fetch is not re-requested for a cursor already in flight, so the looser
 *    trigger above cannot turn into a burst of duplicate pages.
 */
@Directive({ selector: '[cvcTableScroll]' })
export class CvcTableScrollDirective {
  private readonly host = inject(NzTableComponent<unknown>, { host: true })
  private readonly destroyRef = inject(DestroyRef)

  /** how close to the end, in px, counts as "at the bottom" */
  readonly targetHeight = input(DEFAULT_TARGET_HEIGHT, {
    alias: 'cvcTableScrollTargetHeight',
  })
  /** rows per page; only consulted when a fetch is actually requested */
  readonly fetchCount = input(50, { alias: 'cvcTableScrollFetchCount' })
  /** the current connection's page info; without it nothing is ever fetched */
  readonly pageInfo = input<Maybe<PageInfo>>(undefined, {
    alias: 'cvcTableScrollPageInfo',
  })
  /** set to send the viewport back to a row, e.g. row 0 after a refetch */
  readonly scrollToIndex = input<Maybe<number>>(undefined, {
    alias: 'cvcTableScrollToIndex',
  })

  // named for their binding rather than aliased: @angular-eslint/no-output-rename
  // is an error, and an alias here bought nothing the member name cannot
  readonly cvcTableScrollPhase = output<CvcScrollEvent>()
  readonly cvcTableScrollFetch = output<CvcScrollFetch>()

  /** the cursor a fetch has already been requested for, to avoid re-asking */
  private requestedCursor?: string

  constructor() {
    effect(() => {
      const index = this.scrollToIndex()
      if (index === undefined || index === null) return
      this.viewport()?.scrollToIndex(index)
    })

    // the viewport only exists after the table has rendered, so binding to it
    // waits for a microtask rather than running in the constructor
    afterViewportReady(this.host, (viewport) => this.connect(viewport))
  }

  private viewport(): Maybe<CdkVirtualScrollViewport> {
    return this.host.cdkVirtualScrollViewport
  }

  private connect(viewport: CdkVirtualScrollViewport): void {
    this.keepViewportMeasured(viewport)

    const scrolled = viewport.elementScrolled()

    scrolled
      .pipe(
        throttleTime(SCROLL_THROTTLE_MS, asyncScheduler, {
          leading: true,
          trailing: true,
        }),
        tap(() => this.cvcTableScrollPhase.emit('scroll')),
        debounceTime(SCROLL_DEBOUNCE_MS),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => this.cvcTableScrollPhase.emit('stop'))

    scrolled
      .pipe(
        map(() => viewport.measureScrollOffset('bottom')),
        filter((offset) => offset < this.targetHeight()),
        throttleTime(LOAD_THROTTLE_MS),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        this.cvcTableScrollPhase.emit('bottom')
        this.requestFetch()
      })
  }

  /**
   * Keeps the viewport's measurement in step with its container's actual size.
   *
   * CDK measures the viewport once, during its first render — which lands
   * before the auto-height directives above it have finished sizing the
   * container. The viewport is left believing it is short, renders a handful of
   * rows into a tall table, and never re-measures. The long-standing workaround
   * was a one-shot `checkViewportSize()` after the first rendered range, plus,
   * on some tables, a min-height chosen to force the initial correction.
   *
   * Both are timing guesses. Observing the element instead removes the timing
   * question: whatever resizes it and whenever — auto-height settling, a drawer
   * opening, a window resize, a column-visibility change — the measurement
   * follows. The re-measure is deferred to an animation frame and coalesced,
   * because `checkViewportSize()` can itself resize the element and would
   * otherwise re-enter the observer.
   */
  private keepViewportMeasured(viewport: CdkVirtualScrollViewport): void {
    const element = viewport.elementRef.nativeElement
    let scheduled = false

    const remeasure = () => {
      if (scheduled) return
      scheduled = true
      requestAnimationFrame(() => {
        scheduled = false
        viewport.checkViewportSize()
      })
    }

    const observer = new ResizeObserver(remeasure)
    observer.observe(element)
    // the container is what the auto-height directives actually resize
    if (element.parentElement) observer.observe(element.parentElement)

    this.destroyRef.onDestroy(() => observer.disconnect())

    // covers the first paint, before any resize has necessarily occurred
    viewport.renderedRangeStream
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(remeasure)
  }

  private requestFetch(): void {
    const fetch = nextFetch(
      this.pageInfo(),
      this.fetchCount(),
      this.requestedCursor
    )
    if (!fetch) return
    this.requestedCursor = fetch.after
    this.cvcTableScrollFetch.emit(fetch)
  }
}

/**
 * The next page to ask for, or undefined when there is nothing to ask for.
 *
 * Split out from the directive because it carries the rules worth testing, and
 * exercising them through a directive would mean standing up a real
 * virtual-scroll viewport with real layout — which jsdom does not provide.
 */
export function nextFetch(
  pageInfo: Maybe<PageInfo>,
  fetchCount: number,
  requestedCursor: Maybe<string>
): Maybe<CvcScrollFetch> {
  if (!pageInfo?.hasNextPage) return undefined
  const after = pageInfo.endCursor
  // endCursor is nullable on an empty connection; and re-requesting the cursor
  // already in flight would append the same page twice, which is the risk the
  // looser bottom-detection above would otherwise introduce
  if (!after || after === requestedCursor) return undefined
  return { first: fetchCount, after }
}

/**
 * Runs `fn` once the table has produced its virtual-scroll viewport. nz-table
 * creates it during its own first render, so it is not available when a
 * directive on the same element constructs.
 */
function afterViewportReady(
  host: NzTableComponent<unknown>,
  fn: (viewport: CdkVirtualScrollViewport) => void
): void {
  queueMicrotask(() => {
    const viewport = host.cdkVirtualScrollViewport
    if (viewport) {
      fn(viewport)
      return
    }
    // one frame later covers the case where the table renders asynchronously
    requestAnimationFrame(() => {
      const late = host.cdkVirtualScrollViewport
      if (!late) {
        throw new Error(
          'cvcTableScroll found no cdkVirtualScrollViewport on its host nz-table. ' +
            'The table needs [nzVirtualItemSize] and an nz-virtual-scroll body.'
        )
      }
      fn(late)
    })
  })
}
