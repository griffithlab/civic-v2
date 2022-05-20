import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive';
import { AmpLevel, AssertionBrowseFieldsFragment, AssertionConnection, AssertionsBrowseGQL, AssertionsBrowseQuery, AssertionsBrowseQueryVariables, AssertionSortColumns, EvidenceClinicalSignificance, EvidenceDirection, EvidenceStatusFilter, EvidenceType, Maybe, PageInfo } from '@app/generated/civic.apollo';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { isNonNulled } from 'rxjs-etc';
import { debounceTime, distinctUntilChanged, filter, map, pluck, skip, take, takeUntil, withLatestFrom } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'cvc-assertions-table',
  templateUrl: './assertions-table.component.html',
  styleUrls: ['./assertions-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcAssertionsTableComponent implements OnInit {
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

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  sortChange$: Subject<SortDirectionEvent>

  // INTERMEDIATE STREAMS
  result$!: Observable<ApolloQueryResult<AssertionsBrowseQuery>>
  connection$!: Observable<AssertionConnection>
  pageInfo$!: Observable<PageInfo>

  // PRESENTATION STREAMS
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<AssertionBrowseFieldsFragment>[]>
  scrollIndex$: Subject<number>
  noMoreRows$: BehaviorSubject<boolean>
  queryRef!: QueryRef<AssertionsBrowseQuery, AssertionsBrowseQueryVariables>

  // need a static var for scrolling state b/c sub/unsub in
  // virtual scroll rows degrades performance
  isScrolling: boolean = false


  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  assertions$?: Observable<Maybe<AssertionBrowseFieldsFragment>[]>
  filteredCount$?: Observable<number>

  isLoading = false;

  initialPageSize = 25
  totalCount?: number
  fetchMorePageSize = 25;
  isLoadingDelay = 300;
  visibleCount: number = this.initialPageSize

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
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.sortChange$ = new Subject<SortDirectionEvent>()
    this.scrollIndex$ = new Subject<number>()
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
        });

    this.result$ = this.queryRef.valueChanges

    // for controlling nzTable's loading overlay, which covers the whole table -
    // good for the initial load as it's hard to miss
    this.initialLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        take(2));

    // controls the smaller [Loading...] indicator, better for not distracting
    // users by overlaying the row data they're focusing on
    this.moreLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        skip(2));

    this.connection$ = this.result$
      .pipe(pluck('data', 'assertions'),
        filter(isNonNulled)) as Observable<AssertionConnection>;

    this.row$ = this.connection$
      .pipe(pluck('edges'),
        filter(isNonNulled),
        map((edges) => edges.map((e) => e.node)))

    this.pageInfo$ = this.connection$
      .pipe(pluck('pageInfo'),
        filter(isNonNulled));

    // refetch when column sort changes
    this.sortChange$
      .pipe(untilDestroyed(this))
      .subscribe((e: SortDirectionEvent) => {
        this.queryRef.refetch({ sortBy: buildSortParams(e) });
      });

    this.debouncedQuery
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => this.refresh());

    this.textInputCallback = () => { this.debouncedQuery.next(); }

    // for every onScrolled event, convert to bool, share multicast
    // false on 'scroll', true on 'stop'
    this.scrollEvent$
      .pipe(map((e: ScrollEvent) => (e === 'stop' ? false : true)),
        distinctUntilChanged(),
        untilDestroyed(this))
      .subscribe((e) => {
        this.isScrolling = e
        this.cdr.detectChanges()
      })

    // emit event from noMoreRow$ when scroll viewport hits bottom
    // and no next page exists
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

  } // ngOnInit()

  // filtering, sorting callbacks
  onModelChanged() { this.debouncedQuery.next(); }

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
  trackByIndex(_: number, data: AssertionBrowseFieldsFragment): number {
    return data.id;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
