import { Component, Input, OnInit } from '@angular/core';
import { Maybe, SubscribableInput } from '@app/generated/civic.apollo';
import { Router } from '@angular/router';

@Component({
  selector: 'cvc-details-navigation',
  templateUrl: './details-navigation.component.html',
  styleUrls: ['./details-navigation.component.less']
})
export class DetailsNavigationComponent implements OnInit {
  @Input() entity: Maybe<SubscribableInput>;
  selectedTabIndex: number;

  tabs: string[] = ['summary', 'comments', 'revisions', 'flags'];

  constructor(private router: Router) {
    this.selectedTabIndex = this.getActivatedRouteIndex(this.router.url);
  }

  getActivatedRouteIndex(url: string): number {
    return this.tabs.findIndex((path) => url.includes(path));
  }

  ngOnInit(): void {
    console.log(this.entity);
  }

}
