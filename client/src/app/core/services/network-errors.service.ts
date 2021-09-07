import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { ServerError, ServerParseError } from "@apollo/client/core";
import { Maybe } from "@app/generated/civic.apollo";

@Injectable({ providedIn: 'root' })
export class NetworkErrorsService {
  public networkError$: BehaviorSubject<Error | ServerError | ServerParseError | undefined>;
  constructor() {
    this.networkError$ = new BehaviorSubject<Error | ServerError | ServerParseError | undefined>(undefined);
  }

  clearErrors(): void {
    this.networkError$.next(undefined);
  }
}
