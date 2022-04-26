import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseSourceRowFieldsFragment, BrowseSourcesGQL, BrowseSourcesQuery, Maybe, PageInfo, QueryBrowseSourcesArgs, SourceSource, SourcesSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable, BehaviorSubject, interval } from "rxjs";
import { map, pluck, startWith, debounceTime, take, takeUntil, withLatestFrom, pairwise, filter, throttleTime, first, tap } from 'rxjs/operators';
import { NzTableComponent } from "ng-zorro-antd/table";

@Component({
  selector: 'cvc-sources-table',
  templateUrl: './sources-table.component.html',
  styleUrls: ['./sources-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcSourcesTableComponent implements OnInit, AfterViewInit {
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<BrowseSourceRowFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseSourcesQuery, QueryBrowseSourcesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseSourcesQuery>>;
  isLoading = false;
  sources$?: Observable<Maybe<BrowseSourceRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  filteredCount$?: Observable<number>

  totalCount?: number
  initialPageSize = 25
  visibleCount: number = this.initialPageSize
  loadedPages: number = 1
  fetchMorePageSize = 25;
  isLoadingDelay = 100;

  noMoreRows$: BehaviorSubject<boolean>;

  // filters
  citationIdInput: Maybe<string>
  authorInput: Maybe<string>
  yearInput: Maybe<string>
  journalInput: Maybe<string>
  nameInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>

  showTooltips = true;

  textInputCallback?: () => void
  sortColumns: typeof SourcesSortColumns = SourcesSortColumns


  private destroy$ = new Subject();

  constructor(private gql: BrowseSourcesGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      clinicalTrialId: this.clinicalTrialId
    })

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        }
      })
    );

    // handle loading state
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.sources$ = this.data$.pipe(
      pluck('data', 'browseSources', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseSources', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseSources', 'filteredCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
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
      }
    )

    this.debouncedQuery
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => this.refresh());

    this.textInputCallback = () => { this.debouncedQuery.next(); }

  } // ngOnInit()

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
          throttleTime(this.isLoadingDelay))
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
      console.error('sources-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit
  // TODO: looks like these onSort and onModel changed functions can be removed
  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({ sortBy: buildSortParams(e) })
  }

  onModelChanged() {
    this.debouncedQuery.next()
  }

  refresh() {
    this.isLoading = true;
    this.loadedPages = 1
    this.queryRef?.refetch({
      citationId: this.citationIdInput ? +this.citationIdInput : undefined,
      author: this.authorInput,
      year: this.yearInput ? +this.yearInput : undefined,
      journal: this.journalInput,
      name: this.nameInput,
      sourceType: this.sourceTypeInput
    })
  }

  loadMore(cursor: Maybe<string>) {
    this.isLoading = true;
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: cursor
      }
    });

    this.loadedPages += 1
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: BrowseSourceRowFieldsFragment): number {
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
