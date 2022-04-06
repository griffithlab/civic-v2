import { Component, Input, OnDestroy, OnInit, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime, take } from 'rxjs/operators';
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
export class CvcEvidenceTableComponent implements OnInit, OnDestroy {
  @Input() variantId: Maybe<number>
  @Input() assertionId: Maybe<number>
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() diseaseId: Maybe<number>
  @Input() drugId: Maybe<number>
  @Input() sourceId: Maybe<number>
  @Input() clinicalTrialId: Maybe<number>
  @Input() status: Maybe<EvidenceStatus>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>
  @Input() initialPageSize: number = 25

  @Input() mode: 'normal' | 'select' = 'normal'
  @Input() displayGeneAndVariant: boolean = true

  @Output() selectedEids = new EventEmitter<FormEvidence[]>()
  @Input() initialSelectedEids: FormEvidence[] = []
  @Input() initialUserFilters: Maybe<EvidenceTableUserFilters>
  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<EvidenceGridFieldsFragment>;

  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  selectedEvidenceIds = new Map<number, FormEvidence>();

  isLoading$?: Observable<boolean>
  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  totalCount?: number
  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

  tableView: boolean = true

  textInputCallback?: () => void

  fetchMorePageSize = 25;

  //filters
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

  sortColumns: typeof EvidenceSortColumns = EvidenceSortColumns

  constructor(private gql: EvidenceBrowseGQL) { }

  ngOnInit() {

    if (this.initialUserFilters) {
      this.eidInput = this.initialUserFilters.eidInput
      this.diseaseNameInput = this.initialUserFilters.diseaseNameInput
      this.drugNameInput = this.initialUserFilters.drugNameInput
      this.descriptionInput = this.initialUserFilters.descriptionInput
      this.evidenceLevelInput = this.initialUserFilters.evidenceLevelInput
      this.evidenceTypeInput = this.initialUserFilters.evidenceTypeInput
      this.evidenceDirectionInput = this.initialUserFilters.evidenceDirectionInput
      this.clinicalSignificanceInput = this.initialUserFilters.clinicalSignificanceInput
      this.variantOriginInput = this.initialUserFilters.variantOriginInput
      this.evidenceRatingInput = this.initialUserFilters.evidenceRatingInput
      this.variantNameInput = this.initialUserFilters.variantNameInput
      this.geneSymbolInput = this.initialUserFilters.geneSymbolInput
    }

    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      variantId: this.variantId,
      assertionId: this.assertionId,
      organizationId: this.organizationId,
      userId: this.userId,
      phenotypeId: this.phenotypeId,
      diseaseId: this.diseaseId,
      drugId: this.drugId,
      sourceId: this.sourceId,
      clinicalTrialId: this.clinicalTrialId,
      cardView: !this.tableView,
      status: this.status,
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
    });

    this.initialSelectedEids.forEach(eid => this.selectedEvidenceIds.set(eid.id, eid))

    let observable = this.queryRef.valueChanges;

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

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
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });

    this.loadedPages += 1
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
