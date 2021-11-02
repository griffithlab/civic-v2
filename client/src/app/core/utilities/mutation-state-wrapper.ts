import { BehaviorSubject, Subject } from "rxjs";
import { Mutation} from 'apollo-angular'
import { EmptyObject } from "apollo-angular/types";
import { NetworkErrorsService } from "../services/network-errors.service";
import { finalize, takeUntil } from "rxjs/operators";
import { ApolloError } from '@apollo/client/core';

export interface MutationState {
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;
  cleanup(): void
}

export class MutatorWithState<M extends Mutation<T, V>, T extends {}, V extends EmptyObject> {
  constructor(private networkErrorService: NetworkErrorsService) { }

  mutate(mutation: M, vars: V): MutationState {
    let destroy$ = new Subject();

    let stateVals = {
      isSubmitting$: new BehaviorSubject<boolean>(false),
      submitSuccess$: new BehaviorSubject<boolean>(false),
      submitError$: new BehaviorSubject<string[]>([]),
      cleanup: () => { destroy$.next(); destroy$.complete() }
    }

  stateVals.isSubmitting$.next(true)

   mutation.mutate(vars)
      .pipe(
        takeUntil(destroy$),
        finalize(() => { stateVals.isSubmitting$.next(false)})
      ).subscribe({
        error: (error: ApolloError) => {
          if(error.graphQLErrors.length > 0) {
            stateVals.submitError$.next(error.graphQLErrors.map(e => e.message));
          } else if (error.networkError) {
            this.networkErrorService.networkError$.next(error.networkError);
          }
          stateVals.cleanup();
        },
        complete: () => {
          stateVals.submitError$.next([]);
          stateVals.submitSuccess$.next(true);
          this.networkErrorService.networkError$.next(undefined)
          stateVals.cleanup();
        },
      },
      )

    return stateVals
  }
}