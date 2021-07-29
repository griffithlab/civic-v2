import { Component, OnDestroy, OnInit } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { BrowseDiseaseRowFieldsFragment, BrowseDiseasesGQL, BrowseDiseasesQuery, BrowseVariantGroupsGQL, DiseasesSortColumns, Maybe, PageInfo, QueryBrowseDiseasesArgs } from "@app/generated/civic.apollo";
import { buildSortParams, SortDirectionEvent } from "@app/shared/utilities/datatable-helpers";
import { QueryRef } from "apollo-angular";
import { Subject, Observable } from "rxjs";
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-diseases-browse',
  templateUrl: './diseases-browse.component.html',
  styleUrls: ['./diseases-browse.component.less'],
})
export class DiseasesBrowseComponent implements OnDestroy, OnInit {

  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseDiseasesQuery, QueryBrowseDiseasesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseDiseasesQuery>>;
  isLoading$?: Observable<boolean>;
  diseases$?: Observable<Maybe<BrowseDiseaseRowFieldsFragment>[]>;
  pageInfo$?: Observable<PageInfo>;

  textInputCallback?: () => void

  //filters
  nameInput: Maybe<string>
  geneNameInput: Maybe<string>
  doidInput: Maybe<string>

  pageSize = 25
  sortColumns: typeof DiseasesSortColumns = DiseasesSortColumns

  constructor(private gql: BrowseDiseasesGQL) {}

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

    this.diseases$ = this.data$.pipe(
      pluck('data', 'browseDiseases', 'edges'),
      map((edges) => {
        return edges.map(e => e.node)
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseDiseases', 'pageInfo')
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
      doid: this.doidInput
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