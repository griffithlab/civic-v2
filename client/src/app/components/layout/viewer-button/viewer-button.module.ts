import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcViewerButtonComponent } from './viewer-button.component'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { RouterModule } from '@angular/router'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { CvcUserCoiFormModule } from '@app/forms/user-coi/user-coi.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { VariantSubmitFormModule } from '@app/forms/variant-submit/variant-submit.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { CvcOrganizationAvatarModule } from '@app/components/organizations/organization-avatar/organization-avatar.module'

@NgModule({
  declarations: [CvcViewerButtonComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzDropDownModule,
    RouterModule,
    NzButtonModule,
    NzSpaceModule,
    NzIconModule,
    NzBadgeModule,
    NzToolTipModule,
    NzModalModule,
    NzTypographyModule,
    NzAvatarModule,
    CvcUserAvatarModule,
    CvcUserCoiFormModule,
    CvcOrganizationAvatarModule,
    VariantSubmitFormModule,
  ],
  exports: [CvcViewerButtonComponent],
})
export class CvcViewerButtonModule {}
