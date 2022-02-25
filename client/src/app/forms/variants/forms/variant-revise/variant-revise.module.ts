import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantReviseForm } from './variant-revise.form';
import { CvcSourceInputTypeModule } from '@app/forms/sources/types/source-input/source-input.module';
import { CvcMultiFieldModule } from '@app/forms/shared/types/multi-field/multi-field.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormlyModule } from '@ngx-formly/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { VariantReviseService } from './variant-revise.service';
import { CvcVariantTypeInputModule } from '@app/forms/variant-types/types/variant-type-input/variant-type-input.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSubmitButtonTypeModule } from '@app/forms/shared/types/submit-button/submit-button.module';
import { CvcFormInfoWrapperModule } from '@app/forms/shared/wrappers/form-info.module';
import { CvcVariantCoordinatesCardModule } from '../../types/variant-coordinates-card/variant-coordinates-card.module';
import { CvcCommentTextareaModule } from '@app/forms/comments/types/comment-textarea/comment-textarea.module';

@NgModule({
  declarations: [VariantReviseForm],
  providers: [VariantReviseService],
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
    NzButtonModule,
    NzSwitchModule,
    CvcSubmitButtonTypeModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormInfoWrapperModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcVariantCoordinatesCardModule,
    CvcCommentTextareaModule,
    CvcMultiFieldModule,
    CvcSourceInputTypeModule,
    CvcVariantTypeInputModule,

    NgxJsonViewerModule,
  ],
  exports: [VariantReviseForm],
})
export class VariantReviseModule { }
