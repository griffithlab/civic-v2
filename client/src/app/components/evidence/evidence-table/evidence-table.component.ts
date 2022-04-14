import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take, takeUntil, pairwise, filter, throttleTime, withLatestFrom, tap } from 'rxjs/operators';
import { FormEvidence } from '@app/forms/forms.interfaces';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { tag } from 'rxjs-spy/cjs/operators';


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
  @Input() initialPageSize: number = 25;
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

  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();
  // implementing isLoading as var so both watch() and fetchMore() can update loading state.
  // TODO: update to apollo-angular v3 - eliminates the need to manually manage loading state
  isLoading = false;

  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  totalCount?: number
  fetchMorePageSize = 25;
  isLoadingDelay = 100;

  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

  tableView: boolean = true

  textInputCallback?: () => void

  //filters
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

  private destroy$ = new Subject();

  constructor(private gql: EvidenceBrowseGQL) { }

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

    this.queryRef = this.gql.watch({
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
    });

    this.initialSelectedEids.forEach(eid => this.selectedEvidenceIds.set(eid.id, eid))

    let observable = this.queryRef.valueChanges;

    // handle loading state
    observable.pipe(
      takeUntil(this.destroy$),
      pluck('loading'),
      startWith(true)
    )
    .subscribe((l: boolean) => { this.isLoading = l; });

    this.evidence$ = observable.pipe(
      pluck('data', 'evidenceItems', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.filteredCount$ = observable.pipe(
      pluck('data', 'evidenceItems', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize + this.fetchMorePageSize * (this.loadedPages - 1)
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'evidenceItems', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh());

    this.textInputCallback = () => { this.debouncedQuery.next(); }

  }

  //
  // virtual scroll helpers
  trackByIndex(_: number, data: EvidenceGridFieldsFragment): number {
    return data.id;
  }

  scrollToIndex(index: number): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrollToIndex(index);
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

  ngAfterViewInit(): void {
    if (this.nzTableComponent && this.nzTableComponent.cdkVirtualScrollViewport &&
      this.pageInfo$) {

      this.viewport = this.nzTableComponent.cdkVirtualScrollViewport;

      this.viewport.elementScrolled()
        .pipe(
          takeUntil(this.destroy$),
          // for each elementScrolled event, get latest pageInfo,
          // and return page cursor and scroll offest
          withLatestFrom(this.pageInfo$),
          map(([_, pageInfo]: [Event, PageInfo]) =>
            {
              return {
                cursor: pageInfo.endCursor,
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
          throttleTime(this.isLoadingDelay),
        ).subscribe(([_, e2]) => {
          this.loadMore(e2.cursor);
        });
    } else {
      throw new Error('evidence-table unable to find cdkVirtualScrollViewport.');
    }
  }

  refresh() {
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

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}
