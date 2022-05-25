import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  AmpLevel,
  AssertionBrowseTableRowFieldsFragment,
  AssertionsBrowseGQL,
  AssertionsBrowseQuery,
  AssertionsBrowseQueryVariables,
  AssertionSortColumns,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceStatusFilter,
  EvidenceType,
  Maybe,
  PageInfo
} from '@app/generated/civic.apollo';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { startWith, pluck, tap, map, debounceTime, take, takeUntil, withLatestFrom, pairwise, filter, throttleTime, first } from 'rxjs/operators';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
  selector: 'cvc-assertions-table',
  templateUrl: './assertions-table.component.html',
  styleUrls: ['./assertions-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAssertionsTableComponent implements OnInit, AfterViewInit {
  @Input() cvcHeight: Maybe<string>
  @Input() evidenceId: Maybe<number>
  @Input() variantId: Maybe<number>
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() diseaseId: Maybe<number>
  @Input() drugId: Maybe<number>
  @Input() status: Maybe<EvidenceStatusFilter>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  @ViewChild('virtualTable', { static: false })
  nzTableComponent?: NzTableComponent<AssertionBrowseTableRowFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  private queryRef!: QueryRef<AssertionsBrowseQuery, AssertionsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  assertions$?: Observable<Maybe<AssertionBrowseTableRowFieldsFragment>[]>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  isLoading = false;

  initialPageSize = 25
  totalCount?: number
  fetchMorePageSize = 25;
  isLoadingDelay = 300;
  visibleCount: number = this.initialPageSize
  noMoreRows$: BehaviorSubject<boolean>;

  loadedPages: number = 1

  tableView: boolean = true

  textInputCallback?: () => void

  showTooltips = true;

  //filters
  aidInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  drugNameInput: Maybe<string>
  summaryInput: Maybe<string>
  assertionTypeInput: Maybe<EvidenceType>
  assertionDirectionInput: Maybe<EvidenceDirection>
  clinicalSignificanceInput: Maybe<EvidenceClinicalSignificance>
  variantNameInput: Maybe<string>
  geneNameInput: Maybe<string>
  ampLevelInput: Maybe<AmpLevel>

  sortColumns: typeof AssertionSortColumns = AssertionSortColumns

  private destroy$ = new Subject();

  constructor(private gql: AssertionsBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    this.queryRef = this.gql
      .watch(
        {
          first: this.initialPageSize,
          variantId: this.variantId,
          evidenceId: this.evidenceId,
          organizationId: this.organizationId,
          userId: this.userId,
          phenotypeId: this.phenotypeId,
          diseaseId: this.diseaseId,
          drugId: this.drugId,
          status: this.status,
          cardView: !this.tableView
        },
        { fetchPolicy: 'network-only' });

    let observable = this.queryRef.valueChanges;

    // handle loading state
    observable
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'),
        startWith(true))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.assertions$ = observable.pipe(
      pluck('data', 'assertions', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      }));

    this.filteredCount$ = observable.pipe(
      pluck('data', 'assertions', 'totalCount'));

    this.filteredCount$
      .pipe(take(1))
      .subscribe(value => this.totalCount = value);

    this.filteredCount$
      .subscribe(value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        } else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      });

    this.pageInfo$ = observable.pipe(
      pluck('data', 'assertions', 'pageInfo'));

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
                  this.cdr.detectChanges(); // TODO: figure out why this is required
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
  // filtering, sorting callbacks
  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  // refetch results, replacing current rows
  refresh() {
    this.isLoading = true;
    this.loadedPages = 1
    var aid: Maybe<number>
    if (this.aidInput)
      if (this.aidInput.toUpperCase().startsWith('AID')) {
        aid = +(this.aidInput.toUpperCase().replace('AID', ''))
      }
      else {
        aid = +this.aidInput
      }
    else {
      aid = undefined
    }
    this.queryRef.refetch({
      id: aid,
      diseaseName: this.diseaseNameInput,
      geneName: this.geneNameInput,
      variantName: this.variantNameInput,
      drugName: this.drugNameInput,
      summary: this.summaryInput,
      assertionType: this.assertionTypeInput ? this.assertionTypeInput : undefined,
      assertionDirection: this.assertionDirectionInput ? this.assertionDirectionInput : undefined,
      clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
      ampLevel: this.ampLevelInput ? this.ampLevelInput : undefined,
      cardView: !this.tableView
    })
  }

  // fetch more results, append to current rows
  loadMore(cursor: Maybe<string>) {
    this.isLoading = true;
    this.queryRef.fetchMore({
      variables: { after: cursor }
    });

    this.loadedPages += 1;
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: AssertionBrowseTableRowFieldsFragment): number {
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
