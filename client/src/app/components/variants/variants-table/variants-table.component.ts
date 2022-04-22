import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  BrowseVariantsGQL,
  BrowseVariantsQuery,
  Maybe,
  PageInfo,
  QueryBrowseVariantsArgs,
  VariantGridFieldsFragment,
  VariantsSortColumns,
} from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import {
  tap,
  map,
  pluck,
  startWith,
  debounceTime,
  take,
  takeUntil,
  withLatestFrom,
  pairwise,
  filter,
  throttleTime,
  first
} from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';

export interface VariantTableUserFilters {
  variantNameInput: Maybe<string>;
  geneSymbolInput: Maybe<string>;
  diseaseNameInput: Maybe<string>;
  drugNameInput: Maybe<string>;
  variantAliasInput: Maybe<string>;
}

@Component({
  selector: 'cvc-variants-table',
  templateUrl: './variants-table.component.html',
  styleUrls: ['./variants-table.component.less'],
})
export class CvcVariantsTableComponent implements OnDestroy, OnInit, AfterViewInit {
  @Input() variantTypeId: Maybe<number>
  @Input() variantGroupId: Maybe<number>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<VariantGridFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  private initialQueryArgs?: QueryBrowseVariantsArgs;
  private debouncedQuery = new Subject<void>();

  queryRef!: QueryRef<BrowseVariantsQuery, QueryBrowseVariantsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseVariantsQuery>>;
  isLoading = false;

  variants$?: Observable<Maybe<VariantGridFieldsFragment>[]>;
  filteredCount$?: Observable<number>;
  pageCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  totalCount?: number
  initialPageSize = 50;
  visibleCount: number = this.initialPageSize;
  loadedPages: number = 1
  fetchMorePageSize = 25;
  isLoadingDelay = 100;

  noMoreRows$: BehaviorSubject<boolean>;
  //
  // filters
  variantNameInput: Maybe<string>;
  geneSymbolInput: Maybe<string>;
  diseaseNameInput: Maybe<string>;
  drugNameInput: Maybe<string>;
  variantAliasInput: Maybe<string>;

  textInputCallback?: () => void

  showTooltips = true;

  sortColumns: typeof VariantsSortColumns = VariantsSortColumns;

  private destroy$ = new Subject();

  constructor(private query: BrowseVariantsGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {
    this.initialQueryArgs = {
      first: this.initialPageSize,
      variantTypeId: this.variantTypeId,
      variantGroupId: this.variantGroupId
    };

    this.queryRef = this.query.watch(this.initialQueryArgs, { fetchPolicy: 'network-only' });

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus,
        };
      })
    );

    // handle loading state
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.variants$ = this.data$
      .pipe(
        pluck('data', 'browseVariants', 'edges'),
        map((edges) => { return edges.map((e) => e.node); }));

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'filteredCount')
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

    this.pageCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageCount'),
      startWith(0)
    );

    this.debouncedQuery
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500)
      )
      .subscribe((_) => {
        this.refresh();
      });

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
      console.error('evidence-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({
      ...this.initialQueryArgs,
      sortBy: buildSortParams(e),
    });
  }

  onModelUpdated(_: Maybe<string>) {
    this.debouncedQuery.next();
  }

  // fetch a new set of records
  refresh() {
    this.isLoading = true;
    this.loadedPages = 1
    this.queryRef.refetch({
      diseaseName: this.diseaseNameInput,
      drugName: this.drugNameInput,
      variantName: this.variantNameInput ? this.variantNameInput : undefined,
      variantAlias: this.variantAliasInput ? this.variantAliasInput : undefined,
      entrezSymbol: this.geneSymbolInput,
    })
  }

  loadMore(cursor: Maybe<string>) {
    this.isLoading = true;
    this.queryRef?.fetchMore({
      variables: {
        after: cursor
      }
    })

    this.loadedPages += 1
  }

  // vir tual scroll helpers
  trackByIndex(_: number, data: VariantGridFieldsFragment): number {
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
