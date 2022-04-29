import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Maybe, PageInfo, DrugBrowseTableRowFieldsFragment, DrugsBrowseGQL, DrugsBrowseQuery, DrugsBrowseQueryVariables, DrugSortColumns } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { startWith, tap, pluck, map, debounceTime, take, takeUntil, withLatestFrom, pairwise, filter, throttleTime, first } from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'cvc-drugs-table',
  templateUrl: './drugs-table.component.html',
  styleUrls: ['./drugs-table.component.less']
})
export class CvcDrugsTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() cvcHeight: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() truncateLongName: Maybe<boolean> = false

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<DrugBrowseTableRowFieldsFragment>
  viewport?: CdkVirtualScrollViewport

  private queryRef?: QueryRef<DrugsBrowseQuery, DrugsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>()

  isLoading = false
  isLoadingDelay = 300;
  initialPageSize = 50
  fetchMorePagSize = 25

  totalCount?: number;
  visibleCount: number = this.initialPageSize
  loadedPages: number = 1

  data$?: Observable<ApolloQueryResult<DrugsBrowseQuery>>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  drugs$?: Observable<Maybe<DrugBrowseTableRowFieldsFragment>[]>

  // filters
  ncitIdFilter: Maybe<string>
  nameFilter: Maybe<string>
  sortColumns: typeof DrugSortColumns = DrugSortColumns

  showTooltips = true;
  noMoreRows$: BehaviorSubject<boolean>;
  textInputCallback?: () => void

  private destroy$ = new Subject()

  constructor(private gql: DrugsBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    }, { fetchPolicy: 'network-only' });

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus,
        };
      }));

    this.drugs$ = this.data$
      .pipe(
        pluck('data', 'drugs', 'edges'),
        map((edges) => {
          return edges.map((e) => e.node)
        }));

    // handle loading state
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'drugs', 'filteredCount'));

    this.filteredCount$
      .pipe(take(1))
      .subscribe(value => this.totalCount = value);

    this.filteredCount$
      .subscribe(value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      });

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'drugs', 'pageInfo'));

    this.debouncedQuery
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => this.refresh());

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  } // ngOnInit

  ngAfterViewInit(): void {
    if (this.nzTableComponent && this.nzTableComponent.cdkVirtualScrollViewport &&
      this.pageInfo$) {
      this.viewport = this.nzTableComponent.cdkVirtualScrollViewport;
      const scrolled$ = this.viewport.elementScrolled().pipe(takeUntil(this.destroy$));

      scrolled$
        .pipe(
          // for each elementScrolled event, get latest pageInfo,
          // and return page cursor and scroll offest
          withLatestFrom(this.pageInfo$),
          map(([_, pageInfo]: [Event, PageInfo]) => {
            return {
              pageInfo: pageInfo,
              offset: this.viewport!.measureScrollOffset('bottom')
            }
          }),
          // pair with previous event/cursor
          pairwise(),
          // reject events that occur outside scroll target
          filter(([e1, e2]) => {
            return (e2.offset < e1.offset && e2.offset < 140)
          }),
          // throttle events to prevent spamming loadMore() requests
          throttleTime(500))
        .subscribe(([_, e2]) => {
          if (e2.pageInfo.hasNextPage) {
            this.loadMore(e2.pageInfo.endCursor);
          } else {
            // show 'end of results' msg, hide after an interval
            if (this.noMoreRows$.getValue() === false) {
              this.noMoreRows$.next(true);
              interval(3000)
                .pipe(first())
                .subscribe((_) => {
                  this.noMoreRows$.next(false);
                  this.cdr.detectChanges();
                });
            }
          }
        });

      // TODO: update tag popovers to work similarly to how base tags now work. Popovers inherit Tooltip base class, so should hopefully also hide themselves automatically if nzTitle is set to an empty string

      // toggle tooltips off when scrolling
      scrolled$
        .pipe(
          takeUntil(this.destroy$),
          tap((_) => { this.showTooltips = false; }), // on scroll event toggle tooltips off
          debounceTime(500) // wait 500ms, then execute subsribed function
        ).subscribe((_) => {
          this.showTooltips = true; // toggle tooltips on
          this.cdr.detectChanges(); // force refresh
        })

      // force viewport check after initial render
      this.viewport.renderedRangeStream
        .pipe(first())
        .subscribe((_) => { this.viewport!.checkViewportSize(); });

    } else {
      console.error('variants-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit

  onModelChanged() { this.debouncedQuery.next() }

  onSortChanged(e: SortDirectionEvent) {
    this.isLoading = true;
    this.loadedPages = 1
    this.queryRef?.refetch({
      sortBy: buildSortParams(e)
    })
  }

  refresh() {
    this.isLoading = true;
    this.loadedPages = 1
    this.queryRef?.refetch({
      name: this.nameFilter,
      ncitId: this.ncitIdFilter
    })
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: DrugBrowseTableRowFieldsFragment): number {
    return data.id;
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  loadMore(cursor: Maybe<string>) {
    this.isLoading = true;
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePagSize,
        after: cursor
      }
    })
    this.loadedPages += 1
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
