import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceSubmitForm } from './evidence-submit.form';
import { DiseaseInputModule } from '@app/forms/diseases/types/disease-input/disease-input.module';
import { PhenotypeInputModule } from '@app/forms/phenotypes/types/phenotype-input/phenotype-input.module';
import { RatingInputModule } from '../../types/rating-input/rating-input.module';
import { DrugInputModule } from '@app/forms/drugs/types/drug-input/drug-input.module';
import { CvcSourceInputModule } from '@app/forms/sources/types/source-input/source-input.module';
import { MultiFieldModule } from '@app/forms/shared/types/multi-field/multi-field.module';
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
import { EvidenceItemSubmitService } from './evidence-submit.service';
import { CvcGeneInputModule } from '@app/forms/genes/types/gene-input/gene-input.module';
import { CvcVariantInputModule } from '@app/forms/variants/types/variant-input/variant-input.module';

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
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    MultiFieldModule,
    CvcSourceInputModule,
    DrugInputModule,
    RatingInputModule,
    PhenotypeInputModule,
    DiseaseInputModule,
    CvcGeneInputModule,
    CvcVariantInputModule,
  ],
  exports: [EvidenceSubmitForm],
})
export class EvidenceSubmitFormModule { }
