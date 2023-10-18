import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcCommentInputForm } from './comment-input.form'
import { CvcFormErrorsAlertModule } from '@app/forms2/components/form-errors-alert/form-errors-alert.module'
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module'
import { CvcFormButtonsModule } from '@app/forms2/components/form-buttons/form-buttons.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcCommentTextareaTypeModule } from '@app/forms2/types/comment-textarea/comment-textarea.module'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzMentionModule } from 'ng-zorro-antd/mention'

@NgModule({
  declarations: [CvcCommentInputForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzCardModule,
    NzTabsModule,
    NzFormModule,
    NzSpinModule,
    NzMentionModule,
    FormsModule,
    CvcFormErrorsAlertModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CvcCommentBodyModule,
    CvcCommentTextareaTypeModule,
  ],
  exports: [CvcCommentInputForm],
})
export class CvcCommentInputFormModule {}
