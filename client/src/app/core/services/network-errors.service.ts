import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ServerError, ServerParseError } from '@apollo/client/core'
import { Maybe } from '@app/generated/civic.apollo'

export type NetworkError = Error | ServerError | ServerParseError
@Injectable({ providedIn: 'root' })
export class NetworkErrorsService {
  public networkError$: BehaviorSubject<Maybe<NetworkError>>
  constructor() {
    this.networkError$ = new BehaviorSubject<Maybe<NetworkError>>(undefined)
  }

  clearErrors(): void {
    this.networkError$.next(undefined)
  }
}
