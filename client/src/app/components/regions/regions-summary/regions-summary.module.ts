import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcVariantsMenuModule } from '@app/components/variants/variants-menu/variants-menu.module'
import { CvcMyGeneInfoModule } from '@app/components/genes/my-gene-info/my-gene-info.module'
import { CvcStatusTagModule } from '@app/components/shared/status-tag/status-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { CvcMolecularProfilesMenuModule } from '@app/components/molecular-profiles/molecular-profiles-menu/molecular-profiles-menu.module'
import { RegionsSummaryPage } from './regions-summary.page'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzCardModule } from 'ng-zorro-antd/card'

@NgModule({
  declarations: [RegionsSummaryPage],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzGridModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzSpaceModule,
    NzTagModule,
    NzTabsModule,
    NzCardModule,

    CvcEmptyRevisableModule,
    CvcTagListModule,
    CvcLinkTagModule,
    CvcSourceTagModule,
    CvcStatusTagModule,
    CvcUserTagModule,
    CvcVariantsMenuModule,
    CvcMyGeneInfoModule,
    CvcMolecularProfilesMenuModule,
    CvcPipesModule,
  ],
  exports: [RegionsSummaryPage],
})
export class RegionsSummaryModule {}
