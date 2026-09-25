import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { Apollo, Mutation } from 'apollo-angular'
import { NetworkErrorsService } from '../services/network-errors.service'
import { finalize, takeUntil } from 'rxjs/operators'
import { CombinedGraphQLErrors, toErrorLike } from '@apollo/client/errors'

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
    options?: Omit<Mutation.MutateOptions<T, V>, 'variables'>,
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

    // bind + assert to sidestep the `{} extends V` conditional tuple in
    // Mutation#mutate's signature, which cannot resolve for a generic V
    const mutate = mutation.mutate.bind(mutation) as (
      options: Mutation.MutateOptions<T, V>
    ) => Observable<Apollo.MutateResult<T>>

    mutate({ variables: vars, ...options } as Mutation.MutateOptions<T, V>)
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
        error: (error: unknown) => {
          if (CombinedGraphQLErrors.is(error)) {
            stateVals.submitError$.next(error.errors.map((e) => e.message))
          } else {
            this.networkErrorService.networkError$.next(toErrorLike(error))
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
