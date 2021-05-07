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
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, pluck, shareReplay, startWith, takeUntil, tap } from 'rxjs/operators';

// logging, debugging
import { NGXLogger } from 'ngx-logger';
import { Spy } from 'rxjs-spy/cjs/spy-interface'; // debug
import { create } from "rxjs-spy"; // debug
import { tag } from "rxjs-spy/operators/tag"; // debug

@Injectable()
export class GenesCommentsService implements CommentListService<GeneCommentsQuery, GeneCommentsQueryVariables>, OnDestroy {
  private spy: Spy;

  subject!: CommentableInput;
  queryRef!: QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables>;
  result$!: Observable<ApolloQueryResult<GeneCommentsQuery>>;

  comments$: Maybe<Observable<CommentEdge[]>>;
  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  pageInfo$!: Observable<PageInfo>;
  pageInfo!: PageInfo;

  private pageInfoSubject$!: BehaviorSubject<PageInfo>;
  private initialListSize=  5;
  private fetchMoreSize = 5;
  private destroy$ = new Subject();

  constructor(private gql: GeneCommentsGQL, private log: NGXLogger) {
    this.spy = create(); // debug
  }

  watch(vars: GeneCommentsQueryVariables): QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables> {
    const initialQueryVars: GeneCommentsQueryVariables = {
      geneId: vars.geneId,
      last: vars.last ? vars.last : this.initialListSize,
      before: vars.before ? vars.before : undefined
    }

    this.queryRef = this.gql.watch(initialQueryVars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.pageInfo$ = this.result$
      .pipe(pluck('data', 'gene', 'comments', 'pageInfo'));

    // provide static local pageInfo
    this.pageInfo$
      .pipe(takeUntil(this.destroy$), shareReplay(1))
      .subscribe((info: PageInfo) => { this.pageInfo = info; });

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.spy.log('comments$'); // debug
    this.comments$ = this.result$
      .pipe(
        map(({ data }) => { return data.gene?.comments.edges as CommentEdge[]  }),
        shareReplay(1));

    this.comments$.pipe(takeUntil(this.destroy$),tag('comments$')).subscribe(); // debug

    this.subject = { id: vars.geneId, entityType: CommentableEntities['Gene'] };

    return this.queryRef;
  }

  fetchMore(): void {
    this.queryRef.fetchMore({
      variables: <GeneCommentsQueryVariables>{
        last: this.fetchMoreSize,
        before: this.pageInfo.startCursor
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.spy.teardown();
  }
}
