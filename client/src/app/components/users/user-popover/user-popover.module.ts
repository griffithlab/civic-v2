import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcUserPopoverComponent } from './user-popover.component';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzCardModule } from 'ng-zorro-antd/card';
import { LetModule, PushModule } from '@ngrx/component';
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module';
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module';
import { CvcUserAvatarModule } from '@app/components/users/user-avatar/user-avatar.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [CvcUserPopoverComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzGridModule,
    NzCardModule,
    NzDescriptionsModule,
    NzDividerModule,
    CvcLinkTagModule,
    CvcTagListModule,
    CvcOrganizationTagModule,
    CvcUserAvatarModule,
  ],
  exports: [CvcUserPopoverComponent],
})
export class CvcUserPopoverModule {}
