import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';
import {
  map,
  pluck,
  startWith,
} from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import {
  BrowseGenesGQL,
  QueryBrowseGenesArgs,
  PageInfo,
  Maybe,
  BrowseGenesQuery,
} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';

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

export interface WithName {
  name: string
}

@Component({
  selector: 'genes-browse',
  templateUrl: './genes-browse.component.html',
  styleUrls: ['./genes-browse.component.less'],
})
export class GenesBrowseComponent implements OnInit {

  queryRef: QueryRef<BrowseGenesQuery,QueryBrowseGenesArgs>;
  data$: Observable<ApolloQueryResult<BrowseGenesQuery>>;
  genes$: Observable<Maybe<GeneTableRow>[]>;
  isLoading$: Observable<boolean>;
  totalCount$: Observable<number>;
  pageCount$: Observable<number>;
  pageInfo$: Observable<PageInfo>;

  initialPageSize = 25;
  fetchMorePageSize = 25;

  constructor(private query: BrowseGenesGQL) {
    const initialQueryArgs: QueryBrowseGenesArgs = {
      first: this.initialPageSize
    }

    this.queryRef = this.query.watch(initialQueryArgs);

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

    this.totalCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'totalCount'),
      startWith(0),
    );

    this.pageCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'pageCount'),
      startWith(0),
    );
  }

  loadMore(afterCursor: Maybe<string>):void {
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: afterCursor
      },
    });
  }

  ngOnInit(): void {
  }
}
