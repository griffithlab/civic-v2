import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'

import { CvcFormErrorsAlertModule } from '@app/forms2/components/form-errors-alert/form-errors-alert.module'
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module'
import { CvcFormButtonsModule } from '@app/forms2/components/form-buttons/form-buttons.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzMentionModule } from 'ng-zorro-antd/mention'
import { NgxJsonViewerModule } from 'ngx-json-viewer'
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { VariantSubmitFormModule } from '@app/forms2/config/variant-submit/variant-submit.module'
import { CvcComplexMolecularProfileInputForm } from './complex-molecular-profile-input.form'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'

@NgModule({
  declarations: [CvcComplexMolecularProfileInputForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzPopoverModule,
    NzSpaceModule,
    NzMentionModule,
    NzAlertModule,
    NzSpinModule,
    NzTypographyModule,
    NzTagModule,
    FormsModule,
    CvcFormErrorsAlertModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CvcMolecularProfileTagNameModule,
    CvcMolecularProfileTagModule,
    CvcVariantTagModule,
    VariantSubmitFormModule,
    NgxJsonViewerModule,
  ],
  exports: [CvcComplexMolecularProfileInputForm],
})
export class CvcComplexMolecularProfileInputFormModule {}
