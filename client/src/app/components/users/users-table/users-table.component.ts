import { ChangeDetectorRef, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Maybe, PageInfo, UsersSortColumns, OrganizationFilter, UserRole, UsersBrowseQuery, UsersBrowseQueryVariables, UsersBrowseGQL, UserBrowseTableRowFieldsFragment, SortDirection } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from "apollo-angular";
import { Subject, Observable, BehaviorSubject, interval } from 'rxjs';
import { map, pluck, startWith, debounceTime, take, withLatestFrom, pairwise, filter, throttleTime, first, takeUntil, tap } from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'cvc-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.less']
})
export class CvcUsersTableComponent implements OnInit {
  @Input() cvcHeight?: number
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<UserBrowseTableRowFieldsFragment>
  viewport?: CdkVirtualScrollViewport

  private debouncedQuery = new Subject<void>();
  initialPageSize = 35;
  fetchMorePageSize = 25;

  private queryRef!: QueryRef<UsersBrowseQuery, UsersBrowseQueryVariables>;

  isLoading = false;
  users$?: Observable<Maybe<UserBrowseTableRowFieldsFragment>[]>;
  filteredCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  totalCount?: number
  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

  textInputCallback?: () => void;

  noMoreRows$: BehaviorSubject<boolean>;
  private destroy$ = new Subject()

  showTooltips = true

  // filters
  sortColumns: typeof UsersSortColumns = UsersSortColumns
  nameInput: Maybe<string>
  orgNameInput: Maybe<string>
  roleInput: Maybe<UserRole>

  orgName: Maybe<OrganizationFilter>

  constructor(private gql: UsersBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit(): void {

    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      sortBy: {
        column: UsersSortColumns.LastAction,
        direction: SortDirection.Desc
      }
    });

    let observable = this.queryRef.valueChanges;

    observable
      .pipe(takeUntil(this.destroy$),
        pluck('loading'), startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l });

    this.users$ = observable.pipe(
      pluck('data', 'users', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.filteredCount$ = observable.pipe(
      pluck('data', 'users', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize + (this.loadedPages - 1) * this.fetchMorePageSize
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'users', 'pageInfo'));

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

  refresh() {
    this.isLoading = true
    this.loadedPages = 1
    this.queryRef.refetch({
      userName: this.nameInput ? this.nameInput : undefined,
      orgName: this.orgNameInput ? { "name": this.orgNameInput } : undefined,
      userRole: this.roleInput ? this.roleInput : undefined
    })
  }

  onModelChanged() {
    this.debouncedQuery.next();
  }

  onSortChanged(e: SortDirectionEvent) {
    this.isLoading = true
    this.loadedPages = 1
    this.queryRef.refetch({ sortBy: buildSortParams(e) })
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: UserBrowseTableRowFieldsFragment): number {
    return data.id;
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.isLoading = true
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      }
    })

    this.loadedPages += 1
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
