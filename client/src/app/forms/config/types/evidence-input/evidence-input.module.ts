import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { LetModule, PushModule } from '@ngrx/component'
import { CvcFormErrorsAlertModule } from '../../components/form-errors-alert/form-errors-alert.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  EvidenceInputType,
  EvidenceInputTypeOption,
} from './evidence-input.type'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcAutofocusModule } from '@app/directives/auto-focus/auto-focus.module'

@NgModule({
  declarations: [EvidenceInputType],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LetModule,
    PushModule,
    FormlyModule.forChild({ types: [EvidenceInputTypeOption] }),
    NzSelectModule,
    NzSpaceModule,
    NzTypographyModule,
    NzButtonModule,
    NzInputModule,
    CvcEvidenceTagModule,
    CvcFormErrorsAlertModule,
    CvcPipesModule,
    CvcAutofocusModule,
  ],
})
export class CvcEvidenceInputTypeModule {}
