import { Injectable } from "@angular/core";
import { ReplaySubject } from "rxjs";
import { ServerError, ServerParseError } from "@apollo/client/core";

@Injectable({ providedIn: 'root' })
export class NetworkErrorsService {
  public networkError$: ReplaySubject<Error | ServerError | ServerParseError>;
  constructor() {
    this.networkError$ = new ReplaySubject(1);
  }
}
