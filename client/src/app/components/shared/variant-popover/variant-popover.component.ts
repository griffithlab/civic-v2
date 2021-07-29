import { Component, OnInit, Input } from "@angular/core";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Maybe, VariantPopoverFieldsFragment, VariantPopoverGQL } from "@app/generated/civic.apollo";

@Component({
  selector: 'cvc-variant-popover',
  templateUrl: './variant-popover.component.html',
  styleUrls: ['./variant-popover.component.less']
})
export class VariantPopoverComponent implements OnInit {
  @Input() variantId!: number

  variant$?: Observable<Maybe<VariantPopoverFieldsFragment>>

  constructor(private gql: VariantPopoverGQL) {}

  ngOnInit() {
    if (this.variantId === undefined) {
      throw new Error("Must pass a variant ID into the variant popover component.")
    }

    this.variant$ = this.gql.watch({ variantId: this.variantId })
      .valueChanges
      .pipe(map(({data}) => data.variant));
  }
}