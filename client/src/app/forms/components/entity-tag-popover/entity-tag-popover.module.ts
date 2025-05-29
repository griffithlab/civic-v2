import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcAssertionsPopoverModule } from '@app/components/assertions/assertions-popover/assertions-popover.module'
import { CvcDiseasePopoverModule } from '@app/components/diseases/disease-popover/disease-popover.module'
import { CvcEvidencePopoverModule } from '@app/components/evidence/evidence-popover/evidence-popover.module'
import { CvcFeaturePopoverModule } from '@app/components/features/feature-popover/feature-popover.module'
import { CvcMolecularProfilePopoverModule } from '@app/components/molecular-profiles/molecular-profile-popover/molecular-profile-popover.module'
import { CvcPhenotypePopoverModule } from '@app/components/phenotypes/phenotype-popover/phenotype-popover.module'
import { CvcSourcePopoverModule } from '@app/components/sources/source-popover/source-popover.module'
import { CvcTherapyPopoverModule } from '@app/components/therapies/cvc-therapy-popover/cvc-therapy-popover.module'
import { CvcVariantPopoverModule } from '@app/components/variants/variant-popover/variant-popover.module'
import { CvcEntityTagPopoverComponent } from './entity-tag-popover.component'
import { CvcVariantGroupPopoverModule } from '@app/components/variant-groups/variant-group-popover/variant-group-popover.module'

@NgModule({
  declarations: [CvcEntityTagPopoverComponent],
  imports: [
    CommonModule,
    CvcMolecularProfilePopoverModule,
    CvcDiseasePopoverModule,
    CvcSourcePopoverModule,
    CvcTherapyPopoverModule,
    CvcPhenotypePopoverModule,
    CvcEvidencePopoverModule,
    CvcFeaturePopoverModule,
    CvcVariantPopoverModule,
    CvcAssertionsPopoverModule,
    CvcVariantGroupPopoverModule,
  ],
  exports: [CvcEntityTagPopoverComponent],
})
export class CvcEntityTagPopoverModule {}
