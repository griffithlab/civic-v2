import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild, } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import {debounceTime, filter, first, tap, map, pairwise, pluck, startWith, take, takeUntil, throttleTime, withLatestFrom,} from 'rxjs/operators';
import { QueryRef } from 'apollo-angular';

import {BrowseGenesGQL, GeneBrowseTableRowFieldsFragment, QueryBrowseGenesArgs, PageInfo, Maybe, BrowseGenesQuery, GenesSortColumns,} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/core/utilities/datatable-helpers';
import { NzTableComponent } from 'ng-zorro-antd/table';

export interface GeneTableRow {
  id: number
  entrezId: number
  name: string
  aliases?: Maybe<WithName[]>
  diseases?: Maybe<WithName[]>
  drugs?: Maybe<WithName[]>
  variantCount: number
  evidenceItemCount: number
  assertionCount: number
}

@Component({
  selector: 'cvc-genes-table',
  templateUrl: './genes-table.component.html',
  styleUrls: ['./genes-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcGenesTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<GeneBrowseTableRowFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  private initialQueryArgs?: QueryBrowseGenesArgs
  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseGenesQuery, QueryBrowseGenesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseGenesQuery>>;
  genes$?: Observable<Maybe<GeneTableRow>[]>;
  filteredCount$?: Observable<number>
  pageCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  isLoading$?: Observable<boolean>;
  isLoading = false;

  textInputCallback?: () => void

  showTooltips = true;

  // filters
  diseaseInput: Maybe<string>
  drugInput: Maybe<string>
  nameInput: Maybe<string>
  aliasInput: Maybe<string>

  sortColumns: typeof GenesSortColumns = GenesSortColumns

  totalCount?: number
  initialPageSize = 25;
  visibleCount: number = this.initialPageSize
  fetchMorePageSize = 25;
  isLoadingDelay = 100;

  noMoreRows$: BehaviorSubject<boolean>;

  loadedPages: number = 1

  private destroy$ = new Subject();

  constructor(private query: BrowseGenesGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    this.initialQueryArgs = {
      first: this.initialPageSize
    }

    this.queryRef = this.query.watch(this.initialQueryArgs, { fetchPolicy: 'network-only' });

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));

    // handle loading state
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.genes$ = this.data$
      .pipe(
        pluck('data', 'browseGenes', 'edges'),
        map((edges) => {
          return edges.map((e) => { return e.node; })
        }));

    this.pageInfo$ = this.data$
      .pipe(pluck('data', 'browseGenes', 'pageInfo'));

    this.filteredCount$ = this.data$
      .pipe(pluck('data', 'browseGenes', 'filteredCount'));

    this.data$
      .pipe(
        takeUntil(this.destroy$),
        pluck('data', 'browseGenes', 'totalCount'),
        take(1))
      .subscribe(value => this.totalCount = value);

    this.filteredCount$
      .subscribe(value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize + this.fetchMorePageSize * (this.loadedPages - 1)
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      });

    this.pageCount$ = this.data$
      .pipe(
        pluck('data', 'browseGenes', 'pageCount'),
        startWith(0));

    this.debouncedQuery
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => {
        this.isLoading = true;
        this.loadedPages = 1;
        this.queryRef?.refetch({
          entrezSymbol: this.nameInput,
          geneAlias: this.aliasInput,
          diseaseName: this.diseaseInput,
          drugName: this.drugInput,
        });
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  } // ngOnInit()

  ngAfterViewInit(): void {
    if (this.nzTableComponent
      && this.nzTableComponent.cdkVirtualScrollViewport
      && this.pageInfo$) {

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


  loadMore(afterCursor: Maybe<string>): void {
    this.isLoading = true;
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });

    this.loadedPages += 1
  }

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

  // virtual scroll helpers
  trackByIndex(_: number, data: GeneBrowseTableRowFieldsFragment): number {
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
