import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcViewerButtonComponent } from './viewer-button.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CvcUserCoiFormModule } from '@app/forms/user-coi/user-coi.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { VariantSubmitFormModule } from '@app/forms/variant-submit/variant-submit.module';

@NgModule({
  declarations: [CvcViewerButtonComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzDropDownModule,
    RouterModule,
    NzButtonModule,
    NzSpaceModule,
    NzIconModule,
    NzBadgeModule,
    NzToolTipModule,
    NzModalModule,
    CvcUserAvatarModule,
    CvcUserCoiFormModule,
    VariantSubmitFormModule,
  ],
  exports: [CvcViewerButtonComponent],
})
export class CvcViewerButtonModule {}
