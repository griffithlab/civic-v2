import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck} from 'rxjs/operators';
import { BrowseGenesGQL,
         Gene,
         GenesSortColumns,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';


@Injectable({providedIn: 'any'})
export class GenesBrowseService {
  constructor(private browseGenesGQL: BrowseGenesGQL) { }

  watchGenesBrowse(): Observable<any> {
    return this.browseGenesGQL.watch({
      sortBy: {
        column: GenesSortColumns.EntrezSymbol,
        direction: SortDirection.Asc
      },
      first: 10
    })
      .valueChanges
      .pipe(shareReplay(1));
  }
}
