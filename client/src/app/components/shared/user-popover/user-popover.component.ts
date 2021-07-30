import { Component, Input, OnInit, ContentChild, TemplateRef } from "@angular/core";
import { PopoverUserFragment, UserPopoverGQL, Maybe } from "@app/generated/civic.apollo";
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
    selector: 'cvc-user-popover',
    templateUrl: './user-popover.component.html',
    styleUrls: ['./user-popover.component.less']
})
export class UserPopoverComponent implements OnInit {
    @Input() userId!: number;

    @ContentChild('additionalMetadata') metadataTemplateRef?: TemplateRef<any>

    user$?: Observable<Maybe<PopoverUserFragment>>

    constructor(private gql: UserPopoverGQL) { }

    ngOnInit(){
        if(this.userId == undefined) {
            throw new Error("Must pass an id into user hovercard");
        }
        this.user$ = this.gql.watch({userId: this.userId})
            .valueChanges
            .pipe(map(({data}) => data.user))
    }
}