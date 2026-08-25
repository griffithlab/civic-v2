import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcAmpCategorySelectModule } from './amp-category-select/amp-category-select.module'
import { CvcBaseBooleanRadioModule } from './base/boolean-radio/boolean-radio.module'
import { CvcBaseCheckboxModule } from './base/checkbox/checkbox.module'
import { CvcBaseInputModule } from './base/input/input.module'
import { CvcBaseSelectModule } from './base/select/select.module'
import { CvcBaseTextareaFieldModule } from './base/textarea/textarea.module'
import { CvcCancelButtonModule } from './cancel-button/cancel-button.module'
import { CvcClinvarInputFieldModule } from './clinvar-input/clinvar-input.module'
import { CvcCvcFdaCompanionTestCheckboxFieldModule } from './fda-companion-test-checkbox/fda-companion-test-checkbox.module'
import { CvcCvcFdaRegulatoryApprovalCheckboxFieldModule } from './fda-regulatory-approval-checkbox/fda-regulatory-approval-checkbox.module'
import { CvcDirectionSelectModule } from './direction-select/direction-select.module'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { CvcEntityTypeSelectModule } from './type-select/type-select.module'
import { CvcEvidenceSelectFieldModule } from './evidence-select/evidence-select.module'
import { CvcFeatureSelectModule } from './feature-select/feature-select.module'
import { CvcInteractionSelectModule } from './interaction-select/interaction-select.module'
import { CvcLevelSelectModule } from './level-select/level-select.module'
import { CvcMolecularProfileSelectModule } from './molecular-profile-select/molecular-profile-select.module'
import { CvcNccnGuidelineVersionFieldModule } from './nccn-guideline-version-input/nccn-guideline-version-input.module'
import { CvcOrgSubmitButtonTypeModule } from './org-submit-button/org-submit-button.type.module'
import { CvcOriginSelectModule } from './origin-select/origin-select.module'
import { CvcRatingModule } from './rating/rating.module'
import { CvcReferenceBuildSelectModule } from './reference-build-select/reference-build-select.module'
import { CvcSignificanceSelectModule } from './significance-select/significance-select.module'
import { CvcSourceSelectModule } from './source-select/source-select.module'
import { CvcTagInputModule } from './tag-input/tag-input.module'
import { CvcVariantSelectModule } from './variant-select/variant-select.module'
import { CvcSearchButtonTypeModule } from '@app/forms/types/search-button/search-button.module'
import { CvcQuerySubfiltersModule } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.module'
import { CvcBaseRadioFieldModule } from '@app/forms/types/base/radio/radio.module'
import { CvcQueryFilterModule } from '@app/forms/types/query-builder/query-filter/query-filter.module'
import { CvcStructFilterModule } from './query-builder/struct-filter/struct-filter.module'
import { CvcRegionVariantNameSelectModule } from './region-variant-name-select/region-variant-name-select.module'

@NgModule({
  imports: [
    CommonModule,
    CvcAmpCategorySelectModule,
    CvcBaseBooleanRadioModule,
    CvcBaseCheckboxModule,
    CvcBaseInputModule,
    CvcBaseSelectModule,
    CvcBaseTextareaFieldModule,
    CvcBaseRadioFieldModule,
    CvcCancelButtonModule,
    CvcClinvarInputFieldModule,
    CvcCvcFdaCompanionTestCheckboxFieldModule,
    CvcCvcFdaRegulatoryApprovalCheckboxFieldModule,
    CvcDirectionSelectModule,
    CvcSelectFieldsRegistryModule,
    CvcEntityTypeSelectModule,
    CvcEvidenceSelectFieldModule,
    CvcFeatureSelectModule,
    CvcInteractionSelectModule,
    CvcLevelSelectModule,
    CvcMolecularProfileSelectModule,
    CvcNccnGuidelineVersionFieldModule,
    CvcOrgSubmitButtonTypeModule,
    CvcOriginSelectModule,
    CvcRatingModule,
    CvcReferenceBuildSelectModule,
    CvcSignificanceSelectModule,
    CvcSourceSelectModule,
    CvcTagInputModule,
    CvcVariantSelectModule,
    CvcSearchButtonTypeModule,
    CvcQuerySubfiltersModule,
    CvcQueryFilterModule,
    CvcStructFilterModule,
    CvcRegionVariantNameSelectModule,
  ],
})
export class CvcFormTypesModule {}
