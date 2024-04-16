import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'

import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcCoordinatesCardModule } from '../coordinates-card/coordinates-card.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcMolecularProfilesTableModule } from '@app/components/molecular-profiles/molecular-profile-table/molecular-profile-table.module'
import { CvcMyVariantInfoModule } from '../my-variant-info/my-variant-info.module'
import { PushPipe } from '@ngrx/component'
import { VariantSummaryFieldsFragment } from '@app/generated/civic.apollo'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@Component({
  standalone: true,
  selector: 'cvc-gene-variant-summary',
  templateUrl: './gene-variant-summary.page.html',
  styleUrls: ['./gene-variant-summary.page.less'],
  imports: [
    CommonModule,
    PushPipe,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    NzCardModule,
    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcVariantTypeTagModule,
    CvcCoordinatesCardModule,
    CvcLinkTagModule,
    CvcUserTagModule,
    CvcFeatureTagModule,
    CvcMolecularProfilesTableModule,
    CvcMyVariantInfoModule,
    CvcPipesModule,
  ],
})
export class CvcGeneVariantSummaryComponent implements OnInit {
  @Input() variant!: VariantSummaryFieldsFragment

  ngOnInit() {
    if (this.variant == undefined) {
      throw new Error('Must pass GeneVariant into GeneVariant summary')
    }
  }
}
