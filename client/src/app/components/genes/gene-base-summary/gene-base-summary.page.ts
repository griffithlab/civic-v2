import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { GeneBaseFieldsFragment } from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-gene-base-summary',
  templateUrl: './gene-base-summary.page.html',
  styleUrls: ['./gene-base-summary.page.less'],
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
    CvcPipesModule,
  ],
})
export class CvcGeneBaseSummaryComponent {
  @Input() gene?: GeneBaseFieldsFragment
}
