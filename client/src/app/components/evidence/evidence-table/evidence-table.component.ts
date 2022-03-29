import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceStatus, EvidenceType, Maybe, PageInfo, VariantOrigin } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

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

  @Input() displayGeneAndVariant: boolean = true

  private initialPageSize = 25
  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

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
      status: this.status
    });

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

    this.totalCount$ = observable.pipe(
      pluck('data', 'evidenceItems', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'evidenceItems', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  loadMore(afterCursor: Maybe<string>): void {
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });
  }

  refresh() {
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
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}
