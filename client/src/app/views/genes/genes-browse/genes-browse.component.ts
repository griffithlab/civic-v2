import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay, pluck, map, tap } from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import { NGXLogger } from 'ngx-logger';

import { RxjsSpyService } from '@app/utilities/rxjs-spy.service';
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

  pageSize = 10;
  loading = false;

  constructor(private query: BrowseGenesGQL,
              private logger: NGXLogger,
              private spy: RxjsSpyService) {

    this.spy.log();

    const initialQueryArgs: QueryBrowseGenesArgs = { first: this.pageSize }

    this.queryRef = this.query.watch(initialQueryArgs);

    this.data$ = this.queryRef.valueChanges.pipe(
      tag('data$'),
      map((r: any) => {
        return {
          data: r.data,
          loading: r.loading,
          networkStatus: r.networkStatus
        };
      }));

    this.isLoading$ = this.data$.pipe(pluck('loading'), tag('isLoading$'));

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
    this.logger.trace('GenesBrowseComponent destroyed.');
  }
}
