import { Component, Input, OnInit } from "@angular/core"
import { ApolloQueryResult } from "@apollo/client/core"
import { FlaggableInput, FlagListFragment, FlagListGQL, FlagListQuery, FlagListQueryVariables, Maybe } from "@app/generated/civic.apollo"
import { QueryRef } from "apollo-angular"
import { Observable } from 'rxjs'
import { map } from "rxjs/operators"

@Component({
    selector: 'cvc-flag-list',
    templateUrl: './flag-list.component.html',
    styleUrls: ['./flag-list.component.less'],
})
export class FlagListComponent implements OnInit {
    @Input() flaggable!: FlaggableInput
    
    private queryRef!: QueryRef<FlagListQuery, FlagListQueryVariables>
    private results$!: Observable<ApolloQueryResult<FlagListQuery>>
    flags$!: Observable<Maybe<FlagListFragment>>

    constructor(private gql: FlagListGQL) { }

    ngOnInit() {
        if(this.flaggable == undefined) {
            throw new Error("Must pass a flaggable into flag list");
        }

        this.queryRef = this.gql.watch({flaggable: this.flaggable});
        this.results$ = this.queryRef.valueChanges
        this.flags$ = this.results$.pipe(map(({data}) => data.flags))
    }
}