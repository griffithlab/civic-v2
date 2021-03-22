import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck} from 'rxjs/operators';

import { GeneDetailGQL,
         Gene,
       } from '@app/generated/civic.apollo';

@Injectable({providedIn: 'any'})
export class GenesDetailService {

  constructor(private genesDetailGQL: GeneDetailGQL) { }

  watchGeneDetail(id: string): Observable<any> {
    return this.genesDetailGQL.watch({
      geneId: id
    })
      .valueChanges
      .pipe(shareReplay(1));
  }
}
