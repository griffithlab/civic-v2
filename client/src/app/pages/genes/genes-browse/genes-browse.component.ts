import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { shareReplay, pluck } from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import { NGXLogger } from 'ngx-logger';

import { GenesBrowseService } from './genes.browse.service';
import {
  Gene,
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
export class GenesBrowseComponent implements OnInit {
  source$: QueryRef<any>;
  pageInfo$: Observable<any>;
  genes$: Observable<any>;
  pageSize = 25;
  endCursor = '';

  constructor(private api: GenesBrowseService, private logger: NGXLogger) {
    const initialQueryArgs: QueryBrowseGenesArgs = { first: this.pageSize }

    this.source$ = this.api.watchGenesBrowse(initialQueryArgs);
    this.genes$ = this.source$
      .valueChanges
      .pipe(shareReplay(1),
            pluck('data', 'browseGenes', 'nodes'));

    this.pageInfo$ = this.source$
      .valueChanges
      .pipe(shareReplay(1),
            pluck('data', 'browseGenes', 'pageInfo'));

    this.pageInfo$.subscribe((info) => {this.endCursor = info.endCursor})
  }

  loadMore():void {
    this.source$.fetchMore({
      variables: {
        first: this.pageSize,
        after: this.endCursor
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult) return prev;

        return Object.assign({}, prev, {
          genes$: [...prev.genes$, ...fetchMoreResult.genes$],
        });
      },
      // updateQuery(prev, {fetchMoreResult}) => {
      //   if (!fetchMoreResult) return prev;
      //   return Object.assign({}, prev, {
      //     genes$: [...prev.genes$, ...fetchMoreResult.genes$],
      //   });
      // }
    });
  }

  ngOnInit(): void {
    this.logger.trace('GenesBrowseComponent initialized.');
  }
}
