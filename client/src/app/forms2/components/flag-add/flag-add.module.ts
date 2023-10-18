import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcCommentInputFormModule } from '@app/forms2/components/comment-input/comment-input.module'
import { CvcFormButtonsModule } from '@app/forms2/components/form-buttons/form-buttons.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcFlagAddForm } from './flag-add.form'

@NgModule({
  declarations: [CvcFlagAddForm],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    NzFormModule,
    NzButtonModule,
    NzCardModule,
    NzAlertModule,
    NzToolTipModule,
    NzSpinModule,
    CvcFormButtonsModule,
    CvcPipesModule,
    CvcCommentInputFormModule,
  ],
  exports: [CvcFlagAddForm],
})
export class CvcFlagAddFormModule {}
