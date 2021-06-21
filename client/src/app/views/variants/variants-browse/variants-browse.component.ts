import { Component, OnDestroy } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  BrowseVariantsGQL,
  BrowseVariantsQuery,
  Maybe,
  PageInfo,
  QueryBrowseVariantsArgs,
  VariantsSortColumns,
} from '@app/generated/civic.apollo';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/shared/utilities/datatable-helpers';
import { QueryRef } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { map, pluck, startWith, debounceTime } from 'rxjs/operators';

export interface VariantTableRow {
  id: number;
  name: string;
  geneName: string;
  evidenceScore: number;
  evidenceItemCount: number;
  assertionCount: number;
  diseases: WithName[];
  drugs: WithName[];
}

@Component({
  selector: 'cvc-variants-browse',
  templateUrl: './variants-browse.component.html',
  styleUrls: ['./variants-browse.component.less'],
})
export class VariantsBrowseComponent implements OnDestroy {
  private initialQueryArgs: QueryBrowseVariantsArgs;
  private debouncedQuery = new Subject<void>();

  queryRef: QueryRef<BrowseVariantsQuery, QueryBrowseVariantsArgs>;
  data$: Observable<ApolloQueryResult<BrowseVariantsQuery>>;
  isLoading$: Observable<boolean>;
  variants$: Observable<Maybe<VariantTableRow>[]>;
  totalCount$: Observable<number>;
  pageCount$: Observable<number>;
  pageInfo$: Observable<PageInfo>;

  variantNameInput: Maybe<string>;
  geneSymbolInput: Maybe<string>;
  diseaseNameInput: Maybe<string>;
  drugNameInput: Maybe<string>;

  initialPageSize = 25;
  sortColumns: typeof VariantsSortColumns = VariantsSortColumns;

  constructor(private query: BrowseVariantsGQL) {
    this.initialQueryArgs = {
      first: this.initialPageSize,
    };

    this.queryRef = this.query.watch(this.initialQueryArgs);

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus,
        };
      })
    );

    this.isLoading$ = this.data$.pipe(pluck('loading'), startWith(true));

    this.variants$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'edges'),
      map((edges) => {
        return edges.map((e) => e.node);
      })
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageInfo')
    );

    this.totalCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'totalCount'),
      startWith(0)
    );

    this.pageCount$ = this.data$.pipe(
      pluck('data', 'browseVariants', 'pageCount'),
      startWith(0)
    );

    this.debouncedQuery
      .pipe(debounceTime(500))
      .subscribe((_) => {
        this.queryRef.refetch({
          variantName: this.variantNameInput,
          entrezSymbol: this.geneSymbolInput,
          diseaseName: this.diseaseNameInput,
          drugName: this.drugNameInput,
        });
      });
  }

  onSortChanged(e: SortDirectionEvent) {
    this.queryRef.refetch({
      ...this.initialQueryArgs,
      sortBy: buildSortParams(e),
    });
  }

  onModelUpdated(_: Maybe<string>) {
    this.debouncedQuery.next();
  }

  ngOnDestroy() {
    this.debouncedQuery.unsubscribe();
  }
}