import {
  Injectable,
  OnDestroy,
} from '@angular/core';

import { create } from 'rxjs-spy';

@Injectable({
  providedIn: 'root'
})
export class RxjsSpyService {
  spy: any;

  constructor() {
    this.spy = create();
  }

  log(): any {
    return this.spy.log();
  }

  ngOnDestroy(): void {
    this.spy.teardown();
  }
}
