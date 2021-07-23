import { Component, Input, OnInit } from '@angular/core';
import { Maybe, SubscribableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-details-navigation',
  templateUrl: './details-navigation.component.html',
  styleUrls: ['./details-navigation.component.less']
})
export class DetailsNavigationComponent implements OnInit {
  @Input() entity: Maybe<SubscribableInput>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.entity);
  }

}
