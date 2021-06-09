import { Component, Input, OnInit } from "@angular/core"
import { ApolloQueryResult } from "@apollo/client/core"
import { FlaggableInput, FlagListFragment, FlagListGQL, FlagListQuery, FlagListQueryVariables, Maybe, FlagState} from "@app/generated/civic.apollo"
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

    stateFilter: String
    refresh?: () => void

    constructor(private gql: FlagListGQL) {
        this.stateFilter = 'open'
    }

    ngOnInit() {
        if(this.flaggable == undefined) {
            throw new Error("Must pass a flaggable into flag list");
        }

        this.queryRef = this.gql.watch({flaggable: this.flaggable, state: this.resolveStateFilter()},
            { fetchPolicy: 'cache-and-network' }
        );
        this.results$ = this.queryRef.valueChanges
        this.flags$ = this.results$.pipe(map(({data}) => data.flags))
        this.refresh = () => { this.queryRef.refetch() }
    }

    private resolveStateFilter() : Maybe<FlagState> {
        if (this.stateFilter === 'open') {
            return FlagState.Open
        } else if (this.stateFilter === 'resolved') {
            return FlagState.Resolved
        } else {
            return undefined
        }
    }

    fetchFlags(event: String) {
        this.queryRef.refetch({flaggable: this.flaggable, state: this.resolveStateFilter()});
    }
}