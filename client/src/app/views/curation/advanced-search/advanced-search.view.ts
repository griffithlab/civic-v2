import { Component } from '@angular/core';
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component';

@Component({
  selector: 'cvc-advanced-search-view',
  templateUrl: './advanced-search.view.html',
  styleUrls: ['./advanced-search.view.less']
})
export class AdvancedSearchView {
  tabs: RouteableTab[]
  constructor() {
    this.tabs = [
      {
        routeName: 'gene-search',
        iconName: 'civic-gene',
        tabLabel: 'Gene'
      },
    ]
  }

}
