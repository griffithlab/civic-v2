import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Maybe, PageInfo, ClinicalTrialsBrowseGQL, ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables, ClinicalTrialSortColumns, BrowseClinicalTrial, BrowseClinicalTrialsRowFieldsFragment } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take, takeUntil, withLatestFrom, pairwise, filter, throttleTime, first, tap } from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'cvc-clinical-trials-table',
  templateUrl: './clinical-trials-table.component.html',
  styleUrls: ['./clinical-trials-table.component.less']
})
export class CvcClinicalTrialsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<BrowseClinicalTrialsRowFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  private queryRef!: QueryRef<ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables>
  data$?: Observable<ApolloQueryResult<ClinicalTrialsBrowseQuery>>;
  private debouncedQuery = new Subject<void>();

  isLoading = false;
  isLoading$?: Observable<boolean>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  clinicalTrials$?: Observable<Maybe<BrowseClinicalTrial>[]>

  totalCount?: number
  initialPageSize = 35
  visibleCount: number = this.initialPageSize

  fetchMorePageSize = 25;
  isLoadingDelay = 300;

  nctIdFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  showTooltips = true;

  sortColumns: typeof ClinicalTrialSortColumns = ClinicalTrialSortColumns

  loadedPages: number = 1

  noMoreRows$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(private gql: ClinicalTrialsBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    }, { fetchPolicy: 'network-only' })

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus,
        };
      }));

    this.clinicalTrials$ = this.data$
      .pipe(
        pluck('data', 'clinicalTrials', 'edges'),
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
      pluck('data', 'clinicalTrials', 'filteredCount'));

    this.filteredCount$
      .pipe(
        takeUntil(this.destroy$),
        take(1))
      .subscribe(value => this.totalCount = value);

    this.filteredCount$
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        value => {
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
      pluck('data', 'clinicalTrials', 'pageInfo'));

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
                })
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
      console.error('evidence-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit

  onModelChanged() { this.debouncedQuery.next() }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef.refetch({
      sortBy: buildSortParams(e)
    })
  }

  refresh() {
    this.isLoading = true;
    this.loadedPages = 1
    this.queryRef.refetch({
      name: this.nameFilter,
      nctId: this.nctIdFilter
    })
  }

  loadMore(cursor: Maybe<string>) {
    this.isLoading = true;
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: cursor
      }
    })

    this.loadedPages += 1
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: BrowseClinicalTrialsRowFieldsFragment): number {
    return data.id;
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
