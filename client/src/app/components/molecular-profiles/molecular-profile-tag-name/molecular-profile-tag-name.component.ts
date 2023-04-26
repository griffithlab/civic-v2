import { Component, Input, OnInit } from '@angular/core'
import { MolecularProfileTextSegment } from '@app/generated/civic.apollo'

type MpGene = {
  id: number
  link: string
  name: string
  __typename: "Gene"
}
type MpVariant = {
  id: number
  link: string
  name: string
  __typename: "Variant"
}
type MpSegment = MpGene  | MolecularProfileTextSegment | MpVariant

@Component({
  selector: 'cvc-mp-tag-name',
  templateUrl: './molecular-profile-tag-name.component.html',
  styleUrls: ['./molecular-profile-tag-name.component.less'],
})
export class CvcMolecularProfileTagNameComponent implements OnInit {
  @Input() nameSegments!: MpSegment[];
  @Input() enablePopover: boolean = true

  ngOnInit() {
    if (this.nameSegments === undefined) {
      throw new Error(
        'Must pass a list of molecular profile name segments into mp name component.'
      )
    }
  }
}
