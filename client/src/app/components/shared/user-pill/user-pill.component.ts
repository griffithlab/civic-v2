import { Component, Input, OnInit } from "@angular/core";

export interface LinkableUser {
    id: number,
    displayName: string,
    profileImagePath?: string
}

@Component({
    selector: 'cvc-user-pill',
    templateUrl: './user-pill.component.html',
    styleUrls: ['./user-pill.component.less']
})
export class UserPillComponent implements OnInit {
    @Input() user!: LinkableUser

    ngOnInit() {
        if(this.user === undefined) {
            throw new Error('Must pass a user into user pill.')
        }
    }
}