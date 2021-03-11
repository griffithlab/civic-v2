import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck} from 'rxjs/operators';

import { QueryRef } from 'apollo-angular';

import { BrowseGenesGQL,
         Gene,
         GenesSortColumns,
         QueryBrowseGenesArgs,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';

@Injectable({providedIn: 'any'})
export class GenesBrowseService {
  constructor(private browseGenesGQL: BrowseGenesGQL) { }

  watchGenesBrowse(initialQueryArgs: QueryBrowseGenesArgs): QueryRef<any> {
    return this.browseGenesGQL.watch(initialQueryArgs);
  }
}
