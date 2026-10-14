import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import { VariantMolecularProfileCardFieldsFragment } from '@app/views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated'
import { LinkableMolecularProfile } from '../molecular-profile-tag/molecular-profile-tag.component'

@Component({
  selector: 'cvc-mp-fusion-variant-card',
  templateUrl: './molecular-profile-fusion-variant-card.component.html',
  styleUrls: ['./molecular-profile-fusion-variant-card.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcMolecularProfileFusionVariantCardComponent implements OnInit {
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

    if (this.variant.__typename !== 'FusionVariant') {
      throw new Error('This card is for FusionVariant variant types only.')
    }

    this.displayMps = this.variant.molecularProfiles.nodes.filter(
      (mp) => mp.id != this.currentMolecularProfileId
    )
  }
}
