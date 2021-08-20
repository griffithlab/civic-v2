import { Component, OnDestroy, OnInit } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseVariantGroupRowFieldsFragment, BrowseVariantGroupsGQL, BrowseVariantGroupsQuery, Maybe, PageInfo, QueryBrowseVariantGroupsArgs, VariantGroupsSortColumns } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/core/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-variant-groups-table',
  templateUrl: './variant-groups-table.component.html',
  styleUrls: ['./variant-groups-table.component.less']
})
export class CvcVariantGroupsTableComponent implements OnInit {

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseVariantGroupsQuery, QueryBrowseVariantGroupsArgs>;
  data$?: Observable<ApolloQueryResult<BrowseVariantGroupsQuery>>;
  isLoading$?: Observable<boolean>;
  variantGroups$?: Observable<Maybe<BrowseVariantGroupRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;

  textInputCallback?: () => void

  //filters
  nameInput: Maybe<string>
  geneNameInput: Maybe<string>
  variantNameInput: Maybe<string>

  pageSize = 25
  sortColumns: typeof VariantGroupsSortColumns = VariantGroupsSortColumns

  constructor(private gql: BrowseVariantGroupsGQL) {}

  ngOnInit() {
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

    this.variantGroups$ = this.data$.pipe(
      pluck('data', 'browseVariantGroups', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseVariantGroups', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

      this.textInputCallback = () => { this.debouncedQuery.next(); }
  }

  refresh() {
    this.queryRef?.refetch({
      name: this.nameInput,
      geneNames: this.geneNameInput,
      variantNames: this.variantNameInput
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
