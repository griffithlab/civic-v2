import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableAssertion {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-assertion-tag',
  templateUrl: './assertion-tag.component.html',
  styleUrls: ['./assertion-tag.component.less']
})
export class AssertionTagComponent implements OnInit {
  @Input() assertion!: LinkableAssertion
  @Input() linked: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.assertion === undefined) {
      throw new Error('cvc-assertion-tag requires LinkableAssertion input, none supplied.')
    }
  }

}
