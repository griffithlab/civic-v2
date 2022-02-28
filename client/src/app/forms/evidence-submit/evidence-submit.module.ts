import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceSubmitForm } from './evidence-submit.form';
import { CvcDiseaseInputModule } from '@app/forms/config/types/disease-input/disease-input.module';
import { CvcPhenotypeInputModule } from '@app/forms/config/types/phenotype-input/phenotype-input.module';
import { CvcRatingInputModule } from '../config/types/rating-input/rating-input.module';
import { CvcDrugInputModule } from '@app/forms/config/types/drug-input/drug-input.module';
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module';
import { CvcMultiFieldModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EvidenceItemSubmitService } from './evidence-submit.service';
import { CvcGeneInputModule } from '@app/forms/config/types/gene-input/gene-input.module';
import { CvcVariantInputModule } from '@app/forms/config/types/variant-input/variant-input.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { CvcSubmitButtonTypeModule } from '@app/forms/config/types/submit-button/submit-button.module';
import { CvcCommentTextareaModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';

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
    FormlyModule,
    CvcOrgSelectorBtnGroupModule,
    CvcSubmitButtonTypeModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcCommentTextareaModule,
    CvcMultiFieldModule,
    CvcSourceInputTypeModule,
    CvcDrugInputModule,
    CvcRatingInputModule,
    CvcPhenotypeInputModule,
    CvcDiseaseInputModule,
    CvcGeneInputModule,
    CvcFormInfoWrapperModule,
    CvcVariantInputModule,
  ],
  exports: [EvidenceSubmitForm],
})
export class EvidenceSubmitFormModule { }
