import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcCommentInputFormModule } from '@app/forms/components/comment-input/comment-input.module'
import { CvcFormButtonsModule } from '@app/forms/components/form-buttons/form-buttons.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcFlagResolveForm } from './flag-resolve.form'

@NgModule({
  declarations: [CvcFlagResolveForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzAlertModule,
    NzCardModule,
    NzPopoverModule,
    NzIconModule,
    NzToolTipModule,
    NzSpinModule,
    CvcCommentInputFormModule,
    CvcFormButtonsModule,
  ],
  exports: [CvcFlagResolveForm],
})
export class CvcResolveFlagFormModule {}
