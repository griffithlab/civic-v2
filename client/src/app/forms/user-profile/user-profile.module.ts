import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcUserProfileForm } from './user-profile.form'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzFormModule } from 'ng-zorro-antd/form'
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSelectModule } from 'ng-zorro-antd/select'

@NgModule({
  declarations: [CvcUserProfileForm],
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    NzCardModule,
    NzAlertModule,
    NzRadioModule,
    NzButtonModule,
    NzSpinModule,
    NzSelectModule,
    CvcFormErrorsAlertModule,
  ],
  exports: [CvcUserProfileForm],
})
export class CvcUserProfileFormModule {}
