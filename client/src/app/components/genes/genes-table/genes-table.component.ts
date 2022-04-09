import { Component, Input, OnInit, TemplateRef, } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  map,
  pluck,
  startWith,
  take,
} from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import {
  BrowseGenesGQL,
  QueryBrowseGenesArgs,
  PageInfo,
  Maybe,
  BrowseGenesQuery,
  GenesSortColumns,
} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';
import { buildSortParams, SortDirectionEvent, WithName } from '@app/core/utilities/datatable-helpers';

export interface GeneTableRow {
  id: number
  entrezId: number
  name: string
  aliases?: Maybe<WithName[]>
  diseases?: Maybe<WithName[]>
  drugs?: Maybe<WithName[]>
  variantCount: number
  evidenceItemCount: number
  assertionCount: number
}

@Component({
  selector: 'cvc-genes-table',
  templateUrl: './genes-table.component.html',
  styleUrls: ['./genes-table.component.less']
})
export class CvcGenesTableComponent implements OnInit {
  @Input() cvcTitleTemplate: Maybe<TemplateRef<void>>
  @Input() cvcTitle: Maybe<string>

  private initialQueryArgs?: QueryBrowseGenesArgs
  private debouncedQuery = new Subject<void>();

  queryRef?: QueryRef<BrowseGenesQuery,QueryBrowseGenesArgs>;
  data$?: Observable<ApolloQueryResult<BrowseGenesQuery>>;
  genes$?: Observable<Maybe<GeneTableRow>[]>;
  isLoading$?: Observable<boolean>;
  filteredCount$?: Observable<number>
  pageCount$?: Observable<number>;
  pageInfo$?: Observable<PageInfo>;

  diseaseInput: Maybe<string>
  drugInput: Maybe<string>
  nameInput: Maybe<string>
  aliasInput: Maybe<string>

  sortColumns: typeof GenesSortColumns = GenesSortColumns

  totalCount?: number
  initialPageSize = 25;
  fetchMorePageSize = 25;

  visibleCount: number = this.initialPageSize
  loadedPages: number = 1

  constructor(private query: BrowseGenesGQL) { }

  ngOnInit() {
    this.initialQueryArgs = {
      first: this.initialPageSize
    }

    this.queryRef = this.query.watch(this.initialQueryArgs);

    this.data$ = this.queryRef.valueChanges.pipe(
      map((r) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));

    // loading$ includes a startsWith(true) operator to force an initial value
    // as the apollo-angular client does not emit this by default
    // and the code-generated angular service does not provide a means to pass
    // a `useInitialLoading` option.
    // See: https://github.com/kamilkisiela/apollo-angular/issues/1189
    // and keep an eye on: https://github.com/dotansimha/graphql-code-generator/discussions/5729
    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true),
    );

    this.genes$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'edges'),
      map((edges) => {
        return edges.map((e) => { return e.node; })
      } ),
    );

    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'pageInfo')
    );

    this.filteredCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'filteredCount')
    )

    this.data$.pipe(
      pluck('data', 'browseGenes', 'totalCount')
    ).pipe(take(1)).subscribe(value => this.totalCount = value);

    this.filteredCount$.subscribe(
      value => {
        if (value < this.initialPageSize) {
          this.visibleCount = value
        }
        else {
          this.visibleCount = this.initialPageSize + this.fetchMorePageSize * (this.loadedPages - 1)
          if (this.visibleCount > value) {
            this.visibleCount = value
          }
        }
      }
    )

    this.pageCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'pageCount'),
      startWith(0),
    );

    this.debouncedQuery
    .pipe(debounceTime(500))
    .subscribe((_) => {
      this.loadedPages = 1
      this.queryRef?.refetch({
        entrezSymbol: this.nameInput,
        geneAlias: this.aliasInput,
        diseaseName: this.diseaseInput,
        drugName: this.drugInput,
      });
    });
  }

  loadMore(afterCursor: Maybe<string>):void {
    this.queryRef?.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });

    this.loadedPages += 1
  }

  onSortChanged(e: SortDirectionEvent) {
    this.loadedPages = 1
    this.queryRef?.refetch({
      ...this.initialQueryArgs,
      sortBy: buildSortParams(e),
    });
  }

  onModelUpdated(_: Maybe<string>) {
    this.debouncedQuery.next();
  }
}
