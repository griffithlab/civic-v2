import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { FormlyModule } from '@ngx-formly/core'
import {
  AcmgCodeInputType,
  acmgCodeSelectTypeOption,
} from './acmg-code-select.type'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { LetModule, PushModule } from '@ngrx/component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcFormFieldWrapperModule } from '../../wrappers/form-field/form-field.module'
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module'

@NgModule({
  declarations: [AcmgCodeInputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    FormlySelectModule,
    NzTagModule,
    NzSelectModule,
    NzSpaceModule,
    CvcPipesModule,
    FormlyModule.forChild({ types: [acmgCodeSelectTypeOption] }),
    CvcFormFieldWrapperModule,
    CvcAutofocusModule,
  ],
})
export class CvcAcmgCodeSelectTypeModule {}
