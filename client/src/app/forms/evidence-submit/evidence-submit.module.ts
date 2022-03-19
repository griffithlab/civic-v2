import { CommonModule } from '@angular/common';
import { CvcClinicalSignificanceSelectModule } from '../config/types/clinical-significance-select/clinical-significance-select.module';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcDiseaseInputTypeModule } from '@app/forms/config/types/disease-input/disease-input.module';
import { CvcDrugInputTypeModule } from '@app/forms/config/types/drug-input/drug-input.module';
import { CvcEvidenceTypeSelectTypeModule } from '../config/types/evidence-type-select/evidence-type-select.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { CvcGeneInputTypeModule } from '@app/forms/config/types/gene-input/gene-input.module';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcPhenotypeInputTypeModule } from '@app/forms/config/types/phenotype-input/phenotype-input.module';
import { CvcRatingInputTypeModule } from '../config/types/rating-input/rating-input.module';
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module';
import { CvcSubmitButtonTypeModule } from '@app/forms/config/types/submit-button/submit-button.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { CvcVariantInputTypeModule } from '@app/forms/config/types/variant-input/variant-input.module';
import { CvcVariantOriginSelectTypeModule } from '../config/types/variant-origin-select/variant-origin-select.module';
import { EvidenceItemSubmitService } from './evidence-submit.service';
import { EvidenceSubmitForm } from './evidence-submit.form';
import { FormlyModule } from '@ngx-formly/core';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CvcEvidenceLevelSelectModule } from '../config/types/evidence-level-select/evidence-level-select.module';
import { CvcEvidenceDirectionSelectModule } from '../config/types/evidence-direction-select/evidence-direction-select.module';
import { CvcDiseaseArrayTypeModule } from '../config/types/disease-array/disease-array.module';
import { CvcDrugArrayTypeModule } from '../config/types/drugs-array/drugs-array.module';
import { CvcPhenotypeArrayTypeModule } from '../config/types/phenotypes-array/phenotypes-array.module';
import { CvcDrugInteractionSelectTypeModule } from '../config/types/drug-interaction-select/drug-interaction-select.module';
import { CvcGeneArrayTypeModule } from '../config/types/gene-array/gene-array.module';
import { CvcVariantArrayTypeModule } from '../config/types/variant-array/variant-array.module';
import { CvcSourceArrayTypeModule } from '../config/types/source-array/source-array.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcSourceSelectModule } from '../config/types/source-select/source-select.module';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';

@NgModule({
  declarations: [EvidenceSubmitForm],
  providers: [EvidenceItemSubmitService],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgxJsonViewerModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    FormlyModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcFormInfoWrapperModule,
    CvcSubmitButtonTypeModule,
    CvcMultiFieldTypeModule,
    CvcSourceInputTypeModule,
    CvcDrugInputTypeModule,
    CvcRatingInputTypeModule,
    CvcPhenotypeInputTypeModule,
    CvcDiseaseInputTypeModule,
    CvcTextareaBaseTypeModule,
    CvcCommentTextareaTypeModule,
    CvcVariantOriginSelectTypeModule,
    CvcEvidenceTypeSelectTypeModule,
    CvcClinicalSignificanceSelectModule,
    CvcEvidenceLevelSelectModule,
    CvcEvidenceDirectionSelectModule,
    CvcDiseaseArrayTypeModule,
    CvcDrugArrayTypeModule,
    CvcPhenotypeArrayTypeModule,
    CvcDrugInteractionSelectTypeModule,
    CvcGeneArrayTypeModule,
    CvcVariantArrayTypeModule,
    CvcSourceArrayTypeModule,
    CvcSourceSelectModule,
    CvcFormContainerWrapperModule,
    NgxJsonViewerModule,
  ],
  exports: [EvidenceSubmitForm],
})
export class EvidenceSubmitFormModule { }
