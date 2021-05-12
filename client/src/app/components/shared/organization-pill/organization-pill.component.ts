import { Component, Input, OnInit } from "@angular/core";

export interface LinkableOrganization {
    id: number,
    name: string,
    profileImagePath?: string
}

@Component({
    selector: 'cvc-org-pill',
    templateUrl: './organization-pill.component.html',
    styleUrls: ['./organization-pill.component.less']
})
export class OrganizationPillComponent implements OnInit {
    @Input() org!: LinkableOrganization

    ngOnInit() {
        if(this.org === undefined) {
            throw new Error('Must pass an organization into org pill.')
        }
    }
}