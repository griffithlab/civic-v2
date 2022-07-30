import { Component, Input, OnInit } from "@angular/core";
import { MolecularProfileSegment } from "@app/generated/civic.apollo";

@Component({
    selector: 'cvc-mp-tag-name',
    templateUrl: './molecular-profile-tag-name.component.html',
    styleUrls: ['./molecular-profile-tag-name.component.less']
})
export class CvcMolecularProfileTagNameComponent implements OnInit {
    @Input() nameSegments!: MolecularProfileSegment[]
    @Input() enablePopover: boolean = true

    ngOnInit() {
        if(this.nameSegments === undefined) {
            throw new Error('Must pass a list of molecular profile name segments into mp name component.')
        }
    }
}
