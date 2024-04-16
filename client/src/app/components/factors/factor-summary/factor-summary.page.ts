import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'

import {
  FactorSummaryFieldsFragment,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcNcitDetailsComponent } from '../ncit-details/ncit-details.component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'

@Component({
  standalone: true,
  selector: 'cvc-factor-summary',
  templateUrl: './factor-summary.page.html',
  styleUrls: ['./factor-summary.page.less'],
  imports: [
    CommonModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzSpaceModule,
    NzTagModule,

    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcSourceTagModule,
    CvcLinkTagModule,
    CvcNcitDetailsComponent,
    CvcPipesModule,
    CvcUserTagModule,
  ],
})
export class FactorSummaryComponent implements OnInit {
  @Input() factor!: FactorSummaryFieldsFragment
  @Input() featureId!: number

  subscribableEntity?: SubscribableInput

  ngOnInit() {
    if (this.factor == undefined) {
      throw new Error('Must pass a Factor into factor summary')
    } else if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into factor summary')
    } else {
      this.subscribableEntity = {
        id: this.featureId,
        entityType: SubscribableEntities.Feature,
      }
    }
  }
}
