import { Component, Input, OnInit } from '@angular/core';
import { BaseCloseableTag } from '@app/core/utilities/closeable-tag-base';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableVariant {
  id: number;
  name: string;
  link: string;
}

@Component({
  selector: 'cvc-variant-tag',
  templateUrl: './variant-tag.component.html',
  styleUrls: ['./variant-tag.component.less']
})
export class CvcVariantTagComponent extends BaseCloseableTag implements OnInit {
  @Input() variant!: LinkableVariant;
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { 
    super();
  }
  
  idFunction(): number {
    return this.variant.id;
  }

  ngOnInit() {
    super.ngOnInit();
    if (this.variant === undefined) {
      throw new Error(
        'cvc-variant-tag requires LinkableVariant input, none supplied.'
      );
    }
  }
}
