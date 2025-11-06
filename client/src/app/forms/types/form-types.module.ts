import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcAcmgCodeSelectModule } from './acmg-code-select/acmg-code-select.module'
import { CvcAmpCategorySelectModule } from './amp-category-select/amp-category-select.module'
import { CvcBaseCheckboxModule } from './base/checkbox/checkbox.module'
import { CvcBaseInputModule } from './base/input/input.module'
import { CvcBaseSelectModule } from './base/select/select.module'
import { CvcBaseTextareaFieldModule } from './base/textarea/textarea.module'
import { CvcCancelButtonModule } from './cancel-button/cancel-button.module'
import { CvcClingenCodeSelectModule } from './clingen-code-select/clingen-code-select.module'
import { CvcClinvarInputFieldModule } from './clinvar-input/clinvar-input.module'
import { CvcCvcFdaCompanionTestCheckboxFieldModule } from './fda-companion-test-checkbox/fda-companion-test-checkbox.module'
import { CvcCvcFdaRegulatoryApprovalCheckboxFieldModule } from './fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.module'
import { CvcDirectionSelectModule } from './direction-select/direction-select.module'
import { CvcDiseaseSelectModule } from './disease-select/disease-select.module'
import { CvcEntityTypeSelectModule } from './type-select/type-select.module'
import { CvcEvidenceSelectFieldModule } from './evidence-select/evidence-select.module'
import { CvcFeatureSelectModule } from './feature-select/feature-select.module'
import { CvcInteractionSelectModule } from './interaction-select/interaction-select.module'
import { CvcLevelSelectModule } from './level-select/level-select.module'
import { CvcMolecularProfileSelectModule } from './molecular-profile-select/molecular-profile-select.module'
import { CvcNccnGuidelineSelectModule } from './nccn-guideline-select/nccn-guideline-select.module'
import { CvcNccnGuidelineVersionFieldModule } from './nccn-guideline-version-input/nccn-guideline-version-input.module'
import { CvcOrgSubmitButtonTypeModule } from './org-submit-button/org-submit-button.type.module'
import { CvcOriginSelectModule } from './origin-select/origin-select.module'
import { CvcPhenotypeSelectModule } from './phenotype-select/phenotype-select.module'
import { CvcRatingModule } from './rating/rating.module'
import { CvcReferenceBuildSelectModule } from './reference-build-select/reference-build-select.module'
import { CvcSignificanceSelectModule } from './significance-select/significance-select.module'
import { CvcSourceSelectModule } from './source-select/source-select.module'
import { CvcTagInputModule } from './tag-input/tag-input.module'
import { CvcTherapySelectModule } from './therapy-select/therapy-select.module'
import { CvcVariantSelectModule } from './variant-select/variant-select.module'
import { CvcVariantTypeSelectModule } from './variant-type-select/variant-type-select.module'
import { CvcSearchButtonTypeModule } from '@app/forms/types/search-button/search-button.module'
import { CvcQuerySubfiltersModule } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.module'

@NgModule({
  imports: [
    CommonModule,
    CvcAcmgCodeSelectModule,
    CvcAmpCategorySelectModule,
    CvcBaseCheckboxModule,
    CvcBaseInputModule,
    CvcBaseSelectModule,
    CvcBaseTextareaFieldModule,
    CvcCancelButtonModule,
    CvcClingenCodeSelectModule,
    CvcClinvarInputFieldModule,
    CvcCvcFdaCompanionTestCheckboxFieldModule,
    CvcCvcFdaRegulatoryApprovalCheckboxFieldModule,
    CvcDirectionSelectModule,
    CvcDiseaseSelectModule,
    CvcEntityTypeSelectModule,
    CvcEvidenceSelectFieldModule,
    CvcFeatureSelectModule,
    CvcInteractionSelectModule,
    CvcLevelSelectModule,
    CvcMolecularProfileSelectModule,
    CvcNccnGuidelineSelectModule,
    CvcNccnGuidelineVersionFieldModule,
    CvcOrgSubmitButtonTypeModule,
    CvcOriginSelectModule,
    CvcPhenotypeSelectModule,
    CvcRatingModule,
    CvcReferenceBuildSelectModule,
    CvcSignificanceSelectModule,
    CvcSourceSelectModule,
    CvcTagInputModule,
    CvcTherapySelectModule,
    CvcVariantSelectModule,
    CvcVariantTypeSelectModule,
    CvcSearchButtonTypeModule,
    CvcQuerySubfiltersModule,
  ],
})
export class CvcFormTypesModule {}
