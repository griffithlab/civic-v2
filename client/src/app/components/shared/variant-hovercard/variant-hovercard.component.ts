import { Component, OnInit, Input } from "@angular/core";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Maybe, VariantHovercardFieldsFragment, VariantHovercardGQL } from "@app/generated/civic.apollo";

@Component({
  selector: 'cvc-variant-hovercard',
  templateUrl: './variant-hovercard.component.html',
  styleUrls: ['./variant-hovercard.component.less']
})
export class VariantHovercardComponent implements OnInit {
  @Input() variantId!: number

  variant$?: Observable<Maybe<VariantHovercardFieldsFragment>>

  constructor(private gql: VariantHovercardGQL) {}

  ngOnInit() {
    if (this.variantId === undefined) {
      throw new Error("Must pass a variant ID into the variant hovercard component.")
    }

    this.variant$ = this.gql.watch({ variantId: this.variantId })
      .valueChanges
      .pipe(map(({data}) => data.variant));
  }
}