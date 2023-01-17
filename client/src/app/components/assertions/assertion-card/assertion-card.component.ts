import { Component, Input, OnInit } from '@angular/core'
import { AssertionBrowseFieldsFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-assertion-card',
  templateUrl: './assertion-card.component.html',
})
export class CvcAssertionCardComponent implements OnInit {
  @Input() assertion!: AssertionBrowseFieldsFragment

  ngOnInit() {
    if (this.assertion == undefined) {
      throw new Error('Must pass an assertion into assertion card')
    }
  }
}
