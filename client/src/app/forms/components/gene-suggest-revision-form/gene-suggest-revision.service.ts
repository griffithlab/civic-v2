import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import {
  SuggestGeneRevisionInput,
  SuggestGeneRevisionGQL,
  SuggestGeneRevisionPayload,
  SuggestGeneRevisionMutation
} from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

import { entityTypeToTypename } from '@app/shared/utilities/entitytype-to-typename';
import { catchError, finalize, pluck, startWith, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneSuggestRevisionService implements OnDestroy {
  private storeObj!: StoreObject;
  result$!: Observable<FetchResult<SuggestGeneRevisionMutation>>;
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(
    private suggestGeneRevisionGQL: SuggestGeneRevisionGQL, private logger: NGXLogger) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  suggestRevision(suggestGeneRevisionInput: SuggestGeneRevisionInput): void {
    this.storeObj = {
      id: suggestGeneRevisionInput.id,
      __typename: entityTypeToTypename('Gene')
    };

    this.isSubmitting$.next(true);

    this.suggestGeneRevisionGQL.mutate(
      { input: suggestGeneRevisionInput },
      {
        update: (cache: ApolloCache<any>, { data: { suggestGene } }: FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.storeObj),
            fields: {
              comments(existingCommentRefs = []) {
                const newEdge = {
                  __typeName: 'CommentEdge',
                  node: {
                    __ref: cache.identify(suggestGene.comment)
                  }
                };

                return {
                  ...existingCommentRefs,
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
