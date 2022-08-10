import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import {
    NzAlertModule
} from 'ng-zorro-antd/alert';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcFormErrorsAlertModule } from '../config/components/form-errors-alert/form-errors-alert.module';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';
import { CvcCommentTextareaTypeModule } from '../config/types/comment-textarea/comment-textarea.module';
import { CvcDiseaseArrayTypeModule } from '../config/types/disease-array/disease-array.module';
import { CvcSourceArrayTypeModule } from '../config/types/source-array/source-array.module';
import { CvcOrgSubmitButtonTypeModule } from '../config/types/org-submit-button/org-submit-button.module';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
import { SourceSubmitForm } from './source-submit.form';
import { CvcMolecularProfileInputTypeModule } from '../config/types/molecular-profile-input/molecular-profile-input.module';

@NgModule({
  declarations: [
    SourceSubmitForm
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    NzSpinModule,
    NzFormModule,
    NzAlertModule,
    CvcFormContainerWrapperModule,
    CvcFormErrorsAlertModule,
    CvcMolecularProfileInputTypeModule,
    CvcDiseaseArrayTypeModule,
    CvcSourceArrayTypeModule,
    CvcCommentTextareaTypeModule,
    CvcOrgSubmitButtonTypeModule,
    CvcCancelButtonModule,
    NzTypographyModule,
    NzCardModule,
    NzSpaceModule,
    RouterModule,
    NgxJsonViewerModule,
  ],
  exports: [
    SourceSubmitForm
  ]
})
export class CvcSourceSubmitFormModule { }
