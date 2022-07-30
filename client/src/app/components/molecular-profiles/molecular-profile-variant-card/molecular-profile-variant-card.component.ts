import { Component, Input, OnInit } from "@angular/core";
import { MolecularProfileSegment, VariantMolecularProfileCardFieldsFragment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-mp-variant-card',
    templateUrl: './molecular-profile-variant-card.component.html',
    styleUrls: ['./molecular-profile-variant-card.component.less']
})
export class CvcMolecularProfileVariantCardComponent implements OnInit {
    @Input() variant!: VariantMolecularProfileCardFieldsFragment

    ngOnInit() {
        if(this.variant === undefined) {
            throw new Error('Must pass a Variant into the MP Variant Card Component')
        }
    }
}
