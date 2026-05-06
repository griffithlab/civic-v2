import { Component, OnInit, signal, WritableSignal } from '@angular/core'
import {
  HomepageNewsItemsGQL,
  NewsItemFragment,
} from '@app/generated/civic.apollo'
import { filter, map } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'

@Component({
  selector: 'cvc-news-item-list',
  templateUrl: './news-item-list.component.html',
  styleUrls: ['./news-item-list.component.less'],
  standalone: false,
})
export class NewsItemListComponent implements OnInit {
  loading: WritableSignal<boolean> = signal(true)
  newsItems: WritableSignal<NewsItemFragment[]> = signal([])

  constructor(private gql: HomepageNewsItemsGQL) {}

  ngOnInit() {
    this.gql
      .fetch()
      .pipe(
        pluck('data'),
        filter(isNonNulled),
        map(({ newsItems }) => {
          this.loading.set(false)
          this.newsItems.set(newsItems)
        })
      )
      .subscribe()
  }
}
