import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { ServerError, ServerParseError } from "@apollo/client/core";

@Injectable({ providedIn: 'root' })
export class NetworkErrorsService {
  public networkError$: ReplaySubject<Error | ServerError | ServerParseError | null>;
  constructor() {
    this.networkError$ = new ReplaySubject(1);
  }

  clearErrors(): void {
    this.networkError$.next(null);
  }
}
