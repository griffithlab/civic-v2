import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableVariantType {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-variant-type-tag',
  templateUrl: './variant-type-tag.component.html',
  styleUrls: ['./variant-type-tag.component.less']
})
export class VariantTypeTagComponent implements OnInit {
  @Input() variantType!: LinkableVariantType
  @Input() linked: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.variantType === undefined) {
      throw new Error('cvc-variant-type-tag requires LinkableVariantType input, none supplied.')
    }
  }

}
