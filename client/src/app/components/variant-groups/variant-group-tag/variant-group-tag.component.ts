import { Component, Input, OnInit } from "@angular/core";
import { Maybe } from "@app/generated/civic.apollo";

export interface LinkableVariantgroup {
  id: number,
  name: string,
  link: string
}

@Component({
  selector: 'cvc-variant-group-tag',
  templateUrl: './variant-group-tag.component.html',
  styleUrls: ['./variant-group-tag.component.less']
})
export class CvcVariantGroupTagComponent implements OnInit {
  @Input() variantgroup!: LinkableVariantgroup;
  @Input() linked: Maybe<boolean> = true;
  @Input() enablePopover: Maybe<boolean> = true;

  ngOnInit() {
    if (this.variantgroup === undefined) {
      throw new Error("Must pass a LinkableVariantgroup into the variantgroup tag component")
    }
  }
}
