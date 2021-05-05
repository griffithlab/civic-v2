import { Injectable } from '@angular/core';
import { ApolloQueryResult, ApolloError } from '@apollo/client/core';
import { CommentListService } from '@app/components/shared/comment-list/comment-list.component';
import {
  Maybe,
  CommentableInput,
  CommentEdge,
  GeneCommentsGQL,
  GeneCommentsQuery,
  GeneCommentsQueryVariables
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

  watch(): Maybe<QueryRef<GeneCommentsQuery, GeneCommentsQueryVariables>> {
    if(this.subject !== undefined) {
      this.queryRef = this.gql.watch({ geneId: this.subject.id });
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
    } else {
      this.log.error('CommentableInput `subject` must be set before calling watch().')
      return undefined;
    }
  }
}
