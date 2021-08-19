import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import {
  SuggestVariantRevisionInput,
  SuggestVariantRevisionGQL,
  SuggestVariantRevisionPayload,
  SuggestVariantRevisionMutation
} from '@app/generated/civic.apollo';

import { NGXLogger } from 'ngx-logger';

import { entityTypeToTypename } from '@app/shared/utilities/entitytype-to-typename';
import { catchError, finalize, pluck, startWith, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VariantSuggestRevisionService implements OnDestroy {
  private storeObj!: StoreObject;
  result$!: Observable<FetchResult<SuggestVariantRevisionMutation>>;
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(
    private suggestVariantRevisionGQL: SuggestVariantRevisionGQL, private logger: NGXLogger) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  suggestRevision(suggestVariantRevisionInput: SuggestVariantRevisionInput): void {
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
