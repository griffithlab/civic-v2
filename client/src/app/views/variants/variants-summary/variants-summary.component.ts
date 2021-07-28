import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VariantSummaryGQL, Maybe, VariantSummaryQuery, VariantSummaryQueryVariables, VariantSummaryFieldsFragment, SubscribableInput, SubscribableEntities, MyVariantInfoFieldsFragment } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { map, pluck, startWith } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import { ExternalLink } from "@app/components/shared/link-tag/link-tag.component";

@Component({
  selector: 'cvc-variant-summary',
  templateUrl: './variants-summary.component.html',
  styleUrls: ['./variants-summary.component.less']
})
export class VariantSummaryComponent {
  @Input() variantId: Maybe<number>

  queryRef: QueryRef<VariantSummaryQuery, VariantSummaryQueryVariables>
  loading$: Observable<boolean>
  variant$: Observable<Maybe<VariantSummaryFieldsFragment>>
  variantInfo$: Observable<Maybe<MyVariantInfoFieldsFragment>>

  alleleRegistryLink$: Observable<Maybe<ExternalLink>>;

  subscribable: SubscribableInput

  constructor(
    private gql: VariantSummaryGQL,
    private route: ActivatedRoute) {

    var queryVariantId: number
    if (this.variantId) {
      queryVariantId = this.variantId
    } else  {
      queryVariantId = +this.route.snapshot.params['variantId'];
    }

    if (queryVariantId == undefined) {
      throw new Error("Must pass in a variant ID as an input or via the route.")
    }

    this.queryRef = this.gql.watch({variantId: queryVariantId});

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(
      pluck('loading'),
      startWith(true)
    )

    this.variant$ = observable.pipe(
      pluck('data', 'variant')
    )

    this.alleleRegistryLink$ = this.variant$
      .pipe(
        pluck('alleleRegistryId'),
        map((id) => {
          if (id) {
            return {
              id: id,
              url: 'https://reg.genome.network/allele/' + id + '.html',
              label: id,
              tooltip: 'View on ClinGen Allele Registry'
            } as ExternalLink;
          } else {
            return undefined;
          }
        }));

    this.variantInfo$ = observable.pipe(
      pluck('data', 'variant', 'myVariantInfo')
    )

    this.subscribable = {
      entityType: SubscribableEntities.Variant,
      id: queryVariantId
    }
  }
}
