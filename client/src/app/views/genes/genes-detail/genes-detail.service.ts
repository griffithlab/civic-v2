import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck} from 'rxjs/operators';

import { GeneDetailGQL,
         GeneDetailQueryVariables,
         Gene,
       } from '@app/generated/civic.apollo';

@Injectable({providedIn: 'any'})
export class GenesDetailService {

  constructor(private genesDetailGQL: GeneDetailGQL) { }

  watchGeneDetail(id: number): Observable<any> {
    return this.genesDetailGQL.watch(<GeneDetailQueryVariables>{
      geneId: id,
      commentLast: 5
    })
      .valueChanges
      .pipe(shareReplay(1));
  }
}
