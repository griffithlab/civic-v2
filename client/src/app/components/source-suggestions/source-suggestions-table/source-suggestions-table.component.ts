import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseSourceSuggestionRowFieldsFragment, BrowseSourceSuggestionsGQL, BrowseSourceSuggestionsQuery, Maybe, PageInfo, QuerySourceSuggestionsArgs, SourceSource, SourceSuggestionsSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-source-suggestions-table',
  templateUrl: './source-suggestions-table.component.html',
  styleUrls: ['./source-suggestions-table.component.less']
})
export class CvcSourceSuggestionsTableComponent implements OnInit {
  @Input() sourceId: Maybe<number>

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseSourceSuggestionsQuery, QuerySourceSuggestionsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseSourceSuggestionsQuery>>;
  isLoading$?: Observable<boolean>;
  sourceSuggestions$?: Observable<Maybe<BrowseSourceSuggestionRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;

  textInputCallback?: () => void

  //filters
  citationIdInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>
  sourceIdInput: Maybe<number>
  geneNameInput: Maybe<string>
  variantNameInput: Maybe<string>
  diseaseNameInput: Maybe<string>
  commentInput: Maybe<string>
  submitterInput: Maybe<string>
  citationInput: Maybe<string>

  pageSize = 25
  sortColumns: typeof SourceSuggestionsSortColumns = SourceSuggestionsSortColumns

  constructor(private gql: BrowseSourceSuggestionsGQL) {}
  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.pageSize,
      sourceId: this.sourceId
    })

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        }
      })
    );

    this.isLoading$ = this.data$.pipe(pluck('loading'), startWith(true));

    this.sourceSuggestions$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'sourceSuggestions', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

      this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef?.refetch({
      citationId: this.citationIdInput ? +this.citationIdInput : undefined,
      sourceType: this.sourceTypeInput ? this.sourceTypeInput : undefined,
      sourceId: this.sourceIdInput ? +this.sourceIdInput : undefined,
      geneName: this.geneNameInput,
      variantName: this.variantNameInput,
      diseaseName: this.diseaseNameInput,
      comment: this.commentInput,
      submitter: this.submitterInput,
      citation: this.citationInput
    })
  }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef?.refetch({sortBy: buildSortParams(e)})
  }

  onModelChanged() {
    this.debouncedQuery.next()
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({
      variables: {
        first: this.pageSize,
        after: cursor
      }
    });
  }
}
