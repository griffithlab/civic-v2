import { BehaviorSubject, Subject } from 'rxjs'
import { Mutation, MutationOptionsAlone } from 'apollo-angular'
import { NetworkErrorsService } from '../services/network-errors.service'
import { finalize, takeUntil } from 'rxjs/operators'
import { ApolloError } from '@apollo/client/core'

export interface MutationState {
  submitError$: BehaviorSubject<string[]>
  isSubmitting$: BehaviorSubject<boolean>
  submitSuccess$: BehaviorSubject<boolean>

  cleanup(): void
}

export class MutatorWithState<
  M extends Mutation<T, V>,
  T extends {},
  V extends { [key: string]: any },
> {
  constructor(private networkErrorService: NetworkErrorsService) {}

  mutate(
    mutation: M,
    vars: V,
    options?: MutationOptionsAlone<T, V>,
    dataCallback?: (data: T) => void
  ): MutationState {
    let destroy$ = new Subject<void>()

    let stateVals = {
      isSubmitting$: new BehaviorSubject<boolean>(false),
      submitSuccess$: new BehaviorSubject<boolean>(false),
      submitError$: new BehaviorSubject<string[]>([]),
      cleanup: () => {
        destroy$.next()
        destroy$.complete()
      },
    }

    stateVals.isSubmitting$.next(true)

    mutation
      .mutate(vars, options)
      .pipe(
        takeUntil(destroy$),
        finalize(() => {
          stateVals.isSubmitting$.next(false)
        })
      )
      .subscribe({
        next: (res) => {
          if (res.data && dataCallback) {
            dataCallback(res.data)
          }
        },
        error: (error: ApolloError) => {
          if (error.graphQLErrors.length > 0) {
            stateVals.submitError$.next(
              error.graphQLErrors.map((e) => e.message)
            )
          } else if (error.networkError) {
            this.networkErrorService.networkError$.next(error.networkError)
          }
          stateVals.cleanup()
        },
        complete: () => {
          stateVals.submitError$.next([])
          stateVals.submitSuccess$.next(true)
          this.networkErrorService.networkError$.next(undefined)
          stateVals.cleanup()
        },
      })

    return stateVals
  }
}
