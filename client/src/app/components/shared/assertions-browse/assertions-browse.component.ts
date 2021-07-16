import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AmpLevel, AssertionBrowseTableRowFieldsFragment, AssertionsBrowseGQL, AssertionsBrowseQuery, AssertionsBrowseQueryVariables, AssertionSortColumns, EvidenceClinicalSignificance, EvidenceDirection,  EvidenceType, Maybe, PageInfo } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-assertions-browse',
  templateUrl: './assertions-browse.component.html',
  styleUrls: ['./assertions-browse.component.less'],
})
export class AssertionsBrowseComponent implements OnInit, OnDestroy {
  @Input() evidenceId: Maybe<number>
  @Input() variantId: Maybe<number>
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() diseaseId: Maybe<number>

  private initialPageSize = 25
  private queryRef!: QueryRef<AssertionsBrowseQuery, AssertionsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  assertions$?: Observable<Maybe<AssertionBrowseTableRowFieldsFragment>[]>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  tableView: boolean = true

  textInputCallback?: () => void

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

  constructor(private gql: AssertionsBrowseGQL) { }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize,
      variantId: this.variantId,
      evidenceId: this.evidenceId,
      organizationId: this.organizationId,
      userId: this.userId,
      phenotypeId: this.phenotypeId,
      diseaseId: this.diseaseId,
      cardView: !this.tableView
    });

    let observable = this.queryRef.valueChanges;

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.assertions$ = observable.pipe(
      pluck('data', 'assertions', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'assertions', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'assertions', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );
      
    this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef.refetch({
      id: this.aidInput ? +this.aidInput : undefined,
      diseaseName: this.diseaseNameInput,
      geneName: this.geneNameInput,
      variantName: this.variantNameInput,
      drugName: this.drugNameInput,
      summary: this.summaryInput,
      assertionType: this.assertionTypeInput ? this.assertionTypeInput : undefined,
      assertionDirection: this.assertionDirectionInput ? this.assertionDirectionInput : undefined,
      clinicalSignificance: this.clinicalSignificanceInput ? this.clinicalSignificanceInput : undefined,
      ampLevel: this.ampLevelInput ? this.ampLevelInput : undefined,
      cardView: !this.tableView
    })
  }

  onModelChanged() { this.debouncedQuery.next(); }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }
  
  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

}
