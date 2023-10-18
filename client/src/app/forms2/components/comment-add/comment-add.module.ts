import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyModule } from '@ngx-formly/core'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcCommentInputFormModule } from '@app/forms2/components/comment-input/comment-input.module'
import { CvcFormButtonsModule } from '@app/forms2/components/form-buttons/form-buttons.module'
import { CvcFormErrorsAlertModule } from '@app/forms2/components/form-errors-alert/form-errors-alert.module'
import { CvcCommentTextareaTypeModule } from '@app/forms2/types/comment-textarea/comment-textarea.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzMentionModule } from 'ng-zorro-antd/mention'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcCommentAddForm } from './comment-add.form'

@NgModule({
  declarations: [CvcCommentAddForm],
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
    NzAlertModule,
    NzToolTipModule,
    FormsModule,
    FormlyModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcCommentBodyModule,
    CvcCommentTextareaTypeModule,
    CvcCommentInputFormModule,
  ],
  exports: [CvcCommentAddForm],
})
export class CvcCommentAddFormModule {}
