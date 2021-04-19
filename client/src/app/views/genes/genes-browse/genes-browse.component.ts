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
  filter,
  map,
  pairwise,
  pluck,
  startWith,
  takeUntil,
  tap,
  throttleTime,
} from 'rxjs/operators';

import { NzTableComponent } from 'ng-zorro-antd/table';

import { QueryRef } from 'apollo-angular';

import { NGXLogger } from 'ngx-logger';

// import { GenesBrowseService } from './genes.browse.service';

import {
  BrowseGenesGQL,
  BrowseGene,
  BrowseGeneEdge,
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

export class GenesBrowseComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('genesTable', { static: false }) nzTableComponent?: NzTableComponent<BrowseGene>;

  // TODO: figure out why specifying this as CdkVirtualScrollViewport
  // causes type errors w/ viewport scrolling in ngAfterViewInit
  viewport!: any;

  queryRef: QueryRef<any>;
  data$!: Observable<any>;
  genes$!: Observable<any>;
  isLoading$: Observable<boolean>;
  totalCount$: Observable<number>;
  totalPageCount$!: Observable<number>;
  pageInfo$!: Observable<PageInfo>;

  initialPageSize = 25;
  fetchMorePageSize= 25;
  isLoadingDelay = 500;

  startCursor: string | null | undefined;
  endCursor: string | null | undefined;
  hasPreviousPage: boolean | null | undefined;
  hasNextPage: boolean | null | undefined;

  spy: any;

  // call in OnDestroy to clean up subscriptions
  private destroy$ = new Subject();

  constructor(private query: BrowseGenesGQL, private logger: NGXLogger) {
    const initialQueryArgs: QueryBrowseGenesArgs = {
      first: this.initialPageSize
    }

    this.queryRef = this.query.watch(initialQueryArgs);

    // this.spy.log('data$');
    this.data$ = this.queryRef.valueChanges.pipe(
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
    );

    // this.spy.log('genes$');
    this.genes$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'edges'),
      map((edges) => {
        // convert array of edges to array of BrowseGenes
        return edges.map((e: BrowseGeneEdge): BrowseGene => { return e.node as BrowseGene; })
      } ),
    );

    // this.spy.log('pageInfo$');
    this.pageInfo$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'pageInfo'),
      tap((info: PageInfo): void => {
        this.startCursor = info.startCursor;
        this.endCursor = info.endCursor;
        this.hasPreviousPage = info.hasPreviousPage;
        this.hasNextPage = info.hasNextPage;
      }),
    );

    // this.spy.log('totalCount$');
    this.totalCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'totalCount'),
      startWith(0),
    );

    // this.spy.log('totalPageCount$');
    this.totalPageCount$ = this.data$.pipe(
      pluck('data', 'browseGenes', 'totalPageCount'),
      startWith(0),
    );

  }

  trackById(_: number, data: BrowseGene): number {
    return data.id;
  }

  loadMore():void {
    this.queryRef.fetchMore({
      variables: {
        first: this.fetchMorePageSize,
        after: this.endCursor
      },
    });
  }

  ngOnInit(): void {
    this.logger.trace('GenesBrowseComponent initialized.');
  }

  ngAfterViewInit(): void {
    this.viewport = this.nzTableComponent?.cdkVirtualScrollViewport;

    this.viewport.elementScrolled()
      .pipe(
        takeUntil(this.destroy$),
        // measure pixels to bottom of viewport
        map(() => this.viewport.measureScrollOffset('bottom')),
        // pair with previous measurement
        pairwise(),
        // only pass events that indicate a scroll-down within 140px of bottom
        filter(([y1, y2]) => (y2 < y1 && y2 < 140)),
        // throttle events so we don't cause a lot of loadMore() requests
        throttleTime(this.isLoadingDelay),
      ).subscribe(() => {
          this.loadMore();
      });

    // this.spy.log('elementScrolled');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
