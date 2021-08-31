import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {
  SuggestGeneRevisionInput,
  SuggestGeneRevisionGQL,
  SuggestGeneRevisionMutation
} from '@app/generated/civic.apollo';

import { entityTypeToTypename } from '@app/core/utilities/entitytype-to-typename';
import { finalize, takeUntil } from 'rxjs/operators';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

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
    private suggestGeneRevisionGQL: SuggestGeneRevisionGQL,
    private networkErrorService: NetworkErrorsService,
  ) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  suggest(suggestGeneRevisionInput: SuggestGeneRevisionInput): void {
    this.storeObj = {
      id: suggestGeneRevisionInput.id,
      __typename: entityTypeToTypename('Gene')
    };

    this.isSubmitting$.next(true);

    this.suggestGeneRevisionGQL.mutate(
      { input: suggestGeneRevisionInput },
      {
        update: (cache: ApolloCache<any>, { data: { suggestGeneRevision } }: FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.storeObj),
            fields: {
              revisions(existingRevisionConnection = []) {
                // const newConnection = {
                //   __typeName: 'RevisionConnection',
                //   node: {
                //     __ref: cache.identify(suggestGeneRevision.gene.revisions)
                //   }
                // };

                return suggestGeneRevision.gene.revisions

                // return {
                //   ...existingRevisionConnection,
                //   edges: [
                //     ...existingRevisionConnection.edges,
                //   ]
                // }
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
          if (error.graphQLErrors.length > 0) {
            this.submitError$.next(error.graphQLErrors.map(e => e.message));
          } else if (error.networkError) {
            this.networkErrorService.networkError$.next(error.networkError);
          }
        },
        complete: (): void => {
          this.submitError$.next([]);
          this.submitSuccess$.next(true);
        }
      });
  }

  cleanup(): void {
    this.submitError$.next([]);
    this.submitSuccess$.next(false);
    this.isSubmitting$.next(false);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
