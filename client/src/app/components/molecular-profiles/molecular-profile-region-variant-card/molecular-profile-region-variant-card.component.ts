import { Component, Input, OnInit } from '@angular/core'
import { VariantMolecularProfileCardFieldsFragment } from '@app/generated/civic.apollo'
import { LinkableMolecularProfile } from '../molecular-profile-tag/molecular-profile-tag.component'

@Component({
    selector: 'cvc-mp-region-variant-card',
    templateUrl: './molecular-profile-region-variant-card.component.html',
    styleUrls: ['./molecular-profile-region-variant-card.component.less'],
    standalone: false
})
export class CvcMolecularProfileRegionVariantCardComponent implements OnInit {
  @Input() variant!: VariantMolecularProfileCardFieldsFragment
  @Input() currentMolecularProfileId!: number

  displayMps: LinkableMolecularProfile[] = []

  ngOnInit() {
    if (this.variant === undefined) {
      throw new Error('Must pass a Variant into the MP Variant Card Component')
    }

    if (this.currentMolecularProfileId === undefined) {
      throw new Error('Must pass a MP ID into the MP Variant Card Component')
    }

    if (this.variant.__typename !== 'RegionVariant') {
      throw new Error('This card is for RegionVariant variant types only.')
    }

    this.displayMps = this.variant.molecularProfiles.nodes.filter(
      (mp) => mp.id != this.currentMolecularProfileId
    )
  }
}
