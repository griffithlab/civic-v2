import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableVariantType {
  id: number,
  name: string,
}

@Component({
  selector: 'cvc-variant-type-tag-r',
  templateUrl: './variant-type-tag.component.html',
  styleUrls: ['./variant-type-tag.component.less']
})
export class CvcVariantTypeTagComponent implements OnInit {
  @Input() variantType!: LinkableVariantType
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.variantType === undefined) {
      throw new Error('cvc-variant-type-tag requires LinkableVariantType input, none supplied.')
    }
  }

}
