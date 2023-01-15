import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationPopoverComponent } from './organization-popover.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';

@NgModule({
  declarations: [CvcOrganizationPopoverComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzCardModule,
    NzGridModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
    CvcUserAvatarModule,
  ],
  exports: [CvcOrganizationPopoverComponent],
})
export class CvcOrganizationPopoverModule {}
