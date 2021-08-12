import { Component, Input, OnInit } from "@angular/core";
import { AssertionBrowseTableRowFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-assertion-card',
    templateUrl: './assertion-card.component.html',
    styleUrls: ['./assertion-card.component.less']
})
export class CvcAssertionCardComponent implements OnInit {
    @Input() assertion!: AssertionBrowseTableRowFieldsFragment;

    ngOnInit(){
        if(this.assertion == undefined) {
            throw new Error("Must pass an assertion into assertion card");
        }
    }
}
