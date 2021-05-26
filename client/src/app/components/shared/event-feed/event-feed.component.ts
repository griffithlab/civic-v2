import { Component, Input, OnInit } from "@angular/core";
import { 
    EventAction,
    EventFeedNodeFragment,
    EventFeedQuery,
    EventFeedQueryVariables,
    Maybe,
    PageInfo, 
    SubscribableInput 
} from "@app/generated/civic.apollo";
import { EventFeedService } from "./event-feed.service";
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkableUser } from "../user-pill/user-pill.component";

@Component({
    selector: 'cvc-event-feed',
    templateUrl: './event-feed.component.html',
    styleUrls: ['./event-feed.component.less'],
    providers: [EventFeedService]
})
export class EventFeedComponent implements OnInit {
    @Input() subscribable?: SubscribableInput
    
    private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>
    private results$!: Observable<ApolloQueryResult<EventFeedQuery>>

    private initialQueryVars?: EventFeedQueryVariables
    private destroy$ = new Subject<void>();

    events$?: Observable<EventFeedNodeFragment[]>
    pageInfo$?: Observable<PageInfo>
    participants$?: Observable<LinkableUser[]>

    constructor(private eventFeedService: EventFeedService) { }

    ngOnInit() {
        this.initialQueryVars = {
            subject: this.subscribable,
            first: this.eventFeedService.initialListSize,
        }

        this.queryRef = this.eventFeedService.query.watch(this.initialQueryVars);
        this.results$ = this.queryRef.valueChanges;

        this.pageInfo$ = this.results$.pipe(
            map(({data}) => data.events.pageInfo)
        )

        this.events$ = this.results$.pipe(
            map(({data}) => data.events.edges.map(e => e.node as EventFeedNodeFragment) )
        )

        this.participants$ = this.results$.pipe(
            map(({data}) => data.events.uniqueParticipants)
        )
    }
    
    fetchMore(endCursor: string) {
        this.queryRef.fetchMore({variables: {
            first: this.eventFeedService.fetchMoreSize,
            after: endCursor
        }})
    }

    onParticipantSelected(u: Maybe<LinkableUser>) {
        this.queryRef.refetch({
            ...this.initialQueryVars,
            originatingUserId: u?.id
        })
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete()
    }

    iconNameForEventAction(a: EventAction): string {
        switch(a) {
            case(EventAction.Commented):
                return 'comment'
            case(EventAction.RevisionSuggested):
                return 'diff'
            case(EventAction.RevisionAccepted):
                return 'check-circle'
            case(EventAction.RevisionRejected):
                return 'close-circle'
            case(EventAction.RevisionSuperseded):
                return 'clear'
            default:
                throw new Error('Not handling all event action types yet')

        }
    }

    verbiageForEvent(e: EventFeedNodeFragment): string {
        switch(e.action){
            case(EventAction.Commented):
                return 'commented on'
            case(EventAction.RevisionSuggested):
                return 'suggested a revision to'
            case(EventAction.RevisionAccepted):
                return 'accepted a revision to'
            case(EventAction.RevisionRejected):
                return 'rejected a revision to'
            case(EventAction.RevisionSuperseded):
                return 'accepted a a superseding revision on'
            default:
                throw new Error('Not handling all event action types yet')
        }
    }
}