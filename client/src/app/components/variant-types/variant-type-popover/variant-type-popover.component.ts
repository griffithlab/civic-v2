import { Component, Input, OnInit } from "@angular/core";
import { Maybe, VariantTypePopoverFragment, VariantTypePopoverGQL } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'cvc-variant-type-popover-r',
  templateUrl: './variant-type-popover.component.html',
  styleUrls: ['./variant-type-popover.component.less']
})
export class CvcVariantTypePopoverComponent implements OnInit {
  @Input() variantTypeId!: number;

  variantType$?: Observable<Maybe<VariantTypePopoverFragment>>

  constructor(private gql: VariantTypePopoverGQL) { }

  ngOnInit() {
    if (this.variantTypeId == undefined) {
      throw new Error("cvc-variant-type-popover requires valid variantTypeId input.");
    }
    this.variantType$ = this.gql.watch({ variantTypeId: this.variantTypeId })
      .valueChanges
      .pipe(map(({ data }) => data.variantTypes.edges[0]?.node))
  }
}
