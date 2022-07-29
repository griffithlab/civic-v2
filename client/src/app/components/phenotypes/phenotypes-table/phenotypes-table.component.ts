import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { BrowsePhenotypeConnection, Maybe, PageInfo, PhenotypeBrowseTableRowFieldsFragment, PhenotypesBrowseGQL, PhenotypesBrowseQuery, PhenotypesBrowseQueryVariables, PhenotypeSortColumns } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { debounceTime, distinctUntilChanged, filter, map, pluck, skip, take, takeWhile, withLatestFrom } from 'rxjs/operators';

export interface PhenotypesTableUserFilters {
  hpoIdFilter?: Maybe<string>
  hpoNameFilter?: Maybe<string>
}

@UntilDestroy()
@Component({
  selector: 'cvc-phenotypes-table',
  templateUrl: './phenotypes-table.component.html',
  styleUrls: ['./phenotypes-table.component.less']
})
export class CvcPhenotypesTableComponent implements OnInit {
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize = 35
  @Input()
  set initialUserFilters(f: Maybe<PhenotypesTableUserFilters>) {
    // assign any attributes in filters object to this class
    if (f) Object.assign(this, f)
  }

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>
  filterChange$: Subject<void>

  // INTERMEDIATE STREAMS
  queryRef!: QueryRef<PhenotypesBrowseQuery, PhenotypesBrowseQueryVariables>
  result$!: Observable<ApolloQueryResult<PhenotypesBrowseQuery>>
  connection$!: Observable<BrowsePhenotypeConnection>

  // PRESENTATION STREAMS
  pageInfo$!: Observable<PageInfo>
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<PhenotypeBrowseTableRowFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling = false

  // filters
  hpoIdFilter: Maybe<string>
  hpoNameFilter: Maybe<string>

  sortColumns = PhenotypeSortColumns

  constructor(private gql: PhenotypesBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.filterChange$ = new Subject<void>()
    this.scrollIndex$ = new Subject<number>()
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({ first: this.initialPageSize })

    this.result$ = this.queryRef.valueChanges

    // toggles table overlay 'Loading...' spinner
    this.initialLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        takeWhile(l => l !== false, true)); // only activate on 1st true/false sequence

    // toggles table header 'Loading...' tag
    this.moreLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        skip(2)); // skip 1st true/false sequence

    // entity relay connection
    this.connection$ = this.result$
      .pipe(pluck('data', 'phenotypes'),
        filter(isNonNulled)) as Observable<BrowsePhenotypeConnection>;

    // entity row nodes
    this.row$ = this.connection$
      .pipe(pluck('edges'),
        filter(isNonNulled),
        map((edges) => edges.map((e) => e.node)));

    // provided to table-scroll directive for fetchMore queries
    this.pageInfo$ = this.connection$
      .pipe(pluck('pageInfo'),
        filter(isNonNulled));

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) });
      });

    // refresh when filters change
    this.filterChange$
      .pipe(debounceTime(500),
        untilDestroyed(this))
      .subscribe(() => { this.refresh() })

    // for every onScrolled event, convert to bool & set isScrolling
    this.scrollEvent$
      .pipe(map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this))
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    // emit event from noMoreRow$ if hasNextPage false
    this.scrollEvent$
      .pipe(filter((e) => e === 'bottom'),
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [ScrollEvent, PageInfo]) => pageInfo),
        untilDestroyed(this))
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
          this.noMoreRows$.next(true);
          this.cdr.detectChanges()

          // need to send a followup 'false' here or else
          // ng won't interpret subsequent 'true' events as changes
          setInterval(() => this.noMoreRows$.next(false));
        }
      });

  } // ngOnInit


  refresh() {
    this.queryRef
      .refetch({
        name: this.hpoNameFilter,
        hpoId: this.hpoIdFilter
      })
      .then(() => this.scrollIndex$.next(0));

    this.cdr.detectChanges()
  }

  trackByIndex(_: number, data: PhenotypeBrowseTableRowFieldsFragment): number {
    return data.id;
  }

}
