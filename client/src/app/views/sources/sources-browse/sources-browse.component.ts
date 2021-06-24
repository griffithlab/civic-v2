import { Component, OnDestroy } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseSourceRowFieldsFragment, BrowseSourcesGQL, BrowseSourcesQuery, Maybe, PageInfo, QueryBrowseSourcesArgs, SourceSource, SourcesSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/shared/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-sources-browse',
  templateUrl: './sources-browse.component.html',
  styleUrls: ['./sources-browse.component.less'],
})
export class SourcesBrowseComponent implements OnDestroy {

  private debouncedQuery = new Subject<void>();

  queryRef: QueryRef<BrowseSourcesQuery, QueryBrowseSourcesArgs>;
  data$: Observable<ApolloQueryResult<BrowseSourcesQuery>>;
  isLoading$: Observable<boolean>;
  sources$: Observable<Maybe<BrowseSourceRowFieldsFragment>[]>;
  pageInfo$: Observable<PageInfo>;

  textInputCallback?: () => void

  //filters
  citationIdInput: Maybe<string>
  authorInput: Maybe<string>
  yearInput: Maybe<string>
  journalInput: Maybe<string>
  nameInput: Maybe<string>
  sourceTypeInput: Maybe<SourceSource>


  pageSize = 25
  sortColumns: typeof SourcesSortColumns = SourcesSortColumns

  constructor(private gql: BrowseSourcesGQL) {
    this.queryRef = this.gql.watch({ first: this.pageSize })

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

    this.sources$ = this.data$.pipe(
      pluck('data', 'browseSources', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseSources', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

      this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef.refetch({
      citationId: this.citationIdInput ? +this.citationIdInput : undefined, 
      author: this.authorInput,
      year: this.yearInput ? +this.yearInput : undefined,
      journal: this.journalInput,
      name: this.nameInput,
      sourceType: this.sourceTypeInput
    })
  }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({sortBy: buildSortParams(e)})
  }

  onModelChanged() {
    this.debouncedQuery.next()
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: cursor
      }
    });
  }
}