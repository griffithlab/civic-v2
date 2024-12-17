import { Component, Input, OnInit } from '@angular/core'
import { MolecularProfileTextSegment } from '@app/generated/civic.apollo'

type MpFeature = {
  id: number
  link: string
  name: string
  deprecated: boolean
  flagged: boolean
  __typename: 'Feature'
}
type MpVariant = {
  id: number
  link: string
  name: string
  deprecated: boolean
  flagged: boolean
  __typename: 'Variant'
}
type MpSegment = MpFeature | MolecularProfileTextSegment | MpVariant

@Component({
  selector: 'cvc-mp-tag-name',
  templateUrl: './molecular-profile-tag-name.component.html',
  styleUrls: ['./molecular-profile-tag-name.component.less'],
  standalone: false,
})
export class CvcMolecularProfileTagNameComponent implements OnInit {
  @Input() nameSegments!: MpSegment[]
  @Input() enablePopover: boolean = true

  ngOnInit() {
    if (this.nameSegments === undefined) {
      throw new Error(
        'Must pass a list of molecular profile name segments into mp name component.'
      )
    }
  }
}
