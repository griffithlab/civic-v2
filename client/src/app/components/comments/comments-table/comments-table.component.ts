import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  buildSortParams,
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import {
  CommentBrowseFieldsFragment,
  CommentConnection,
  CommentsBrowseGQL,
  CommentsBrowseQuery,
  CommentsBrowseQueryVariables,
  DateSortColumns,
  Maybe,
  PageInfo,
  SortDirection,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcCommentsTableComponent implements OnInit, OnChanges {
  @Input() ids: Maybe<number[]>
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize = 35

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<CommentsBrowseQuery, CommentsBrowseQueryVariables>
  result$!: Observable<ApolloQueryResult<CommentsBrowseQuery>>
  connection$!: Observable<CommentConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<CommentBrowseFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  isScrolling = false

  sortColumns: typeof DateSortColumns = DateSortColumns

  constructor(
    private gql: CommentsBrowseGQL,
    private cdr: ChangeDetectorRef
  ) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      ids: this.ids,
      first: this.initialPageSize,
      sortBy: {
        column: DateSortColumns.Created,
        direction: SortDirection.Desc,
      },
    })

    this.result$ = this.queryRef.valueChanges

    this.initialLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      takeWhile((l) => l !== false, true)
    )

    this.moreLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      skip(2)
    )

    this.connection$ = this.result$.pipe(
      pluck('data', 'comments'),
      filter(isNonNulled)
    ) as Observable<CommentConnection>

    this.row$ = this.connection$.pipe(
      pluck('edges'),
      filter(isNonNulled),
      map((edges) =>
        edges.map((e) => e.node as Maybe<CommentBrowseFieldsFragment>)
      )
    )

    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) })
      })

    this.filterChange$
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe(() => {
        this.refresh()
      })

    this.scrollEvent$
      .pipe(
        map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this)
      )
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    this.scrollEvent$
      .pipe(
        filter((e) => e === 'bottom'),
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [ScrollEvent, PageInfo]) => pageInfo),
        untilDestroyed(this)
      )
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
          this.noMoreRows$.next(true)
          this.cdr.detectChanges()
          setInterval(() => this.noMoreRows$.next(false))
        }
      })
  }

  refresh() {
    if (!this.queryRef) return
    this.queryRef
      .refetch({
        ids: this.ids,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('ids' in changes) {
      this.refresh()
    }
  }

  trackByIndex(
    _: number,
    data: Maybe<CommentBrowseFieldsFragment>
  ): Maybe<number> {
    return data?.id
  }

}
