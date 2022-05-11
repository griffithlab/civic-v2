import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceItemConnection, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin, } from '@app/generated/civic.apollo'
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, interval, Observable, Subject, iif, of, defer, combineLatest } from 'rxjs'
import { pluck, map, debounceTime, take, takeUntil, withLatestFrom, first, distinctUntilChanged, share, startWith, mergeMap, count, filter, scan, switchMap, tap } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { FormEvidence } from '@app/forms/forms.interfaces'
import { $D } from 'rxjs-debug'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { ApolloQueryResult } from '@apollo/client/core'
import { TableCountsConnection } from '@app/components/shared/table-counts/table-counts.component'

// TODO: switch to using 'rows' instead of 'counts'

export interface EvidenceTableUserFilters {
  eidInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  drugNameInput: Maybe<string>
  descriptionInput: Maybe<string>
  evidenceLevelInput: Maybe<EvidenceLevel>
  evidenceTypeInput: Maybe<EvidenceType>
  evidenceDirectionInput: Maybe<EvidenceDirection>
  clinicalSignificanceInput: Maybe<EvidenceClinicalSignificance>
  variantOriginInput: Maybe<VariantOrigin>
  evidenceRatingInput: Maybe<number>
  variantNameInput: Maybe<string>
  geneSymbolInput: Maybe<string>
}

