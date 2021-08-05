import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

export interface LinkableVariantgroup {
  id: number,
  name: string
}

@Component({
  selector: 'cvc-variantgroup-tag',
  templateUrl: './variantgroup-tag.component.html',
  styleUrls: ['./variantgroup-tag.component.less']
})
export class VariantgroupTagComponent implements OnInit {
  @Input() variantgroup!: LinkableVariantgroup;
  @Input() linked: Maybe<boolean> = true;
  @Input() enablePopover: Maybe<boolean> = true;

  ngOnInit() {
    if (this.variantgroup === undefined) {
      throw new Error("Must pass a LinkableVariantgroup into the variantgroup tag component")
    }
  }
}
