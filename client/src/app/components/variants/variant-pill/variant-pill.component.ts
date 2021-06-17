import { Component, Input, OnInit } from "@angular/core";

export interface LinkableVariant {
  id: number,
  name: string
}

@Component({
  selector: 'cvc-variant-pill',
  templateUrl: './variant-pill.component.html',
  styleUrls: ['./variant-pill.component.less']
})
export class VariantPillComponent implements OnInit {
  @Input() variant!: LinkableVariant

  ngOnInit() {
    if(this.variant === undefined) {
      throw new Error("Must pass a linkable variant into the variant pill component")
    }
  }
}