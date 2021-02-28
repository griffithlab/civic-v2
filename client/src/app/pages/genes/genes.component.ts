import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, pluck} from 'rxjs/operators';
import { BrowseGenesGQL,
         Gene,
         GenesSortColumns,
         SortDirection,
         PageInfo
       } from '@app/generated/civic.apollo';

@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit, OnDestroy {
  loading$: Observable<boolean>;
  error$: Observable<any>;

  pageInfo$: Observable<PageInfo>;
  genes$: Observable<Gene[]>;

  constructor(private browseGenesGQL:BrowseGenesGQL) {
    const source$: Observable<any> = this.browseGenes();
    this.loading$ = source$.pipe(pluck('loading'));
    this.error$ = source$.pipe(pluck('errors'));

    this.pageInfo$ = source$.pipe(pluck('data', 'pageInfo'));
    this.genes$ = source$.pipe(pluck('data', 'genes', 'nodes'));
}

  ngOnInit(): void {
    this.browseGenes();
  }

  browseGenes(): Observable<any> {
    return this.browseGenesGQL.watch({
      sortBy: {
        column: GenesSortColumns.EntrezSymbol,
        direction: SortDirection.Asc
      },
      first: 2
    })
      .valueChanges
      .pipe(shareReplay(1));
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
