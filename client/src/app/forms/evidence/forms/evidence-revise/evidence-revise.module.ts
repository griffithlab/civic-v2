import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceReviseForm } from './evidence-revise.form';
import { CvcSourceInputModule } from '@app/forms/sources/types/source-input/source-input.module';
import { CvcMultiFieldModule } from '@app/forms/shared/types/multi-field/multi-field.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EvidenceItemReviseService } from './evidence-revise.service';
import { RatingInputModule } from '../../types/rating-input/rating-input.module';
import { CvcDrugInputModule } from '@app/forms/drugs/types/drug-input/drug-input.module';
import { PhenotypeInputModule } from '@app/forms/phenotypes/types/phenotype-input/phenotype-input.module';
import { CvcDiseaseInputModule } from '@app/forms/diseases/types/disease-input/disease-input.module';
import { CvcSubmitButtonTypeModule } from '@app/forms/shared/types/submit-button/submit-button.module';
import { CvcFormInfoWrapperModule } from '@app/forms/shared/wrappers/form-info.module';

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
    CvcSourceInputModule,
    CvcDrugInputModule,
    RatingInputModule,
    PhenotypeInputModule,
    CvcDiseaseInputModule,
  ],
  exports: [EvidenceReviseForm]
})
export class EvidenceReviseFormModule { }
