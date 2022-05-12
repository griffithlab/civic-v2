import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers'
import { FetchVars, ScrollEvent } from '@app/directives/table-scroll/table-scroll.directive'
import { FormEvidence } from '@app/forms/forms.interfaces'
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceItemConnection, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin } from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, interval, Observable, of, Subject } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { debounceTime, distinctUntilChanged, filter, first, map, pluck, share, skip, take, withLatestFrom } from 'rxjs/operators'

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEvidenceTableComponent implements OnInit {
  @Input() cvcHeight: Maybe<string>
  @Input() assertionId: Maybe<number>
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitle: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() diseaseId: Maybe<number>
  @Input() displayGeneAndVariant = true
  @Input() drugId: Maybe<number>
  @Input() initialPageSize = 30
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

  // PRESENTATION STREAMS
  initialLoading$!: Observable<boolean>
  moreLoading$!: Observable<boolean>
  row$!: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  isScrolling$!: Observable<boolean>
  fetchVar$!: Observable<FetchVars>
  selectedEvidenceIds = new Map<number, FormEvidence>();
  noMoreRows$: BehaviorSubject<boolean>
  queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>()

  fetchCount = 25
  isLoadingDelay = 300

  tableView = true

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

  constructor(private gql: EvidenceBrowseGQL,
    private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false)
    this.scrollEvent$ = new BehaviorSubject<ScrollEvent>('stop')
    this.scrolledToBottom$ = new Subject<Event>()
    this.filterUpdate$ = new Subject<Event>()
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
      });

    this.initialSelectedEids
      .forEach(eid => this.selectedEvidenceIds.set(eid.id, eid))

    this.result$ = this.queryRef.valueChanges.pipe(share())

    // for controlling nzTable's loading overlay, which covers the whole table
    // initialLoading$ only emits the initial two true -> false events
    this.initialLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        take(2))

    // for controlling the smaller [Loading...] indicator
    // skips the first two load events, transmits the rest so that it's displayed
    // for fetchMore and refresh queries
    this.moreLoading$ = this.result$
      .pipe(pluck('loading'),
        distinctUntilChanged(),
        skip(2))

    this.connection$ = this.result$
      .pipe(pluck('data', 'evidenceItems'),
        filter(isNonNulled),
      ) as Observable<EvidenceItemConnection>

    this.row$ = this.connection$
      .pipe(pluck('edges'),
        filter(isNonNulled),
        map(edges => edges.map((e) => e.node)));

    this.pageInfo$ = this.connection$
      .pipe(pluck('pageInfo'),
        filter(isNonNulled));

    this.fetchVar$ = this.pageInfo$
      .pipe(withLatestFrom(of(this.fetchCount)),
        map(([pageInfo, fetchCount]) => {
          return {
            fetchCount: fetchCount,
            pageInfo: pageInfo
          }
        }));

    this.debouncedQuery
      .pipe(
        debounceTime(500),
        untilDestroyed(this))
      .subscribe(() => {
        this.refresh()
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }

    // for every onScrolled event, convert to bool, share multicast
    this.isScrolling$ = this.scrollEvent$
      .pipe(map((e: ScrollEvent) => e === 'stop' ? true : false), // false on 'scroll', true on 'stop'
        distinctUntilChanged(),
        share());

    // show 'no more rows' msg when scroll viewport hits bottom
    // and no more pages remain in the result set
    this.scrolledToBottom$
      .pipe(withLatestFrom(this.pageInfo$),
        map(([_, pageInfo]: [Event, PageInfo]) => pageInfo),
        untilDestroyed(this))
      .subscribe((pageInfo: PageInfo) => {
        if (!pageInfo.hasNextPage) {
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
    let eid: Maybe<number>
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

  // virtual scroll helpers
  trackByIndex(_: number, data: EvidenceGridFieldsFragment): number {
    return data.id;
  }
}
