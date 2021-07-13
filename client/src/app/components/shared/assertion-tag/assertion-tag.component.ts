import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    if (this.assertion === undefined) {
      throw new Error('cvc-assertion-tag requires LinkableAssertion input, none supplied.')
    }
  }

}
