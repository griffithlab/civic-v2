import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BrowseGenesGQL,
         Gene,
         GenesSortColumns,
         SortDirection
       } from '@app/generated/GqlService';

@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit {
  geneNodes!: Observable<Gene[]>;

  constructor(private browseGenesGQL:BrowseGenesGQL) { }

  ngOnInit(): void {
    this.geneNodes = this.browseGenesGQL.watch({
      sortBy: {
        column: GenesSortColumns.EntrezSymbol,
        direction: SortDirection.Asc
      },
      first: 2
    })
      .valueChanges
      .pipe(map((result:any) => result.data.genes.nodes));

  }
}
