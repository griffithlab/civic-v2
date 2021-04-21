import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import {
  Gene,
  GenesDetailResolveGQL,
  GenesDetailResolveQuery,
} from '@app/generated/civic.apollo';
import { ApolloQueryResult } from '@apollo/client/core';

@Injectable({providedIn: 'root'})
export class GenesDetailResolveService implements Resolve<Observable<ApolloQueryResult<GenesDetailResolveQuery>>> {
  constructor(private query: GenesDetailResolveGQL) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Observable<ApolloQueryResult<GenesDetailResolveQuery>>> {
    const vars = {
      geneId: +route.params['geneId']
    }

    return of(this.query
      .fetch(vars));

  }
}
