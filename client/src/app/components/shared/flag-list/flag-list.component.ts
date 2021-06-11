import { Component, Input, OnInit, ViewContainerRef } from "@angular/core"
import { ApolloQueryResult } from "@apollo/client/core"
import { FlaggableInput, FlagListFragment, FlagListGQL, FlagListQuery, FlagListQueryVariables, Maybe, FlagState } from "@app/generated/civic.apollo"
import { ViewerService } from "@app/shared/services/viewer/viewer.service"
import { QueryRef } from "apollo-angular"
import { NzFooterComponent } from "ng-zorro-antd/layout"
import { NzModalService } from "ng-zorro-antd/modal"
import { Observable } from 'rxjs'
import { map } from "rxjs/operators"
import { ResolveFlagComponent } from "../resolve-flag/resolve-flag.component"

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
    selectedFlagForResolving: Maybe<number>
    refresh!: () => void
    canResolveOtherFlags$?: Observable<boolean>
    userId$?: Observable<number>

    constructor(
        private gql: FlagListGQL,
        private modal: NzModalService,
        private viewContainerRef: ViewContainerRef,
        private viewer: ViewerService) {
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

        this.canResolveOtherFlags$ = this.viewer.viewer$.pipe(
            map((v) => v.isAdmin || v.isEditor)
        )
        this.userId$ = this.viewer.viewer$.pipe(
            map((v) => v.id )
        )
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

    canResolve(flaggingUserId: number, canResolveOther: boolean, userId: number): boolean {
        if(canResolveOther) {
            return true
        } else if (userId == flaggingUserId) {
            return true
        }
        return false
    }

    resolveClicked(flagId: number) {
        this.selectedFlagForResolving = flagId

        let modal = this.modal.create( {
            nzTitle: 'Resolve Flag ' + flagId,
            nzViewContainerRef: this.viewContainerRef,
            nzContent: ResolveFlagComponent,
            nzComponentParams: {
                flagId: flagId,
                flagResolvedCallback: () => { this.refresh() }
            },
            nzOnCancel: () => { this.resolveModalClosed() },
            nzFooter: null
        })

        modal.getContentComponent()
    }

    resolveModalClosed() {
        this.selectedFlagForResolving = undefined
    }
}