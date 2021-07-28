import { Component, Input, OnDestroy  } from '@angular/core';
import { Maybe, PageInfo, VariantTypeBrowseTableRowFieldsFragment, VariantTypesBrowseGQL, VariantTypesBrowseQuery, VariantTypesBrowseQueryVariables, VariantTypeSortColumns } from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map, pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'cvc-variant-types-browse',
  templateUrl: './variant-types-browse.component.html',
  styleUrls: ['./variant-types-browse.component.less']
})
export class VariantTypesBrowseComponent implements OnDestroy {
  private initialPageSize = 25
  private queryRef: QueryRef<VariantTypesBrowseQuery, VariantTypesBrowseQueryVariables>
  private debouncedQuery = new Subject<void>();

  isLoading$?: Observable<boolean>
  totalCount$?: Observable<number>
  pageInfo$?: Observable<PageInfo>
  variantTypes$?: Observable<Maybe<VariantTypeBrowseTableRowFieldsFragment>[]>

  soidFilter: Maybe<string>
  nameFilter: Maybe<string>

  textInputCallback?: () => void

  sortColumns: typeof VariantTypeSortColumns = VariantTypeSortColumns

  constructor(private gql: VariantTypesBrowseGQL) {
    this.queryRef = this.gql.watch({
      first: this.initialPageSize
    })

    let observable = this.queryRef.valueChanges

    this.variantTypes$ = observable.pipe(
      pluck('data', 'variantTypes', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node)
      })
    )

    this.isLoading$ = observable.pipe(
      pluck('loading'), startWith(true)
    );

    this.totalCount$ = observable.pipe(
      pluck('data', 'variantTypes', 'totalCount')
    )

    this.pageInfo$ = observable.pipe(
      pluck('data', 'variantTypes', 'pageInfo')
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
       soid: this.soidFilter
     })
   }

  ngOnDestroy() { this.debouncedQuery.unsubscribe(); }

  loadMore(cursor: Maybe<string>) {
    this.queryRef.fetchMore({
      variables: { after: cursor }
    })
  }
}