export interface CountInfo {
  initialTotalCount: Maybe<number>
  visibleCount: number
  totalCount: number
  filteredCount: number
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-table',
  templateUrl: './evidence-table.component.html',
  styleUrls: ['./evidence-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceTableComponent implements OnInit, OnDestroy {
  @Input() cvcHeight: Maybe<string>
  @Input() assertionId: Maybe<number>
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitle: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() diseaseId: Maybe<number>
  @Input() displayGeneAndVariant: boolean = true
  @Input() drugId: Maybe<number>
  @Input() initialPageSize: number = 30
  @Input() initialSelectedEids: FormEvidence[] = []
  @Input() mode: 'normal' | 'select' = 'normal'
  @Input() organizationId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() sourceId: Maybe<number>
  @Input() status: Maybe<EvidenceStatus>
  @Input() userId: Maybe<number>
  @Input() variantId: Maybe<number>

  _initialUserFilters: Maybe<EvidenceTableUserFilters>
  @Input()
  set initialUserFilters(f: Maybe<EvidenceTableUserFilters>) {
    if (f) { this._initialUserFilters = f; Object.assign(this, f) }
  }
  get initialUserFilters(): Maybe<EvidenceTableUserFilters> {
    return this._initialUserFilters
  }

  @Output() totalCountChanges = new EventEmitter<number>()
  _totalCount!: number;
  initialTotalCount!: number; // for calculating filtered counts
  set totalCount(tc: number) {
    this.totalCountChanges.next(tc)
    this._totalCount = tc
  }
  get totalCount(): number { return this._totalCount }

  @Output() selectedEids = new EventEmitter<FormEvidence[]>()

  // SOURCE STREAMS
  scrollEvent$: BehaviorSubject<ScrollEvent>
  scrolledToBottom$: Subject<Event>
  filterUpdate$: Subject<any>

  // INTERMEDIATE STREAMS
  result$!: Observable<ApolloQueryResult<EvidenceBrowseQuery>>
  connection$!: Observable<EvidenceItemConnection>
  pageInfo$!: Observable<PageInfo>
  // rowsInfo$!: Observable<RowsInfo>
  countInfo$!: Observable<CountInfo>
  pageLoaded$!: BehaviorSubject<number>
  pagesLoaded$!: Observable<number>

  // PRESENTATION STREAMS
  isLoading$!: Observable<boolean>
  row$!: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  isScrolling$!: Observable<boolean>

  tableConnection$!: Observable<TableCountsConnection>

  totalCount$!: Observable<number>
  initialTotalCount$!: Observable<number>
  visibleCount$!: Observable<number>
  filteredCount$!: Observable<Maybe<number>>

  selectedEvidenceIds = new Map<number, FormEvidence>();

  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>()

  // implementing isLoading as var so both watch() and fetchMore() can update loading state.
  // TODO: update to apollo-angular v3 - eliminates the need to manually manage loading state
  // isLoading = true;

  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>

  fetchCount = 25
  isLoadingDelay = 300
  visibleRow: number = this.initialPageSize;

  noMoreRows$: BehaviorSubject<boolean>;

  pageLoadeds: number = 1

  tableView: boolean = true

  textInputCallback?: () => void

  showTooltips = true

  // filters
  clinicalSignificanceInput: Maybe<EvidenceClinicalSignificance>
  descriptionInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  drugNameInput: Maybe<string>
  eidInput: Maybe<string>
  evidenceDirectionInput: Maybe<EvidenceDirection>
  evidenceLevelInput: Maybe<EvidenceLevel>
  evidenceRatingInput: Maybe<number>
  evidenceTypeInput: Maybe<EvidenceType>
  geneSymbolInput: Maybe<string>
  variantNameInput: Maybe<string>
  variantOriginInput: Maybe<VariantOrigin>

  sortColumns: typeof EvidenceSortColumns = EvidenceSortColumns

  private destroy$ = new Subject()

  constructor(private gql: EvidenceBrowseGQL,
    private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.scrolledToBottom$ = new Subject<Event>()
    this.filterUpdate$ = new Subject<Event>()

    this.pageLoaded$ = new BehaviorSubject<number>(0) // TODO: number -> cursor
    this.pagesLoaded$ = this.pageLoaded$
      .pipe(scan((total, n) => total + n),
        distinctUntilChanged());
  }

  ngOnInit() {
    this.queryRef = this.gql.watch(
      {
        assertionId: this.assertionId,
        cardView: !this.tableView,
        clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
        clinicalTrialId: this.clinicalTrialId,
        description: this.descriptionInput,
        diseaseId: this.diseaseId,
        diseaseName: this.diseaseNameInput,
        drugId: this.drugId,
        drugName: this.drugNameInput,
        evidenceDirection: this.evidenceDirectionInput ? this.evidenceDirectionInput : undefined,
        evidenceLevel: this.evidenceLevelInput ? this.evidenceLevelInput : undefined,
        evidenceType: this.evidenceTypeInput ? this.evidenceTypeInput : undefined,
        first: this.initialPageSize,
        geneSymbol: this.geneSymbolInput ? this.geneSymbolInput : undefined,
        organizationId: this.organizationId,
        phenotypeId: this.phenotypeId,
        rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined,
        sourceId: this.sourceId,
        status: this.status,
        userId: this.userId,
        variantId: this.variantId,
        variantName: this.variantNameInput ? this.variantNameInput : undefined,
        variantOrigin: this.variantOriginInput ? this.variantOriginInput : undefined,
      },
      {
        fetchPolicy: 'network-only'
      });

    this.initialSelectedEids
      .forEach(eid => this.selectedEvidenceIds.set(eid.id, eid))

    this.result$ = this.queryRef.valueChanges.pipe(share())
    this.isLoading$ = this.result$.pipe(pluck('loading'))

    this.connection$ = this.result$
      .pipe(pluck('data', 'evidenceItems'),
        filter(isNonNulled)) as Observable<EvidenceItemConnection>

    this.row$ = this.connection$
      .pipe(pluck('edges'),
        filter(isNonNulled),
        map(edges => edges.map((e) => e.node)));

    this.totalCount$ = this.connection$
      .pipe(pluck('totalCount'),
        filter(isNonNulled))

    // update total count to emit counts
    this.totalCount$
      .pipe(untilDestroyed(this))
      .subscribe((tc: number) => this.totalCount = tc)

    this.initialTotalCount$ = this.totalCount$.pipe(first())

    this.visibleCount$ = this.row$.pipe(map(rows => rows.length))

    this.tableConnection$ = this.connection$
      .pipe(withLatestFrom(this.row$),
            map(([{ totalCount }, nodes]): TableCountsConnection => {
        return {
          totalCount: totalCount,
          nodeCount: nodes.length,
          filteredCount: undefined,
        }
      }))

    this.filteredCount$ = this.connection$
      .pipe(pluck('filteredCount'))

    this.countInfo$ = combineLatest(
      this.initialTotalCount$,
      this.totalCount$,
      this.visibleCount$,
      this.filteredCount$)
      .pipe(
        map(([itc, tc, vc, fc]) => {
          // If initial total count exists, and it's greater than
          // the returned total count, set total count to initial total count.
          // If no filteredCount, set filtered count to total count
          return {
            initialTotalCount: itc,
            totalCount: (itc && tc < itc) ? itc : tc,
            visibleCount: vc,
            filteredCount: fc ? fc : tc
          }
        }))

    // emit pageLoaded$ event on new result response
    this.connection$
      .pipe(pluck('pageInfo', 'endCursor'),
        distinctUntilChanged(),
        untilDestroyed(this))
      .subscribe(() => {
        this.pageLoaded$.next(1)
      });

    this.pageInfo$ = this.connection$
      .pipe(pluck('pageInfo'),
        filter(isNonNulled));

    this.debouncedQuery
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$))
      .subscribe((_) => {
        this.refresh()
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }

    // for every onScrolled event, convert to bool, share multicast
    this.isScrolling$ = this.scrollEvent$
      .pipe(map((e: ScrollEvent) => e === 'stop' ? true : false), // false on 'scroll', true on 'stop'
        distinctUntilChanged(),
        share());

    // load next page if not the final page of results
    this.scrolledToBottom$
      .pipe(withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [Event, PageInfo]) => pageInfo),
        untilDestroyed(this))
      .subscribe((pageInfo: PageInfo) => {
        if (pageInfo.hasNextPage) {
          this.queryRef
            .fetchMore({
              variables: {
                first: this.fetchCount,
                after: pageInfo.endCursor
              },
            });
          this.cdr.detectChanges();
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

  }

  onScroll(e: ScrollEvent) {
    if (e === 'scroll' || e === 'stop') {
      this.scrollEvent$.next(e)
      this.cdr.detectChanges()
    }
    else if (e === 'bottom') {
      this.scrolledToBottom$.next()
    }
  }

  // filtering, sorting callbacks
  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.pageLoadeds = 1
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  onEvidenceCheckboxClicked(newValue: boolean, eid: FormEvidence) {
    if (newValue) {
      this.selectedEvidenceIds.set(eid.id, eid)
    } else {
      this.selectedEvidenceIds.delete(eid.id)
    }
    this.selectedEids.emit(Array.from(this.selectedEvidenceIds.values()))
  }

  refresh() {
    this.pageLoadeds = 1;
    var eid: Maybe<number>
    if (this.eidInput)
      if (this.eidInput.toUpperCase().startsWith('EID')) {
        eid = +(this.eidInput.toUpperCase().replace('EID', ''));
      }
      else {
        eid = +this.eidInput;
      }
    else {
      eid = undefined;
    }
    this.queryRef.refetch({
      id: eid,
      diseaseName: this.diseaseNameInput,
      drugName: this.drugNameInput,
      description: this.descriptionInput,
      evidenceLevel: this.evidenceLevelInput ? this.evidenceLevelInput : undefined,
      evidenceType: this.evidenceTypeInput ? this.evidenceTypeInput : undefined,
      evidenceDirection: this.evidenceDirectionInput ? this.evidenceDirectionInput : undefined,
      clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
      variantOrigin: this.variantOriginInput ? this.variantOriginInput : undefined,
      rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined,
      geneSymbol: this.geneSymbolInput ? this.geneSymbolInput : undefined,
      variantName: this.variantNameInput ? this.variantNameInput : undefined,
      cardView: !this.tableView
    });
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchCount,
        after: afterCursor
      },
    });

    this.pageLoadeds += 1
  }

  // virtual scroll helpers
  trackByIndex(_: number, data: EvidenceGridFieldsFragment): number {
    return data.id;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }


}
