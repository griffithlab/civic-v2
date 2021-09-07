import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import {
  AddCommentGQL,
  AddCommentInput,
  AddCommentMutation,
} from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

import { entityTypeToTypename } from '@app/core/utilities/entitytype-to-typename';
import { catchError, finalize, pluck, startWith, takeUntil, tap } from 'rxjs/operators';
import { GraphQLError } from 'graphql';

@Injectable({
  providedIn: 'root'
})
export class CommentAddService implements OnDestroy {
  private storeObj!: StoreObject;
  result$!: Observable<FetchResult<AddCommentMutation>>;
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(private addCommentGQL: AddCommentGQL, private logger: NGXLogger) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  addComment(addCommentInput: AddCommentInput): void {
    this.storeObj = {
      id: addCommentInput.subject.id,
      __typename: entityTypeToTypename(addCommentInput.subject.entityType)
    };

    this.isSubmitting$.next(true);

    this.addCommentGQL.mutate(
      { input: addCommentInput },
      {
        update: (cache: ApolloCache<any>, { data: { addComment } }: FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.storeObj),
            fields: {
              comments(existingCommentRefs = []) {
                const newEdge = {
                  __typeName: 'CommentEdge',
                  node: {
                    __ref: cache.identify(addComment.comment)
                  }
                };

                return {
                  ...existingCommentRefs,
                  totalCount: existingCommentRefs.totalCount + 1,
                  edges: [
                    ...existingCommentRefs.edges,
                    newEdge
                  ]
                }
              },
            },
          });
        }
      })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => { this.isSubmitting$.next(false); }))
      .subscribe({
        error: (error: ApolloError): void => {
          this.submitError$.next(error.graphQLErrors.map(e => e.message));
        },
        complete: (): void => {
          this.submitError$.next([]);
          this.submitSuccess$.next(true);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
