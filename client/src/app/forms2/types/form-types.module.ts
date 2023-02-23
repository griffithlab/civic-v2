import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcBaseInputFieldModule } from './tag-input/tag-input.module'
import { CvcCheckboxModule } from './checkbox/checkbox.module'
import { CvcDirectionSelectModule } from './direction-select/direction-select.module'
import { CvcDiseaseSelectModule } from './disease-select/disease-select.module'
import { CvcTherapySelectModule } from './therapy-select/therapy-select.module'
import { CvcGeneSelectModule } from './gene-select/gene-select.module'
import { CvcInteractionSelectModule } from './interaction-select/interaction-select.module'
import { CvcLevelSelectModule } from './level-select/level-select.module'
import { CvcOrgSubmitButtonTypeModule } from './org-submit-button/org-submit-button.type.module'
import { CvcOriginSelectModule } from './origin-select/origin-select.module'
import { CvcPhenotypeSelectModule } from './phenotype-select/phenotype-select.module'
import { CvcRatingModule } from './rating/rating.module'
import { CvcSignificanceSelectModule } from './significance-select/significance-select.module'
import { CvcSourceSelectModule } from './source-select/source-select.module'
import { CvcTextareaFieldModule } from './textarea/textarea.module'
import { CvcEntityTypeSelectModule } from './type-select/type-select.module'
import { CvcVariantSelectModule } from './variant-select/variant-select.module'
import { CvcMolecularProfileSelectModule } from './molecular-profile-select/molecular-profile-select.module'
import { CvcMolecularProfileBuilderModule } from './molecular-profile-builder/molecular-profile-builder.module'
import { CvcAmpCategorySelectModule } from './amp-category-select/amp-category-select.module'

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
    CvcMolecularProfileBuilderModule,
    CvcMolecularProfileSelectModule,
    CvcAmpCategorySelectModule
  ],
})
export class CvcFormTypesModule {}
