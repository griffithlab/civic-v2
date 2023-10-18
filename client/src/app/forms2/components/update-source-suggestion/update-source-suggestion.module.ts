import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcUpdateSourceSuggestionForm } from './update-source-suggestion.form'
import { CvcFormErrorsAlertModule } from '@app/forms2/components/form-errors-alert/form-errors-alert.module'
import { CvcFormButtonsModule } from '@app/forms2/components/form-buttons/form-buttons.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcCommentInputFormModule } from '../../../forms/comment-input/comment-input.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'

@NgModule({
  declarations: [CvcUpdateSourceSuggestionForm],
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
    NzAlertModule,
    NzInputModule,
    NzSelectModule,
    NzSpaceModule,
    FormsModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
    CvcCommentInputFormModule,
  ],
  exports: [CvcUpdateSourceSuggestionForm],
})
export class CvcUpdateSourceSuggestionFormModule {}
