import { CommonModule } from '@angular/common';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormInfoWrapperModule } from '@app/forms/config/wrappers/form-info/form-info.module';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { NgModule } from '@angular/core';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { VariantDeprecateForm } from './variant-deprecate.form';
import { CvcSubmitButtonTypeModule } from '../config/types/submit-button/submit-button.module';
import { CvcCommentInputFormModule } from '../comment-input/comment-input.module';
import { CvcOrgSelectorBtnGroupModule } from '../config/components/org-selector-btn-group/org-selector-btn-group.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module';

@NgModule({
  declarations: [VariantDeprecateForm],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LetModule, PushModule,
    NgxJsonViewerModule,

    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    NzSpinModule,
    NzCardModule,
    NzSpaceModule,
    NzTypographyModule,
    NzToolTipModule,
    NzSelectModule,

    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcFormInfoWrapperModule,
    CvcMultiFieldTypeModule,
    CvcTextareaBaseTypeModule,
    CvcCancelButtonModule,
    CvcSubmitButtonTypeModule,
    CvcCommentInputFormModule,
    CvcOrgSelectorBtnGroupModule,
    CvcMolecularProfileTagModule,
  ],
  exports: [VariantDeprecateForm],
})
export class VariantDeprecateFormModule {}
