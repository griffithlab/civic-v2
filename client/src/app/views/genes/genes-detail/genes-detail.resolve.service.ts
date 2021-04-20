import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  Gene,
  GenesDetailResolveGQL
} from '@app/generated/civic.apollo';

import { ApolloQueryResult } from '@apollo/client/core';

interface GenesDetailResolveResponse {
  data: Gene;
  loading: boolean;
  networkStatus: any;
}

@Injectable({ providedIn: 'root' })
export class GenesDetailResolveService implements Resolve<GenesDetailResolveResponse> {

  constructor(private query: GenesDetailResolveGQL) {}

  resolve(route: ActivatedRouteSnapshot): Observable<GenesDetailResolveResponse> {
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
