import { Component, Input, OnInit } from "@angular/core";
import { EvidenceGridFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-evidence-card',
    templateUrl: './evidence-card.component.html',
})
export class CvcEvidenceCardComponent implements OnInit {
    @Input() evidence!: EvidenceGridFieldsFragment;

    ngOnInit(){
        if(this.evidence == undefined) {
            throw new Error("Must pass an evidence item into evidence card");
        }
    }
}
