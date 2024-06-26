import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcCommentInputFormModule } from '@app/forms/components/comment-input/comment-input.module'
import { CvcFormButtonsModule } from '@app/forms/components/form-buttons/form-buttons.module'
import { CvcFormErrorsAlertModule } from '@app/forms/components/form-errors-alert/form-errors-alert.module'
import { CvcSubmitButtonTypeModule } from '@app/forms/types/submit-button/submit-button.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { ComplexMolecularProfileDeprecateForm } from './complex-molecular-profile-deprecate.form'

@NgModule({
  declarations: [ComplexMolecularProfileDeprecateForm],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,

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
    CvcSubmitButtonTypeModule,
    CvcCommentInputFormModule,
    CvcMolecularProfileTagModule,
  ],
  exports: [ComplexMolecularProfileDeprecateForm],
})
export class ComplexMolecularProfileDeprecateFormModule {}
