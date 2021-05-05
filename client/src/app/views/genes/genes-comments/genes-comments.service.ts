import { Injectable } from '@angular/core';
import { ApolloQueryResult, ApolloError } from '@apollo/client/core';
import { CommentListService } from '@app/components/shared/comment-list/comment-list.component';
import {
  Maybe,
  CommentableInput,
  CommentEdge,
  GeneCommentsGQL,
  GeneCommentsQuery,
  GeneCommentsQueryVariables,
  CommentableEntities
} from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { GraphQLError } from 'graphql';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

@Injectable()
export class GenesCommentsService implements CommentListService {
  subject!: CommentableInput;
  queryRef!: QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables>;
  result$!: Observable<ApolloQueryResult<GeneCommentsQuery>>;

  comments$: Maybe<Observable<CommentEdge[]>>;
  isLoading$!: Observable<boolean>;
  queryErrors$!: Observable<Maybe<ReadonlyArray<GraphQLError>>>;
  networkError$!: Observable<Maybe<ApolloError>>;

  constructor(private gql: GeneCommentsGQL, private log: NGXLogger) { }

  watch(vars: GeneCommentsQueryVariables): QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables> {
    this.subject = { id: vars.geneId, entityType: CommentableEntities['Gene'] };
    this.queryRef = this.gql.watch(vars);
    this.result$ = this.queryRef.valueChanges;

    this.isLoading$ = this.result$
      .pipe(pluck('loading'), startWith(true));

    this.queryErrors$ = this.result$
      .pipe(pluck('errors'));

    this.networkError$ = this.result$
      .pipe(pluck('error'));

    this.comments$ = this.result$
      .pipe(pluck('data', 'gene', 'comments', 'edges'));

    return this.queryRef;
  }
}
