import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  EvidenceBrowseGQL,
  EvidenceBrowseQuery,
  EvidenceBrowseQueryVariables,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceGridFieldsFragment,
  EvidenceLevel,
  EvidenceSortColumns,
  EvidenceStatus,
  EvidenceType,
  Maybe,
  PageInfo,
  VariantOrigin,
} from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { QueryRef } from 'apollo-angular';
import { BehaviorSubject, interval, Observable, Subject } from 'rxjs';
import {
  tap,
  pluck,
  map,
  debounceTime,
  take,
  takeUntil,
  pairwise,
  filter,
  throttleTime,
  withLatestFrom,
  first
} from 'rxjs/operators';
import { FormEvidence } from '@app/forms/forms.interfaces';
import { NzTableComponent } from 'ng-zorro-antd/table';

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

@Component({
  selector: 'cvc-evidence-table',
  templateUrl: './evidence-table.component.html',
  styleUrls: ['./evidence-table.component.less'],
})
export class CvcEvidenceTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() assertionId: Maybe<number>
  @Input() clinicalTrialId: Maybe<number>
  @Input() cvcTitle: Maybe<string>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() diseaseId: Maybe<number>
  @Input() displayGeneAndVariant: boolean = true
  @Input() drugId: Maybe<number>
  @Input() initialPageSize: number = 30;
  @Input() initialSelectedEids: FormEvidence[] = []
  @Input() initialUserFilters: Maybe<EvidenceTableUserFilters>
  @Input() mode: 'normal' | 'select' = 'normal'
  @Input() organizationId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() sourceId: Maybe<number>
  @Input() status: Maybe<EvidenceStatus>
  @Input() userId: Maybe<number>
  @Input() variantId: Maybe<number>

  @Output() selectedEids = new EventEmitter<FormEvidence[]>()
  selectedEvidenceIds = new Map<number, FormEvidence>();

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<EvidenceGridFieldsFragment>;
  viewport?: CdkVirtualScrollViewport;

  @Output() initialTotalCount = new EventEmitter<number>()
  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();
  // implementing isLoading as var so both watch() and fetchMore() can update loading state.
  // TODO: update to apollo-angular v3 - eliminates the need to manually manage loading state
  isLoading = true;

  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>;
  filteredCount$?: Observable<number>;

  pageInfo$?: Observable<PageInfo>;
  totalCount?: number;
  fetchMorePageSize = 25;
  isLoadingDelay = 100;
  visibleCount$?: Observable<number>;
  visibleCount: number = this.initialPageSize;

  noMoreRows$: BehaviorSubject<boolean>;

  loadedPages: number = 1;

  tableView: boolean = true;

  textInputCallback?: () => void;

  showTooltips = true;

  //filters
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

  showTbody: boolean = false;

  constructor(private gql: EvidenceBrowseGQL, private cdr: ChangeDetectorRef) {
    this.noMoreRows$ = new BehaviorSubject<boolean>(false);
  }

  ngOnInit() {
    if (this.initialUserFilters) {
      this.clinicalSignificanceInput = this.initialUserFilters.clinicalSignificanceInput
      this.descriptionInput = this.initialUserFilters.descriptionInput
      this.diseaseNameInput = this.initialUserFilters.diseaseNameInput
      this.drugNameInput = this.initialUserFilters.drugNameInput
      this.eidInput = this.initialUserFilters.eidInput
      this.evidenceDirectionInput = this.initialUserFilters.evidenceDirectionInput
      this.evidenceLevelInput = this.initialUserFilters.evidenceLevelInput
      this.evidenceRatingInput = this.initialUserFilters.evidenceRatingInput
      this.evidenceTypeInput = this.initialUserFilters.evidenceTypeInput
      this.geneSymbolInput = this.initialUserFilters.geneSymbolInput
      this.variantNameInput = this.initialUserFilters.variantNameInput
      this.variantOriginInput = this.initialUserFilters.variantOriginInput
    }

    this.queryRef = this.gql.watch(
      {
        first: this.initialPageSize,

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

    let observable = this.queryRef.valueChanges;

    // handle loading state
    observable
      .pipe(takeUntil(this.destroy$), pluck('loading'))
      .subscribe((l: boolean) => { this.isLoading = l; });

    this.evidence$ = observable.pipe(
      pluck('data', 'evidenceItems', 'edges'),
      map((edges) => { return edges.map((e) => e.node); }));

    this.filteredCount$ = observable.pipe(pluck('data', 'evidenceItems', 'totalCount'));

    this.filteredCount$
      .pipe(take(1))
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
        takeUntil(this.destroy$),
        debounceTime(500))
      .subscribe((_) => {
        this.refresh()
      });

    this.textInputCallback = () => { this.debouncedQuery.next(); }

  }

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
          tap((_) => { this.showTooltips = false; }), // on scroll even toggle tooltips off
          debounceTime(500) // wait 500ms, then execute subsribed function
        ).subscribe((_) => {
          this.showTooltips = true; // toggle tooltips on
          this.cdr.detectChanges(); // force refresh
        })

      // force viewport check after initial render
      // NOTE: first() operator automatically unsubscribes
      this.viewport.renderedRangeStream
        .pipe(first())
        .subscribe((_) => {
          if (this.viewport) { this.viewport!.checkViewportSize(); }
          else { console.error('evidence-table unable to find cdkVirtualScrollViewport for checkViewportSize() call.'); }
        });
    } else {
      console.error('evidence-table unable to find cdkVirtualScrollViewport.');
    }
  } // ngAfterViewInit

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
    this.loadedPages = 1
    var eid: Maybe<number>
    if (this.eidInput)
      if (this.eidInput.toUpperCase().startsWith('EID')) {
        eid = +(this.eidInput.toUpperCase().replace('EID', ''))
      }
      else {
        eid = +this.eidInput
      }
    else {
      eid = undefined
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
    })
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

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }


}
