import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  signal,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import {
  HomepageNewsItemsGQL,
  NewsItemFieldsFragment,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-homepage-news-items',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HomepageNewsItemsComponent implements OnInit {
  readonly loading = signal(true)
  readonly newsItems = signal<NewsItemFieldsFragment[]>([])
  readonly errorMessage = signal<string | undefined>(undefined)

  private readonly destroyRef = inject(DestroyRef)

  constructor(private gql: HomepageNewsItemsGQL) {}

  ngOnInit(): void {
    this.loadNewsItems()
  }

  retryNewsItems(): void {
    this.loadNewsItems()
  }

  private loadNewsItems(): void {
    this.loading.set(true)
    this.errorMessage.set(undefined)

    this.gql
      .fetch(undefined, { fetchPolicy: 'network-only' })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ data }) => {
          this.newsItems.set(
            data.newsItems.edges
              .map(({ node }) => node)
              .filter(
                (node): node is NewsItemFieldsFragment => node !== undefined
              )
          )
          this.loading.set(false)
        },
        error: () => {
          this.newsItems.set([])
          this.errorMessage.set(
            'News and events could not be loaded. Please try again.'
          )
          this.loading.set(false)
        },
      })
  }
}
