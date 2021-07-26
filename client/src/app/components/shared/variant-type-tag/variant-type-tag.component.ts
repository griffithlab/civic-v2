import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    if (this.variantType === undefined) {
      throw new Error('cvc-variant-type-tag requires LinkableVariantType input, none supplied.')
    }
  }

}
