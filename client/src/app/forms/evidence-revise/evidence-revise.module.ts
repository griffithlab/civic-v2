import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceReviseForm } from './evidence-revise.form';
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
import { EvidenceItemReviseService } from './evidence-revise.service';
import { CvcRatingInputModule } from '../config/types/rating-input/rating-input.module';
import { CvcDrugInputModule } from '@app/forms/config/types/drug-input/drug-input.module';
import { CvcPhenotypeInputModule } from '@app/forms/config/types/phenotype-input/phenotype-input.module';
import { CvcDiseaseInputModule } from '@app/forms/config/types/disease-input/disease-input.module';
import { CvcSubmitButtonTypeModule } from '@app/forms/config/types/submit-button/submit-button.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';

@NgModule({
  declarations: [EvidenceReviseForm],
  providers: [EvidenceItemReviseService],
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
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcFormInfoWrapperModule,
    CvcSubmitButtonTypeModule,
    CvcMultiFieldModule,
    CvcSourceInputTypeModule,
    CvcDrugInputModule,
    CvcRatingInputModule,
    CvcPhenotypeInputModule,
    CvcDiseaseInputModule,
  ],
  exports: [EvidenceReviseForm]
})
export class EvidenceReviseFormModule { }
