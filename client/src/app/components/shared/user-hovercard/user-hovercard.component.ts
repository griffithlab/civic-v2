import { Component, Input, OnInit } from "@angular/core";
import { HovercardUserFragment, UserHoverCardGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
    selector: 'cvc-user-hovercard',
    templateUrl: './user-hovercard.component.html',
    styleUrls: ['./user-hovercard.component.less']
})
export class UserHovercardComponent implements OnInit {
    @Input() userId!: number;

    user$?: Observable<Maybe<HovercardUserFragment>>

    constructor(private gql: UserHoverCardGQL) { }

    ngOnInit(){
        if(this.userId == undefined) {
            throw new Error("Must pass an id into user hovercard");
        }
        this.user$ = this.gql.watch({userId: this.userId})
            .valueChanges
            .pipe(map(({data}) => data.user))
    }
}