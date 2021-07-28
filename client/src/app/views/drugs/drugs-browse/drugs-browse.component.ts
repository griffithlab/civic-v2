import { Component, OnDestroy, OnInit } from '@angular/core';
import { Maybe, PageInfo, DrugBrowseTableRowFieldsFragment, DrugsBrowseGQL, DrugsBrowseQuery, DrugsBrowseQueryVariables, DrugSortColumns } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { startWith, pluck, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cvc-drugs-browse',
  templateUrl: './drugs-browse.component.html',
  styleUrls: ['./drugs-browse.component.less']
})
export class DrugsBrowseComponent implements OnDestroy {

  private initialPageSize = 25
  private queryRef: QueryRef<DrugsBrowseQuery, DrugsBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  drugs$?: Observable<Maybe<DrugBrowseTableRowFieldsFragment>[]>

  ncitIdFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof DrugSortColumns = DrugSortColumns

  constructor(private gql: DrugsBrowseGQL) {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    })

    let observable = this.queryRef.valueChanges

    this.drugs$ = observable.pipe(
      pluck('data', 'drugs', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    )

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'drugs', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'drugs', 'pageInfo')
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => this.refresh() );

    this.textInputCallback = () => { this.debouncedQuery.next(); }
   }

   onModelChanged() { this.debouncedQuery.next() }

   onSortChanged(e: SortDirectionEvent) {
     this.queryRef.refetch({
       sortBy: buildSortParams(e)
     })
   }

   refresh() {
     this.queryRef.refetch({
       name: this.nameFilter,
       ncitId: this.ncitIdFilter
     })
   }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({variables: {
      after: cursor
    }})
  }

}
