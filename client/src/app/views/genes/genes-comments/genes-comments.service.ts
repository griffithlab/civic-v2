import { Injectable, OnDestroy } from '@angular/core';
import { ApolloQueryResult, ApolloError, FetchMoreQueryOptions } from '@apollo/client/core';
import { CommentListService } from '@app/components/shared/comment-list/comment-list.component';
import {
  Maybe,
  CommentableInput,
  CommentEdge,
  GeneCommentsGQL,
  GeneCommentsQuery,
  GeneCommentsQueryVariables,
  CommentableEntities,
  CommentConnection,
  PageInfo
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { pluck, startWith, takeUntil, tap } from 'rxjs/operators';

@Injectable()
export class GenesCommentsService implements CommentListService, OnDestroy {
  subject!: CommentableInput;
  queryRef!: QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables>;
  result$!: Observable<ApolloQueryResult<GeneCommentsQuery>>;

  comments$: Maybe<Observable<CommentEdge[]>>;
  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  pageInfo$!: Observable<PageInfo>;

  private pageInfoSubject$!: BehaviorSubject<PageInfo>;
  private initialListSize=  5;
  private fetchMoreSize = 5;
  private destroy$ = new Subject();

  constructor(private gql: GeneCommentsGQL, private log: NGXLogger) {
  }

  watch(vars: GeneCommentsQueryVariables): QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables> {
    const initialQueryVars: GeneCommentsQueryVariables = {
      geneId: vars.geneId,
      last: vars.last ? vars.last : this.initialListSize
    }
    this.queryRef = this.gql.watch(initialQueryVars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.pageInfoSubject$ = new BehaviorSubject<PageInfo>(<PageInfo>{})

    this.pageInfo$ = this.result$
      .pipe(pluck('data', 'gene', 'comments', 'pageInfo'));

    // create pageInfo behavior subject to access syncronously in fetchMore()
    this.pageInfo$
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.pageInfoSubject$);

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.comments$ = this.result$
      .pipe(pluck('data', 'gene', 'comments', 'edges'));

    this.subject = { id: vars.geneId, entityType: CommentableEntities['Gene'] };

    return this.queryRef;
  }

  fetchMore(): void {
    this.queryRef.fetchMore({
      variables: <GeneCommentsQueryVariables>{
        last: this.fetchMoreSize,
        before: this.pageInfoSubject$.value.startCursor
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
