import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  buildSortParams,
  SortDirectionEvent,
} from '@app/core/utilities/datatable-helpers'
import {
  BrowseVariantGroupConnection,
  BrowseVariantGroupRowFieldsFragment,
  BrowseVariantGroupsGQL,
  BrowseVariantGroupsQuery,
  Maybe,
  PageInfo,
  QueryBrowseVariantGroupsArgs,
  SortDirection,
  VariantGroupsSortColumns,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
  take,
  takeWhile,
  withLatestFrom,
} from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

export interface VariantGroupTableUserFilters {
  nameInput?: Maybe<string>
  featureNameInput?: Maybe<string>
  variantNameInput?: Maybe<string>
}

@UntilDestroy()
@Component({
  selector: 'cvc-variant-groups-table',
  templateUrl: './variant-groups-table.component.html',
  styleUrls: ['./variant-groups-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcVariantGroupsTableComponent implements OnInit {
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize = 30
  @Input()
  set initialUserFilters(f: Maybe<VariantGroupTableUserFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<BrowseVariantGroupsQuery, QueryBrowseVariantGroupsArgs>
  result$!: Observable<ApolloQueryResult<BrowseVariantGroupsQuery>>
  connection$!: Observable<BrowseVariantGroupConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<BrowseVariantGroupRowFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false

  //filters
  nameInput: Maybe<string>
  featureNameInput: Maybe<string>
  variantNameInput: Maybe<string>

  sortColumns = VariantGroupsSortColumns

  constructor(
    private gql: BrowseVariantGroupsGQL,
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
      first: this.initialPageSize,
      sortBy: {
        column: this.sortColumns.VariantCount,
        direction: SortDirection.Desc,
      },
    })

    this.result$ = this.queryRef.valueChanges

    // toggles table overlay 'Loading...' spinner
    this.initialLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      takeWhile((l) => l !== false, true)
    ) // only activate on 1st true/false sequence

    // toggles table header 'Loading...' tag
    this.moreLoading$ = this.result$.pipe(
      pluck('loading'),
      distinctUntilChanged(),
      skip(2)
    ) // skip 1st true/false sequence

    this.connection$ = this.result$.pipe(
      pluck('data', 'browseVariantGroups'),
      filter(isNonNulled)
    ) as Observable<BrowseVariantGroupConnection>

    // entity row nodes
    this.row$ = this.connection$.pipe(
      pluck('edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
    )

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$.pipe(
      pluck('pageInfo'),
      filter(isNonNulled)
    )

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) })
      })

    // refresh when filters change
    this.filterChange$
      .pipe(debounceTime(500), untilDestroyed(this))
      .subscribe(() => {
        this.refresh()
      })

    // for every onScrolled event, convert to bool & set isScrolling
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

    // emit event from noMoreRow$ if hasNextPage false
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

          // need to send a followup 'false' here or else
          // ng won't interpret subsequent 'true' events as changes
          setInterval(() => this.noMoreRows$.next(false))
        }
      })
  } // ngOnInit

  refresh() {
    this.queryRef
      .refetch({
        name: this.nameInput,
        featureNames: this.featureNameInput,
        variantNames: this.variantNameInput,
      })
      .then(() => this.scrollIndex$.next(0))

    this.cdr.detectChanges()
  }

  // virtual scroll helpers
  trackByIndex(
    _: number,
    data: Maybe<BrowseVariantGroupRowFieldsFragment>
  ): Maybe<number> {
    return data?.id
  }
}
