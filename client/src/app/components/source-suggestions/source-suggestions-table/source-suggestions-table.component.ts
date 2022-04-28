import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BrowseSourceSuggestionRowFieldsFragment, BrowseSourceSuggestionsGQL, BrowseSourceSuggestionsQuery, Maybe, PageInfo, QuerySourceSuggestionsArgs, SourceSource, SourceSuggestionsSortColumns, SourceSuggestionStatus } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable, BehaviorSubject, interval } from "rxjs";
import { map, pluck, startWith, debounceTime, take, takeUntil, withLatestFrom, pairwise, filter, throttleTime, first, tap } from 'rxjs/operators';
import { Viewer, ViewerService } from "@app/core/services/viewer/viewer.service";
import { NzTableComponent } from "ng-zorro-antd/table";

@Component({
  selector: 'cvc-source-suggestions-table',
  templateUrl: './source-suggestions-table.component.html',
  styleUrls: ['./source-suggestions-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcSourceSuggestionsTableComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() sourceId: Maybe<number>
  @Input() submitterId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<BrowseSourceSuggestionRowFieldsFragment>
  viewport?: CdkVirtualScrollViewport

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseSourceSuggestionsQuery, QuerySourceSuggestionsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseSourceSuggestionsQuery>>;
  isLoading$?: Observable<boolean>;
  isLoading = false
  sourceSuggestions$?: Observable<Maybe<BrowseSourceSuggestionRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>
  viewer$?: Observable<Viewer>
  filteredCount$?: Observable<number>

  textInputCallback?: () => void

  //filters
  citationIdInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>
  sourceIdInput: Maybe<number>
  geneNameInput: Maybe<string>
  variantNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  commentInput: Maybe<string>
  submitterInput: Maybe<string>
  citationInput: Maybe<string>
  statusInput = SourceSuggestionStatus.New

  sortColumns: typeof SourceSuggestionsSortColumns = SourceSuggestionsSortColumns
  status: typeof SourceSuggestionStatus = SourceSuggestionStatus


  selectedSourceId?: number
  selectedStatus?: SourceSuggestionStatus
  showManageForm = false

  totalCount?: number
  initialPageSize = 35
  visibleCount = this.initialPageSize
  loadedPages = 1
  fetchMorePageSize = 25
  isLoadingDelay = 100

  isSignedIn = false
  showTooltips = true
  noMoreRows$: BehaviorSubject<boolean>;
  private destroy$ = new Subject()

  constructor(private gql: BrowseSourceSuggestionsGQL,
    private viewerService: ViewerService,
    private cdr: ChangeDetectorRef) {

    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {

    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      sourceId: this.sourceId,
      submitterId: this.submitterId,
      status: this.status.New
    })

    // provide viewer signed in
    this.viewerService.viewer$
      .pipe(takeUntil(this.destroy$),
        pluck('signedIn'))
      .subscribe((si) => { this.isSignedIn = si as boolean });

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        }
      })
    );

    this.isLoading$ = this.data$.pipe(pluck('loading'), startWith(true));

    // handle loading state
    this.data$
      .pipe(takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.sourceSuggestions$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$
      .pipe(takeUntil(this.destroy$),
        pluck('data', 'sourceSuggestions', 'pageInfo'));

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'filteredCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

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

    this.debouncedQuery
      .pipe(takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => this.refresh());

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  } // ngOnInit

  ngAfterViewInit(): void {
    if (this.nzTableComponent && this.nzTableComponent.cdkVirtualScrollViewport &&
      this.pageInfo$) {
      this.viewport = this.nzTableComponent.cdkVirtualScrollViewport;

      const scrolled$ = this.viewport
        .elementScrolled();

      scrolled$
        .pipe(takeUntil(this.destroy$),
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
            // console.log(`source-suggestions-table scroller$ - e1.offset: ${e1.offset}; e1.offset: ${e2.offset}; scroll target: ${(e2.offset < e1.offset && e2.offset < 140)}`);

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
        });

      // force viewport check after initial render
      this.viewport.renderedRangeStream
        .pipe(first())
        .subscribe((_) => { this.viewport!.checkViewportSize(); });

    } else {
      console.error('source-suggestions-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit


  refresh() {
    this.isLoading = true
    this.loadedPages = 1
    this.queryRef?.refetch({
      citationId: this.citationIdInput ? +this.citationIdInput : undefined,
      sourceType: this.sourceTypeInput ? this.sourceTypeInput : undefined,
      sourceId: this.sourceIdInput ? +this.sourceIdInput : undefined,
      geneName: this.geneNameInput,
      variantName: this.variantNameInput,
      diseaseName: this.diseaseNameInput,
      comment: this.commentInput,
      submitter: this.submitterInput,
      citation: this.citationInput,
      status: this.statusInput ? this.statusInput : undefined
    })
  }

  onSortChanged(e: SortDirectionEvent) {
    this.isLoading = true
    this.loadedPages = 1
    this.queryRef?.refetch({ sortBy: buildSortParams(e) })
  }

  onModelChanged() {
    this.debouncedQuery.next()
  }

  setFormInputs(selectedId: number, selectedStatus: SourceSuggestionStatus): void {
    this.selectedSourceId = selectedId
    this.selectedStatus = selectedStatus
    this.showManageForm = true
  }

  closePopover() {
    this.showManageForm = false
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: BrowseSourceSuggestionRowFieldsFragment): number {
    return data.id
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  loadMore(cursor: Maybe<string>) {
    console.log(`endCursor: ${cursor}`);
    this.isLoading = true;
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: cursor
      }
    });

    this.loadedPages += 1
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }


}
