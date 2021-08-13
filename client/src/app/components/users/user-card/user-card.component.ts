import { Component, Input, OnInit } from "@angular/core";
import { OrganizationMembersFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.less']
})
export class CvcUserCardComponent implements OnInit {
    @Input() user!: OrganizationMembersFieldsFragment;

    ngOnInit(){
        if(this.user == undefined) {
            throw new Error("Must pass a user into user card");
        }
    }
}
