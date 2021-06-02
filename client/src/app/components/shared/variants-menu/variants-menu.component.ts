import { Component, Input, OnInit } from "@angular/core";
import { VariantsMenuGQL, Maybe, MenuVariantFragment, VariantsMenuQuery, VariantsMenuQueryVariables } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { QueryRef } from "apollo-angular";

@Component({
    selector: 'cvc-variant-menu',
    templateUrl: './variants-menu.component.html',
    styleUrls: ['./variants-menu.component.less']
})
export class VariantsMenuComponent implements OnInit {
    @Input() geneId!: number;

    menuVariants$?: Observable<Maybe<MenuVariantFragment[]>>
    queryRef$?: QueryRef<VariantsMenuQuery, VariantsMenuQueryVariables>

    constructor(private gql: VariantsMenuGQL) {}

    ngOnInit() {
        if(this.geneId === undefined) {
            throw new Error("Must pass a gene id into variant menu component.")
        }

        this.queryRef$ =  this.gql.watch({geneId: this.geneId})

        this.menuVariants$ = this.queryRef$
            .valueChanges
            .pipe(map(({data}) => data.variants.nodes))
    }

    onVariantFilterChanged(e: Event) {
        this.queryRef$?.refetch({
            geneId: this.geneId,
            variantName: (e.target as HTMLInputElement).value
        })
    }
}