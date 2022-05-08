import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core'
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin, } from '@app/generated/civic.apollo'
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, interval, Observable, Subject, partition, iif, of } from 'rxjs'
import { pluck, map, debounceTime, take, takeUntil, withLatestFrom, first, distinctUntilChanged, share, startWith, mergeMap, count, filter, scan } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { FormEvidence } from '@app/forms/forms.interfaces'
import { $D } from 'rxjs-debug'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { ApolloQueryResult } from '@apollo/client/core'

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

export interface ResultsInfo {
  pageInfo: PageInfo,
  totalCount: number,
  filteredCount?: number
}

@UntilDestroy()
@Component({
  selector: 'cvc-evidence-table',
  templateUrl: './evidence-table.component.html',
  styleUrls: ['./evidence-table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  @Input() initialPageSize: number = 30;
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

  @Output() selectedEids = new EventEmitter<FormEvidence[]>()
  selectedEvidenceIds = new Map<number, FormEvidence>();

  @Output() initialTotalCount = new EventEmitter<number>()
  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  // SOURCE STREAMS
  scrolled$: BehaviorSubject<ScrollEvent>
  scrolledToBottom$: Subject<Event>
  filterChanged$: Subject<any>
  pageLoaded$: BehaviorSubject<number>
  pagesLoaded$: Observable<number>

  // INTERMEDIATE STREAMS
  results$!: Observable<ApolloQueryResult<EvidenceBrowseQuery>>
  pageInfo$!: Observable<PageInfo>

  // PRESENTATION STREAMS
  loading$!: Observable<boolean>
  rows$!: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  scrolling$!: Observable<boolean>

  totalCount$!: Observable<number>
  visibleCount$!: Observable<number>
  filteredCount$!: Observable<number>

  // implementing isLoading as var so both watch() and fetchMore() can update loading state.
  // TODO: update to apollo-angular v3 - eliminates the need to manually manage loading state
  // isLoading = true;

  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>;

  totalCount?: number;
  fetchMorePageSize = 25;
  isLoadingDelay = 300;
  visibleCount: number = this.initialPageSize;

  noMoreRows$: BehaviorSubject<boolean>;

  loadedPages: number = 1;

  tableView: boolean = true;

  textInputCallback?: () => void;

  showTooltips = true;

  // filters
  clinicalSignificanceInput: Maybe<EvidenceClinicalSignificance>;
  descriptionInput: Maybe<string>;
  diseaseNameInput: Maybe<string>;
  drugNameInput: Maybe<string>;
  eidInput: Maybe<string>;
  evidenceDirectionInput: Maybe<EvidenceDirection>;
  evidenceLevelInput: Maybe<EvidenceLevel>;
  evidenceRatingInput: Maybe<number>;
  evidenceTypeInput: Maybe<EvidenceType>;
  geneSymbolInput: Maybe<string>;
  variantNameInput: Maybe<string>;
  variantOriginInput: Maybe<VariantOrigin>;

  sortColumns: typeof EvidenceSortColumns = EvidenceSortColumns;

  private destroy$ = new Subject();

  constructor(private gql: EvidenceBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrolled$ = new BehaviorSubject<ScrollEvent>('stop')
    this.scrolledToBottom$ = new Subject<Event>()
    this.pageLoaded$ = new BehaviorSubject<number>(0)
    this.pagesLoaded$ = this.pageLoaded$.pipe(scan((total, n) => total + n))
    this.filterChanged$ = new Subject<Event>()
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

    this.initialSelectedEids.forEach(eid => this.selectedEvidenceIds.set(eid.id, eid))

    this.results$ = this.queryRef.valueChanges.pipe(share())
    this.loading$ = this.results$.pipe(pluck('loading'))

    this.rows$ = this.results$
      .pipe(pluck('data', 'evidenceItems', 'edges'),
        filter(isNonNulled),
        map(edges => edges.map((e) => e.node)));

    this.totalCount$ = this.results$
      .pipe(pluck('data', 'evidenceItems', 'totalCount'),
        filter(isNonNulled),
        startWith(0));

    // emit initialTotalCount
    this.totalCount$
      .pipe(first())
      .subscribe(tc => this.initialTotalCount.next(tc))

    this.pageInfo$ = this.results$
      .pipe(pluck('data', 'evidenceItems', 'pageInfo'),
        filter(isNonNulled));

    const visibleCountCalc$ = this.pagesLoaded$
      .pipe(
        withLatestFrom(of(this.initialPageSize)),
        withLatestFrom(of(this.fetchMorePageSize)),
        map((arr: any[]) => arr.flat()),
        map(([loaded, initial, fetch]) => {
          return { intial: initial, fetch: fetch, loaded: loaded }
        }));

    visibleCountCalc$.subscribe((c) => {
      console.log('---------- visibleCountCalc:')
      console.log(c)
    })
    // this.filteredCount$ = this.totalCount$
    //   .pipe(withLatestFrom(this.pageLoaded$),
    //     mergeMap(([tc, fc]) => iif(() => tc < this.initialPageSize, initialPageSize$,)))
    //       ([tc, fc]: number[]) => { return tc < this.initialPageSize },
    //       of(([tc, fc]: number[]) => { return this.initialPageSize }),
    //       of(([tc, fc]: number[]) => { return this.initialPageSize }))

    // map(([tc,fc]) => { return tc }));

    let observable = this.queryRef.valueChanges

    this.filteredCount$ = observable.pipe(pluck('data', 'evidenceItems', 'totalCount'));

    this.filteredCount$
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        } else {
          this.visibleCount = this.initialPageSize + this.fetchMorePageSize * (this.loadedPages - 1)
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      });

    this.debouncedQuery
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$))
      .subscribe((_) => {
        this.refresh()
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }

    // for every onScrolled event, convert to bool, share multicast
    this.scrolling$ = this.scrolled$
      .pipe(
        map((e: ScrollEvent) => e === 'stop' ? true : false), // false on 'scroll', true on 'stop'
        distinctUntilChanged(),
        share());

    // load next page if not the final page of results
    this.scrolledToBottom$
      .pipe(
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [Event, PageInfo]) => pageInfo),
        untilDestroyed(this))
      .subscribe((pageInfo: PageInfo) => {
        if (pageInfo.hasNextPage) {
          this.queryRef
            .fetchMore({
              variables: {
                first: this.fetchMorePageSize,
                after: pageInfo.endCursor
              },
            })
            .then((_) => {
              this.pageLoaded$.next(1)
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
      this.scrolled$.next(e)
      this.cdr.detectChanges()
    }
    else if (e === 'bottom') {
      this.scrolledToBottom$.next()
    }
  }

  // filtering, sorting callbacks
  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
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
    this.loadedPages = 1;
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
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });

    this.loadedPages += 1
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
