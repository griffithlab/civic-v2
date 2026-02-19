import { NgModule } from '@angular/core'
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
import { CvcMolecularProfileRegionVariantCardComponent } from './molecular-profile-region-variant-card.component'

@NgModule({
  declarations: [CvcMolecularProfileRegionVariantCardComponent],
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
  ],
  exports: [CvcMolecularProfileRegionVariantCardComponent],
})
export class CvcMolecularProfileRegionVariantCardModule {}
