import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcCheckboxModule } from './checkbox/checkbox.module'
import { CvcDirectionSelectModule } from './direction-select/direction-select.module'
import { CvcDiseaseSelectModule } from './disease-select/disease-select.module'
import { CvcEvidenceSelectFieldModule } from './evidence-select/evidence-select.module'
import { CvcGeneSelectModule } from './gene-select/gene-select.module'
import { CvcInteractionSelectModule } from './interaction-select/interaction-select.module'
import { CvcLevelSelectModule } from './level-select/level-select.module'
import { CvcOrgSubmitButtonTypeModule } from './org-submit-button/org-submit-button.type.module'
import { CvcOriginSelectModule } from './origin-select/origin-select.module'
import { CvcPhenotypeSelectModule } from './phenotype-select/phenotype-select.module'
import { CvcRatingModule } from './rating/rating.module'
import { CvcSignificanceSelectModule } from './significance-select/significance-select.module'
import { CvcSourceSelectModule } from './source-select/source-select.module'
import { CvcBaseInputFieldModule } from './tag-input/tag-input.module'
import { CvcTextareaFieldModule } from './textarea/textarea.module'
import { CvcTherapySelectModule } from './therapy-select/therapy-select.module'
import { CvcEntityTypeSelectModule } from './type-select/type-select.module'
import { CvcVariantSelectModule } from './variant-select/variant-select.module'
import { CvcMolecularProfileSelectModule } from './molecular-profile-select/molecular-profile-select.module'
import { CvcAmpCategorySelectModule } from './amp-category-select/amp-category-select.module'
import { CvcAcmgCodeSelectModule } from './acmg-code-select/acmg-code-select.module'
import { CvcClingenCodeSelectModule } from './clingen-code-select/clingen-code-select.module'
import { CvcNccnGuidelineSelectModule } from './nccn-guideline-select/nccn-guideline-select.module'
import { CvcNccnGuidelineVersionFieldModule } from './nccn-guideline-version-input/nccn-guideline-version-input.module'
import { CvcCvcFdaRegulatoryApprovalCheckboxFieldModule } from './fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.module'
import { CvcCvcFdaCompanionTestCheckboxFieldModule } from './fda-companion-test-checkbox/fda-companion-test-checkbox.module'
import { CvcReferenceBuildSelectModule } from './reference-build-select/reference-build-select.module'
import { CvcVariantTypeSelectModule } from './variant-type-select/variant-type-select.module'
import { CvcClinvarInputFieldModule } from './clinvar-input/clinvar-input.module'
import { CvcCancelButtonModule } from './cancel-button/cancel-button.module'
import { CvcBaseInputModule } from './base/input/input.module'
import { CvcBaseSelectModule } from './base/select/select.module'

@NgModule({
  imports: [
    CommonModule,
    CvcOrgSubmitButtonTypeModule,
    CvcTherapySelectModule,
    CvcEntityTypeSelectModule,
    CvcGeneSelectModule,
    CvcVariantSelectModule,
    CvcSignificanceSelectModule,
    CvcDirectionSelectModule,
    CvcDiseaseSelectModule,
    CvcInteractionSelectModule,
    CvcCheckboxModule,
    CvcLevelSelectModule,
    CvcRatingModule,
    CvcOriginSelectModule,
    CvcSourceSelectModule,
    CvcTextareaFieldModule,
    CvcBaseInputFieldModule,
    CvcPhenotypeSelectModule,
    CvcMolecularProfileSelectModule,
    CvcEvidenceSelectFieldModule,
    CvcAmpCategorySelectModule,
    CvcAcmgCodeSelectModule,
    CvcClingenCodeSelectModule,
    CvcNccnGuidelineSelectModule,
    CvcNccnGuidelineVersionFieldModule,
    CvcCvcFdaRegulatoryApprovalCheckboxFieldModule,
    CvcCvcFdaCompanionTestCheckboxFieldModule,
    CvcReferenceBuildSelectModule,
    CvcVariantTypeSelectModule,
    CvcClinvarInputFieldModule,
    CvcCancelButtonModule,
    CvcBaseInputModule,
    CvcBaseSelectModule,
  ],
})
export class CvcFormTypesModule {}
