import { Component, Input, OnInit } from "@angular/core";

export interface LinkableVariant {
  id: number,
  name: string
}

@Component({
  selector: 'cvc-variant-tag',
  templateUrl: './variant-tag.component.html',
  styleUrls: ['./variant-tag.component.less']
})
export class VariantTagComponent implements OnInit {
  @Input() variant!: LinkableVariant

  ngOnInit() {
    if(this.variant === undefined) {
      throw new Error("Must pass a linkable variant into the variant tag component")
    }
  }
}