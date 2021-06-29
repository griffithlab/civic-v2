import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EvidenceBrowseGQL, EvidenceBrowseQuery, EvidenceBrowseQueryVariables, EvidenceClinicalSignificance, EvidenceDirection, EvidenceGridFieldsFragment, EvidenceLevel, EvidenceSortColumns, EvidenceType, Maybe, PageInfo, VariantOrigin } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-evidence-browse',
  templateUrl: './evidence-browse.component.html',
  styleUrls: ['./evidence-browse.component.less'],
})
export class EvidenceBrowseComponent implements OnInit, OnDestroy {
  @Input() variantId: Maybe<number>
  @Input() assertionId: Maybe<number>

  private initialPageSize = 25
  private queryRef!: QueryRef<EvidenceBrowseQuery, EvidenceBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  evidence$?: Observable<Maybe<EvidenceGridFieldsFragment>[]>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  textInputCallback?: () => void

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

  sortColumns: typeof EvidenceSortColumns = EvidenceSortColumns

  constructor(private gql: EvidenceBrowseGQL) { }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      variantId: this.variantId,
      assertionId: this.assertionId
    }, { fetchPolicy: 'cache-and-network', errorPolicy: 'all' });

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

  refresh() {
    this.queryRef.refetch({
      id: this.eidInput ? +this.eidInput : undefined,
      diseaseName: this.diseaseNameInput,
      drugName: this.drugNameInput,
      description: this.descriptionInput,
      evidenceLevel: this.evidenceLevelInput ? this.evidenceLevelInput : undefined,
      evidenceType: this.evidenceTypeInput ? this.evidenceTypeInput : undefined,
      evidenceDirection: this.evidenceDirectionInput ? this.evidenceDirectionInput : undefined,
      clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
      variantOrigin: this.variantOriginInput ? this.variantOriginInput : undefined,
      rating: this.evidenceRatingInput ? this.evidenceRatingInput : undefined
    })
  }

  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({ sortBy: buildSortParams(e) })
  }
  
  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}
