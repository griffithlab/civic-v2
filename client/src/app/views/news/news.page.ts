import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {
  NewsItemFieldsFragment,
  NewsItemsPageGQL,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-news-page',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NewsPage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loadMoreSentinel', { static: true })
  private loadMoreSentinel!: ElementRef<HTMLElement>

  readonly pageSize = 10
  readonly totalCount = signal(0)
  readonly newsItems = signal<NewsItemFieldsFragment[]>([])
  readonly loading = signal(true)
  readonly loadingMore = signal(false)
  readonly hasNextPage = signal(false)
  readonly errorMessage = signal<string | undefined>(undefined)
  readonly loadMoreError = signal<string | undefined>(undefined)

  private readonly destroyRef = inject(DestroyRef)
  private endCursor?: string
  private intersectionObserver?: IntersectionObserver
  private sentinelRefreshFrame?: number

  constructor(private readonly gql: NewsItemsPageGQL) {}

  ngOnInit(): void {
    this.loadPage()
  }

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          this.loadMoreNewsItems()
        }
      },
      { rootMargin: '300px 0px' }
    )
    this.intersectionObserver.observe(this.loadMoreSentinel.nativeElement)
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect()
    if (this.sentinelRefreshFrame !== undefined) {
      cancelAnimationFrame(this.sentinelRefreshFrame)
    }
  }

  retryNewsItems(): void {
    this.loadPage()
  }

  loadMoreNewsItems(): void {
    if (
      this.loading() ||
      this.loadingMore() ||
      !this.hasNextPage() ||
      !this.endCursor
    ) {
      return
    }

    this.loadPage(this.endCursor)
  }

  private loadPage(after?: string): void {
    const appending = after !== undefined

    if (appending) {
      this.loadingMore.set(true)
      this.loadMoreError.set(undefined)
    } else {
      this.newsItems.set([])
      this.totalCount.set(0)
      this.endCursor = undefined
      this.hasNextPage.set(false)
      this.loading.set(true)
      this.errorMessage.set(undefined)
      this.loadMoreError.set(undefined)
    }

    this.gql
      .fetch({ first: this.pageSize, after }, { fetchPolicy: 'network-only' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ data }) => {
          const connection = data.newsItems
          const incomingItems = connection.edges
            .map(({ node }) => node)
            .filter(
              (node): node is NewsItemFieldsFragment => node !== undefined
            )
          this.newsItems.update((items) =>
            appending
              ? this.appendUniqueItems(items, incomingItems)
              : incomingItems
          )
          this.totalCount.set(connection.totalCount)
          this.endCursor = connection.pageInfo.endCursor ?? undefined
          this.hasNextPage.set(connection.pageInfo.hasNextPage)
          this.loading.set(false)
          this.loadingMore.set(false)
          this.refreshSentinelObservation()
        },
        error: () => {
          if (appending) {
            this.loadMoreError.set(
              'Additional news and events could not be loaded. Please try again.'
            )
            this.loadingMore.set(false)
          } else {
            this.errorMessage.set(
              'News and events could not be loaded. Please try again.'
            )
            this.loading.set(false)
          }
        },
      })
  }

  private appendUniqueItems(
    existingItems: NewsItemFieldsFragment[],
    incomingItems: NewsItemFieldsFragment[]
  ): NewsItemFieldsFragment[] {
    const existingIds = new Set(existingItems.map(({ id }) => id))
    return [
      ...existingItems,
      ...incomingItems.filter(({ id }) => !existingIds.has(id)),
    ]
  }

  private refreshSentinelObservation(): void {
    if (!this.intersectionObserver) return

    if (this.sentinelRefreshFrame !== undefined) {
      cancelAnimationFrame(this.sentinelRefreshFrame)
    }

    this.sentinelRefreshFrame = requestAnimationFrame(() => {
      const sentinel = this.loadMoreSentinel.nativeElement
      this.intersectionObserver?.unobserve(sentinel)
      this.intersectionObserver?.observe(sentinel)
      this.sentinelRefreshFrame = undefined
    })
  }
}
