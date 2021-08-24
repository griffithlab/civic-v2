import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {
  SuggestVariantRevisionInput,
  SuggestVariantRevisionGQL,
  SuggestVariantRevisionMutation
} from '@app/generated/civic.apollo';

import { entityTypeToTypename } from '@app/core/utilities/entitytype-to-typename';
import { finalize, takeUntil } from 'rxjs/operators';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

@Injectable()
export class VariantReviseService implements OnDestroy {
  private storeObj!: StoreObject;
  result$!: Observable<FetchResult<SuggestVariantRevisionMutation>>;
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(
    private suggestVariantRevisionGQL: SuggestVariantRevisionGQL,
    private networkError: NetworkErrorsService) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  suggest(suggestVariantRevisionInput: SuggestVariantRevisionInput): void {
    this.storeObj = {
      id: suggestVariantRevisionInput.id,
      __typename: entityTypeToTypename('Variant')
    };

    this.isSubmitting$.next(true);

    this.suggestVariantRevisionGQL.mutate(
      { input: suggestVariantRevisionInput },
      {
        update: (cache: ApolloCache<any>, { data: { suggestVariantRevision } }: FetchResult<any>) => {
          cache.modify({
            id: cache.identify(this.storeObj),
            fields: {
              revisions(existingRevisionConnection = []) {
                // const newConnection = {
                //   __typeName: 'RevisionConnection',
                //   node: {
                //     __ref: cache.identify(suggestVariantRevision.variant.revisions)
                //   }
                // };

                return suggestVariantRevision.variant.revisions

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
          if(error.graphQLErrors.length > 0) {
            this.submitError$.next(error.graphQLErrors.map(e => e.message));
          } else if (error.networkError) {
            this.networkError.networkError$.next(error.networkError);
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
