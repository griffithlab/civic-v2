import { Component, Input, OnInit } from '@angular/core'
import { VariantMolecularProfileCardFieldsFragment } from '@app/generated/civic.apollo'
import { LinkableMolecularProfile } from '../molecular-profile-tag/molecular-profile-tag.component'

import { CommonModule } from '@angular/common'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcMolecularProfileTagModule } from '../molecular-profile-tag/molecular-profile-tag.module'
import { RouterModule } from '@angular/router'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { CvcCoordinatesCardModule } from '@app/components/variants/coordinates-card/coordinates-card.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { CvcNcitDetailsComponent } from '@app/components/factors/ncit-details/ncit-details.component'

@Component({
  selector: 'cvc-mp-factor-variant-card',
  templateUrl: './molecular-profile-factor-variant-card.component.html',
  styleUrls: ['./molecular-profile-factor-variant-card.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzIconModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzCardModule,
    NzCollapseModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcVariantTagModule,
    CvcFeatureTagModule,
    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcVariantTypeTagModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcMolecularProfileTagModule,
    CvcCoordinatesCardModule,
    CvcFeatureVariantTagModule,
    CvcNcitDetailsComponent,
  ],
})
export class CvcMolecularProfileFactorVariantCardComponent implements OnInit {
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

    if (this.variant.__typename !== 'FactorVariant') {
      throw new Error('This card is for FactorVariant variant types only.')
    }

    this.displayMps = this.variant.molecularProfiles.nodes.filter(
      (mp) => mp.id != this.currentMolecularProfileId
    )
  }
}
