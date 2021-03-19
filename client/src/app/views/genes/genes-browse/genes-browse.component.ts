import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';
import {
  shareReplay,
  pluck,
  map,
  tap,
  startWith,
} from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import { NGXLogger } from 'ngx-logger';
import { create } from "rxjs-spy";
import { tag } from "rxjs-spy/operators/tag";

// import { GenesBrowseService } from './genes.browse.service';

import {
  BrowseGenesGQL,
  BrowseGene,
  GenesSortColumns,
  QueryBrowseGenesArgs,
  SortDirection,
  PageInfo,
} from '@app/generated/civic.apollo';

@Component({
  selector: 'genes-browse',
  templateUrl: './genes-browse.component.html',
  styleUrls: ['./genes-browse.component.less'],
})

export class GenesBrowseComponent implements OnInit, OnDestroy {
  queryRef: QueryRef<any>;
  data$!: Observable<any>;
  genes$!: Observable<BrowseGene[]>;
  isLoading$!: Observable<boolean>;
  totalGenes$!: Observable<number>;
  pageInfo$!: Observable<PageInfo>;

  pageSize = 15;

  spy: any;

  constructor(private query: BrowseGenesGQL, private logger: NGXLogger) {
    this.spy = create();

    const initialQueryArgs: QueryBrowseGenesArgs = {
      first: this.pageSize
    }

    this.queryRef = this.query.watch(initialQueryArgs);

    // this.spy.log('data$');
    this.data$ = this.queryRef.valueChanges.pipe(
      tag('data$'),
      map((r: any) => {
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
    this.spy.log('isLoading$');
    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true),
      tag('isLoading$'));

    // this.spy.log('genes$');
    this.genes$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'nodes'),
      tag('genes$'));

  }

  loadMore():void {
    this.logger.trace('loadMore() called.');
    // this.queryRef.fetchMore({
    //   variables: {
    //     first: this.pageSize,
    //     after: this.endCursor
    //   }
    // });
  }

  ngOnInit(): void {
    this.logger.trace('GenesBrowseComponent initialized.');
  }

  ngOnDestroy(): void {
    this.spy.teardown();
    this.logger.trace('GenesBrowseComponent destroyed.');
  }
}
