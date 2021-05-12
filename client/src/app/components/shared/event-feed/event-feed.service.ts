import { Injectable } from "@angular/core";
import { EventFeedGQL, } from "@app/generated/civic.apollo";

@Injectable()
export class EventFeedService {

    initialListSize = 5
    fetchMoreSize = 5
    query: EventFeedGQL

    constructor(gql: EventFeedGQL){ 
        this.query = gql
    }
}