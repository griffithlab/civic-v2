import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck } from 'rxjs/operators';

import {
  Gene,
  GenesSummaryGQL,
} from '@app/generated/civic.apollo';

@Injectable({ providedIn: 'any' })
export class GenesSummaryService {

  constructor(private genesSummaryGQL: GenesSummaryGQL) { }

  watchGenesSummary(id: number): Observable<any> {
    return this.genesSummaryGQL.watch({
      geneId: id
    })
      .valueChanges
      .pipe(shareReplay(1));
  }
}
