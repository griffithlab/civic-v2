import { Component, Input, OnInit } from '@angular/core';
import { Maybe } from '@app/generated/civic.apollo';

export interface LinkableVariant {
  id: number;
  name: string;
}

@Component({
  selector: 'cvc-variant-tag-r',
  templateUrl: './variant-tag.component.html',
  styleUrls: ['./variant-tag.component.less']
})
export class CvcVariantTagComponent implements OnInit {
  @Input() variant!: LinkableVariant;
  @Input() linked: Maybe<boolean> = true
  @Input() enablePopover: Maybe<boolean> = true

  constructor() { }

  ngOnInit() {
    if (this.variant === undefined) {
      throw new Error(
        'cvc-variant-tag requires LinkableVariant input, none supplied.'
      );
    }
  }
}
