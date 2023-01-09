import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MolecularProfileReviseForm } from './molecular-profile-revise.form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module';
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module';
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module';
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module';
import { CvcFormFieldWrapperModule } from '../config/wrappers/form-field/form-field.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CvcEnsemblInputTypeModule } from '../config/types/ensembl-input/ensembl-input.module';
import { CvcOrgSubmitButtonTypeModule } from '../config/types/org-submit-button/org-submit-button.module';
import { CvcVariantCoordinatesCardTypeModule } from '../config/types/variant-coordinates-card/variant-coordinates-card.module';
import { CvcVariantTypeInputTypeModule } from '../config/types/variant-type-input/variant-type-input.module';
import { CvcFormInfoWrapperModule } from '../config/wrappers/form-info/form-info.module';
import { CvcTagInputTypeModule } from '../config/types/tag-input/tag-input.module';

@NgModule({
  declarations: [MolecularProfileReviseForm],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    ReactiveFormsModule,
    FormlyModule,
    NgxJsonViewerModule,
    NzButtonModule,
    NzCardModule,
    NzCollapseModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzIconModule,
    NzSwitchModule,
    NzSpinModule,
    CvcOrgSubmitButtonTypeModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormContainerWrapperModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcVariantCoordinatesCardTypeModule,
    CvcCommentTextareaTypeModule,
    CvcMultiFieldTypeModule,
    CvcSourceInputTypeModule,
    CvcVariantTypeInputTypeModule,
    CvcEnsemblInputTypeModule,
    CvcTextareaBaseTypeModule,
    CvcCancelButtonModule,
    CvcFormFieldWrapperModule,
    CvcTagInputTypeModule,
    NgxJsonViewerModule,
    CvcFormInfoWrapperModule,
  ],
  exports: [MolecularProfileReviseForm]
})
export class MolecularProfileSuggestRevisionFormModule { }
