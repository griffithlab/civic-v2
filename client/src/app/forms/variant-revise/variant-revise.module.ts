import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { VariantReviseForm } from './variant-revise.form'
import { CvcSourceInputTypeModule } from '@app/forms/config/types/source-input/source-input.module'
import { CvcMultiFieldTypeModule } from '@app/forms/config/types/multi-field/multi-field.module'
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module'
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module'
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module'
import { FormlyModule } from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzFormModule } from 'ng-zorro-antd/form'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { CvcVariantTypeInputTypeModule } from '@app/forms/config/types/variant-type-input/variant-type-input.module'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcCommentTextareaTypeModule } from '@app/forms/config/types/comment-textarea/comment-textarea.module'
import { CvcEnsemblInputTypeModule } from '../config/types/ensembl-input/ensembl-input.module'
import { CvcTextareaBaseTypeModule } from '../config/types/textarea-base/textarea-base.module'
import { CvcCancelButtonModule } from '../config/types/cancel-button/cancel-button.module'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcFormContainerWrapperModule } from '../config/wrappers/form-container/form-container.module'
import { CvcTagInputTypeModule } from '../config/types/tag-input/tag-input.module'
import { CvcFormFieldWrapperModule } from '../config/wrappers/form-field/form-field.module'
import { CvcOrgSubmitButtonTypeModule } from '../config/types/org-submit-button/org-submit-button.module'
import { CvcVariantCoordinatesCardTypeModule } from '../config/types/variant-coordinates-card/variant-coordinates-card.module'
import { CvcGeneArrayTypeModule } from '../config/types/gene-array/gene-array.module'

@NgModule({
  declarations: [VariantReviseForm],
  imports: [
    CommonModule,
    RouterModule,
    LetDirective,
    PushPipe,
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
    CvcTagInputTypeModule,
    CvcFormFieldWrapperModule,
    CvcGeneArrayTypeModule,
    NgxJsonViewerModule,
  ],
  exports: [VariantReviseForm],
})
export class CvcVariantReviseFormModule {}
