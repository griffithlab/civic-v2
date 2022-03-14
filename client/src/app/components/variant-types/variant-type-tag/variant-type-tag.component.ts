import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
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
export class CvcVariantTypeTagComponent extends BaseCloseableTag implements OnInit {
  @Input() variantType!: LinkableVariantType
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { super(); }

  idFunction() {
    return this.variantType.id
  }

  ngOnInit() {
    if (this.variantType === undefined) {
      throw new Error('cvc-variant-type-tag requires LinkableVariantType input, none supplied.')
    }
  }

}
