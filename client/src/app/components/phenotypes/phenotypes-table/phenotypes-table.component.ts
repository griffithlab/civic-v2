import { Component, OnDestroy, OnInit } from '@angular/core';
import { Maybe, PageInfo, PhenotypeBrowseTableRowFieldsFragment, PhenotypesBrowseGQL, PhenotypesBrowseQuery, PhenotypesBrowseQueryVariables, PhenotypeSortColumns } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/core/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-phenotypes-table',
  templateUrl: './phenotypes-table.component.html',
  styleUrls: ['./phenotypes-table.component.less']
})
export class CvcPhenotypesTableComponent implements OnInit {

  private initialPageSize = 25
  private queryRef?: QueryRef<PhenotypesBrowseQuery, PhenotypesBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  phenotypes$?: Observable<Maybe<PhenotypeBrowseTableRowFieldsFragment>[]>

  hpoIdFilter: Maybe<string>
  hpoNameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof PhenotypeSortColumns = PhenotypeSortColumns

  constructor(private gql: PhenotypesBrowseGQL) {}

  ngOnInit() {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    })

    let observable = this.queryRef.valueChanges

    this.phenotypes$ = observable.pipe(
      pluck('data', 'phenotypes', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    )

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'phenotypes', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'phenotypes', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
   }

   onModelChanged() { this.debouncedQuery.next() }

   onSortChanged(e: SortDirectionEvent) {
     this.queryRef?.refetch({
       sortBy: buildSortParams(e)
     })
   }

   refresh() {
     this.queryRef?.refetch({
       name: this.hpoNameFilter,
       hpoId: this.hpoIdFilter
     })
   }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef?.fetchMore({
      variables: { after: cursor }
    })
  }

}
