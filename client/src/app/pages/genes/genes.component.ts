import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Apollo } from 'apollo-angular';

import { BrowseGenesDocument, Gene } from '@app/generated/GqlService';

@Component({
  selector: 'app-genes',
  templateUrl: './genes.component.html',
  styleUrls: ['./genes.component.less']
})
export class GenesComponent implements OnInit, OnDestroy {
  private querySubscription!: Subscription;
  private browseGenesQuery: any = BrowseGenesDocument;
  loading = false;
  geneNodes: Gene[] = [];

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: this.browseGenesQuery,
      variables: {
        sortBy: {
          column: "entrezSymbol",
          direction: "ASC"
        },
        first: 25
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.geneNodes = data.genes.nodes;
      });
  }
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
