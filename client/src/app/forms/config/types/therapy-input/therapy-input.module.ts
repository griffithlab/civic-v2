import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { TherapyInputType, TherapyInputTypeOption } from './therapy-input.type'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcFormErrorsAlertModule } from '@app/forms2/components/form-errors-alert/form-errors-alert.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'

@NgModule({
  declarations: [TherapyInputType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    FormlyModule.forChild({ types: [TherapyInputTypeOption] }),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    CvcTherapyTagModule,
    CvcFormErrorsAlertModule,
    CvcPipesModule,
    CvcAutofocusModule,
  ],
})
export class CvcTherapyInputTypeModule {}
