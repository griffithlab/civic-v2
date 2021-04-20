import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  Gene,
  GeneRoutingGQL
} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';


interface GeneRoutingResponse {
  data: Gene;
  loading: boolean;
  networkStatus: any;
}

@Injectable()
export class GeneRoutingService implements Resolve<GeneRoutingResponse> {
  constructor(private query: GeneRoutingGQL) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<GeneRoutingResponse> {
    const geneId = route.params['geneId'];

    return this.query
      .fetch({ geneId: geneId }).pipe(
        map((r: ApolloQueryResult<any>) => {
          return {
            data: r.data,
            loading: r.loading,
            networkStatus: r.networkStatus
          };
        })
      )
  }
}
