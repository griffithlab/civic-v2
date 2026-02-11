import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcForms2Module } from '@app/forms/forms.module'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { RouterModule } from '@angular/router'
import { VariantSubmitForm } from './variant-submit.form'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [VariantSubmitForm],
  imports: [
    CommonModule,
    PushPipe,
    LetDirective,
    NzFormModule,
    NzButtonModule,
    NzAlertModule,
    RouterModule,
    CvcForms2Module,
    CvcFormSubmissionStatusDisplayModule,
    CvcPipesModule,
  ],
  exports: [VariantSubmitForm],
})
export class VariantSubmitFormModule {}
