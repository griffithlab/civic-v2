import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin, } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import { pluck, map, debounceTime, take, takeUntil, withLatestFrom, first, distinctUntilChanged, share } from 'rxjs/operators';
import { FormEvidence } from '@app/forms/forms.interfaces';
import { $D } from 'rxjs-debug';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive';

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

  // REFACTORED LOCAL VARS
  onScrolled$: BehaviorSubject<ScrollEvent>
  showTooltips$!: Observable<boolean>

  onLoadMore$: Subject<Event>

  // implementing isLoading as var so both watch() and fetchMore() can update loading state.
  // TODO: update to apollo-angular v3 - eliminates the need to manually manage loading state
  isLoading = true;

  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>;
  filteredCount$?: Observable<number>;

  pageInfo$?: Observable<PageInfo>;
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
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
    this.onScrolled$ = new BehaviorSubject<ScrollEvent>('stop');
    this.onLoadMore$ = new Subject<Event>();
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

    let observable = $D(this.queryRef.valueChanges)

    // handle loading state
    observable
      .pipe(
        takeUntil(this.destroy$),
        pluck('loading'))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.evidence$ = observable.pipe(
      pluck('data', 'evidenceItems', 'edges'),
      map((edges) => { return edges.map((e) => e.node); }));

    this.filteredCount$ = observable.pipe(pluck('data', 'evidenceItems', 'totalCount'));

    this.filteredCount$
      .pipe(
        takeUntil(this.destroy$),
        take(1))
      .subscribe(value => {
        this.totalCount = value;
        this.initialTotalCount.emit(value);
      });

    this.filteredCount$
      .pipe(takeUntil(this.destroy$))
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

    this.pageInfo$ = observable.pipe(pluck('data', 'evidenceItems', 'pageInfo'));

    this.debouncedQuery
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$))
      .subscribe((_) => {
        this.refresh()
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }

    // for every onScrolled event, convert to bool, share multicast
    this.showTooltips$ = this.onScrolled$
      .pipe(
        map((e: ScrollEvent) => e === 'stop' ? true : false ), // false on 'scroll', true on 'stop'
        distinctUntilChanged(),
        share());

    // load next page if not the final page of results
    this.onLoadMore$
      .pipe(
        withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [Event, PageInfo]) => pageInfo),
        takeUntil(this.destroy$))
      .subscribe((pageInfo: PageInfo) => {
        if (pageInfo.hasNextPage) {
          this.isLoading = true
          this.queryRef
            .fetchMore({
              variables: {
                first: this.fetchMorePageSize,
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

  // REFACTORED FUNCTIONS
  onScrollEnd(): void {
  }

  onScroll(e: ScrollEvent) {
    if (e === 'scroll' || e === 'stop') {
      this.onScrolled$.next(e)
      this.cdr.detectChanges()
    }
    else if (e === 'bottom') {
      this.onLoadMore$.next()
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
    this.isLoading = true;
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
    this.isLoading = true;
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
