
import { Injectable, OnDestroy } from '@angular/core';

import { ApolloCache, StoreObject } from '@apollo/client/cache';
import { ApolloError, FetchResult } from '@apollo/client/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import {
  SubmitEvidenceItemInput,
  SubmitEvidenceItemGQL,
  SubmitEvidenceItemMutation
} from '@app/generated/civic.apollo';

import { finalize, takeUntil } from 'rxjs/operators';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

@Injectable()
export class EvidenceItemSubmitService implements OnDestroy {
  result$!: Observable<FetchResult<SubmitEvidenceItemMutation>>;
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(
    private submitEvidenceItemGQL: SubmitEvidenceItemGQL,
    private networkErrorService: NetworkErrorsService) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  submit(submitEvidenceItemInput: SubmitEvidenceItemInput): void {
    this.isSubmitting$.next(true);

    this.submitEvidenceItemGQL.mutate({ input: submitEvidenceItemInput })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => { this.isSubmitting$.next(false); }))
      .subscribe({
        error: (error: ApolloError): void => {
          if(error.graphQLErrors.length > 0) {
            this.submitError$.next(error.graphQLErrors.map(e => e.message));
          } else if (error.networkError) {
            this.networkErrorService.networkError$.next(error.networkError);
          }
        },
        complete: (): void => {
          this.submitError$.next([]);
          this.submitSuccess$.next(true);
          this.networkErrorService.networkError$.next(undefined);
        }
      });
  }

  cleanup(): void {
    this.submitError$.next([]);
    this.submitSuccess$.next(false);
    this.isSubmitting$.next(false);
    this.networkErrorService.networkError$.next(undefined);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
