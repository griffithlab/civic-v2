import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'

import {
  FusionSummaryFieldsFragment,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcGeneBaseSummaryComponent } from '@app/components/genes/gene-base-summary/gene-base-summary.page'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

@Component({
  selector: 'cvc-fusion-summary',
  templateUrl: './fusion-summary.page.html',
  styleUrls: ['./fusion-summary.page.less'],
  imports: [
    CommonModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzSpaceModule,
    NzTagModule,
    NzCardModule,
    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcSourceTagModule,
    CvcLinkTagModule,
    CvcPipesModule,
    CvcUserTagModule,
    CvcGeneBaseSummaryComponent,
    CvcFeatureTagModule,
  ],
})
export class FusionSummaryComponent implements OnInit {
  @Input() fusion!: FusionSummaryFieldsFragment
  @Input() featureId!: number

  subscribableEntity?: SubscribableInput

  ngOnInit() {
    if (this.fusion == undefined) {
      throw new Error('Must pass a Fusion into fusion summary')
    } else if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into fusion summary')
    } else {
      this.subscribableEntity = {
        id: this.featureId,
        entityType: SubscribableEntities.Feature,
      }
    }
  }
}
