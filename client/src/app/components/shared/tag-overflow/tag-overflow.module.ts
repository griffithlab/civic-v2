import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcTagOverflowComponent } from './tag-overflow.component'
import { CvcTagListModule } from '../tag-list/tag-list.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFeatureVariantTagModule } from '../feature-variant-tag/feature-variant-tag.module'

@NgModule({
  declarations: [CvcTagOverflowComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzPopoverModule,
    CvcTagListModule,
    CvcTherapyTagModule,
    CvcDiseaseTagModule,
    CvcOrganizationTagModule,
    CvcFeatureTagModule,
    CvcVariantTagModule,
    CvcVariantTypeTagModule,
    CvcFeatureVariantTagModule,
  ],
  exports: [CvcTagOverflowComponent],
})
export class CvcTagOverflowModule {}
