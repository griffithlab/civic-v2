import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  Gene,
  GenesDetailResolveGQL,
  GenesDetailResolveQuery,
} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({providedIn: 'root'})
export class GenesDetailResolveService implements Resolve<ApolloQueryResult<GenesDetailResolveQuery>> {
  constructor(private query: GenesDetailResolveGQL) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<ApolloQueryResult<GenesDetailResolveQuery>> {
    const vars = {
      geneId: +route.params['geneId']
    }

    return this.query
      .fetch(vars);

  }
}
