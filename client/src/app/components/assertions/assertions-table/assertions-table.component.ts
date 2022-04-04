import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { AmpLevel, AssertionBrowseTableRowFieldsFragment, AssertionsBrowseGQL, AssertionsBrowseQuery, AssertionsBrowseQueryVariables, AssertionSortColumns, EvidenceClinicalSignificance, EvidenceDirection, EvidenceStatus, EvidenceType, Maybe, PageInfo } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject  } from 'rxjs';
import { startWith, pluck, map, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'cvc-assertions-table',
  templateUrl: './assertions-table.component.html',
  styleUrls: ['./assertions-table.component.less']
})
export class CvcAssertionsTableComponent implements OnInit {
  @Input() evidenceId: Maybe<number>
  @Input() variantId: Maybe<number>
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() phenotypeId: Maybe<number>
  @Input() diseaseId: Maybe<number>
  @Input() drugId: Maybe<number>
  @Input() status: Maybe<EvidenceStatus>
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private queryRef!: QueryRef<AssertionsBrowseQuery, AssertionsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  assertions$?: Observable<Maybe<AssertionBrowseTableRowFieldsFragment>[]>
  filteredCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>

  initialPageSize = 25
  totalCount?: number
  visibleCount: number = this.initialPageSize

  loadedPages: number = 1

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
      drugId: this.drugId,
      status: this.status,
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

    this.filteredCount$ = observable.pipe(
      pluck('data', 'assertions', 'totalCount')
    )

    this.filteredCount$.pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize * this.loadedPages
          if (this.totalCount && this.visibleCount > this.totalCount) {
            this.visibleCount = this.totalCount
          }
        }
      }
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
    this.loadedPages = 1
    var aid: Maybe<number>
    if (this.aidInput)
      if (this.aidInput.toUpperCase().startsWith('AID')) {
        aid = +(this.aidInput.toUpperCase().replace('AID', ''))
      }
      else {
        aid = +this.aidInput
      }
    else {
      aid = undefined
    }
    this.queryRef.refetch({
      id: aid,
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
    this.loadedPages = 1
    this.queryRef.refetch({ sortBy: buildSortParams(e), cardView: !this.tableView })
  }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({variables: {
      after: cursor
    }})

    this.loadedPages += 1
  }
}
