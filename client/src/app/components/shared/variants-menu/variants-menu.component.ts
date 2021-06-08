import { Component, Input, OnInit } from "@angular/core";
import { VariantsMenuGQL, Maybe, MenuVariantFragment, VariantsMenuQuery, VariantsMenuQueryVariables, VariantDisplayFilter, PageInfo } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { QueryRef } from "apollo-angular";
import { $enum } from 'ts-enum-util';
import { ApolloQueryResult } from "@apollo/client/core";

@Component({
    selector: 'cvc-variant-menu',
    templateUrl: './variants-menu.component.html',
    styleUrls: ['./variants-menu.component.less']
})
export class VariantsMenuComponent implements OnInit {
    @Input() geneId?: number;

    menuVariants$?: Observable<Maybe<MenuVariantFragment>[]>
    queryRef$!: QueryRef<VariantsMenuQuery, VariantsMenuQueryVariables>
    private results$!: Observable<ApolloQueryResult<VariantsMenuQuery>>

    private initialQueryVars!: VariantsMenuQueryVariables

    pageInfo$?: Observable<PageInfo>

    private pageSize = 40

    constructor(private gql: VariantsMenuGQL) {}

    ngOnInit() {
        if(this.geneId === undefined) {
            throw new Error("Must pass a gene id into variant menu component.")
        }

        this.initialQueryVars = {
            geneId: this.geneId,
            evidenceStatusFilter: VariantDisplayFilter.WithAcceptedOrSubmitted,
            first: this.pageSize,
        }

        this.queryRef$ = this.gql.watch(this.initialQueryVars)
        this.results$ = this.queryRef$.valueChanges

        this.pageInfo$ = this.results$
            .pipe(map(({data}) => {
                console.log("here")
                return data.variants.pageInfo
            }))

        this.menuVariants$ = this.results$
            .pipe(map(({data}) => data.variants.edges.map(e => e.node)))

    }

    onVariantNameFilterChanged(e: Event) {
        this.queryRef$.refetch({
            ...this.initialQueryVars,
            variantName: (e.target as HTMLInputElement).value,
            evidenceStatusFilter: this.currentVariables().evidenceStatusFilter,
        })
    }

    onVariantStatusFilterChanged(value: string) {
        console.log("Here")
        this.queryRef$.refetch({
            ...this.initialQueryVars,
            variantName: this.currentVariables().variantName,
            evidenceStatusFilter: value as VariantDisplayFilter,
        })
    }

    fetchMore(endCursor: string) {
        console.log(endCursor)
        this.queryRef$.fetchMore({variables: {
            first: this.pageSize,
            after: endCursor
        }})
    }

    private currentVariables(): VariantsMenuQueryVariables {
        return this.queryRef$['obsQuery'].variables as VariantsMenuQueryVariables;
    }
}