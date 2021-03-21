import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { Observable, Subject } from 'rxjs';
import {
  map,
  pluck,
  shareReplay,
  startWith,
  takeUntil,
  tap,
} from 'rxjs/operators';

import { NzTableComponent } from 'ng-zorro-antd/table';

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
  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<BrowseGene>;

  private destroy$ = new Subject();

  queryRef: QueryRef<any>;
  data$!: Observable<any>;
  genes$!: Observable<any>;
  isLoading$!: Observable<boolean>;
  totalCount$!: Observable<number>;
  totalPageCount$!: Observable<number>;
  pageInfo$!: Observable<PageInfo>;

  initialPageSize = 3;
  fetchMorePageSize= 3;

  startCursor: string | null | undefined;
  endCursor: string | null | undefined;
  hasPreviousPage: boolean | null | undefined;
  hasNextPage: boolean | null | undefined;

  spy: any;

  constructor(private query: BrowseGenesGQL, private logger: NGXLogger) {
    this.spy = create();

    const initialQueryArgs: QueryBrowseGenesArgs = {
      first: this.initialPageSize
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
    // this.spy.log('isLoading$');
    this.isLoading$ = this.data$.pipe(
      pluck('loading'),
      startWith(true),
      tag('isLoading$'));

    this.spy.log('genes$');
    this.genes$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'edges'),
      map((edges) => { return edges.map((e: any): BrowseGene[] => { return e.node; }) } ),
      tag('genes$'));

    // this.spy.log('pageInfo$');
    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'pageInfo'),
      tap((info: PageInfo): void => {
        this.startCursor = info.startCursor;
        this.endCursor = info.endCursor;
        this.hasPreviousPage = info.hasPreviousPage;
        this.hasNextPage = info.hasNextPage;
      }),
      tag('pageInfo$'));

    // this.spy.log('totalCount$');
    this.totalCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'totalCount'),
      tag('totalCount$'));

    // this.spy.log('totalPageCount$');
    this.totalPageCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'totalPageCount'),
      tag('totalPageCount$'));

  }

  trackById(_: number, data: BrowseGene): number {
    return data.id;
  }

  loadMore():void {
    this.logger.trace('loadMore() called.');
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: this.endCursor
      },
      // updateQuery: (prev, { fetchMoreResult }) => {
      //   this.logger.debug(prev);
      //   this.logger.debug(fetchMoreResult);
      //   return {
      //     nodes: [...prev.nodes, ...fetchMoreResult.nodes],
      //     edges: [...prev.edges, ...fetchMoreResult.edges],
      //     pageInfo: fetchMoreResult.pageInfo
      //   };
      // },
    });
  }

  ngOnInit(): void {
    this.logger.trace('GenesBrowseComponent initialized.');
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
      console.log('scroll index to', data);
    });
  }

  ngOnDestroy(): void {
    this.spy.teardown();
    this.destroy$.next();
    this.destroy$.complete();
    this.logger.trace('GenesBrowseComponent destroyed.');
  }
}
