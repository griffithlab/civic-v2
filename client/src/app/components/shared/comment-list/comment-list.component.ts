import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';

import {
  Maybe,
  CommentableInput,
  CommentEdge,
  Exact,
  PageInfo,
} from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

import { NGXLogger } from 'ngx-logger';

export interface CommentListService<Query, QueryVariables> {
  subject: CommentableInput,
  queryRef: QueryRef<Query, QueryVariables>,
  result$: Observable<ApolloQueryResult<Query>>,
  comments$: Maybe<Observable<CommentEdge[]>>,
  isLoading$: Observable<boolean>,
  queryErrors$: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$: Observable<Maybe<ApolloError>>;
  pageInfo$: Observable<PageInfo>,
  watch(vars: Exact<{
    geneId: number;
    first?: number;
    last?: number;
    before?: string;
    after?: string;
  }>): QueryRef<any, any>,
  fetchMore(): void;
}

@Component({
  selector: 'cvc-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.less']
})

export class CommentListComponent<Query, QueryVariables> implements OnInit {
  @Input() commentsService!: CommentListService<Query, QueryVariables>;
  viewer: ViewerService;
  private log: NGXLogger;

  constructor(viewerService: ViewerService, private logger: NGXLogger) {
    this.viewer = viewerService;
    this.log = logger;
  }

  onLoadMore(): void {
    this.log.trace('onLoadMore() called')
    this.commentsService.fetchMore()
  }

  ngOnInit(): void {
  }
}
