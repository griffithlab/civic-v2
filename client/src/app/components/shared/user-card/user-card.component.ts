import { Component, Input, OnInit } from "@angular/core";

export interface CardUser {
    id: number,
    name: string,
    displayName: string,
    profileImagePath?: string,
    role: string,
    url?: string,
    areaOfExpertise?: string,
    orcid?: string, 
    twitterHandle?: string,
    facebookProfile?: string,
    linkedinProfil?: string
}

@Component({
    selector: 'cvc-user-card',
    templateUrl: './user-card.component.html',
    styleUrls: ['./user-card.component.less']
})
export class UserCardComponent implements OnInit {
    @Input() user!: CardUser;

    ngOnInit(){
        if(this.user == undefined) {
            throw new Error("Must pass an id into user hovercard");
        }
    }
}